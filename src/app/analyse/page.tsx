"use client";
import { useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { TextItem, TextMarkedContent } from 'pdfjs-dist/types/src/display/api';
import { IoCloudUploadOutline } from "react-icons/io5";
import Button1 from '../../components/Button1';
import AnalysisResults from '../../components/AnalysisResults';
import type { AnalysisData } from '../../types/analysis';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

export default function Analyse() {
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [analysisResult, setAnalysisResult] = useState<AnalysisData | null>(null);

    const extractText = async (file: File): Promise<string> => {
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({
                data: arrayBuffer,
                useWorkerFetch: false,
                isEvalSupported: false,
                disableFontFace: true,
            }).promise;

            let fullText = '';

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const pageText = textContent.items
                    .map((item: TextItem | TextMarkedContent) => 'str' in item ? item.str : '')
                    .join(' ');
                fullText += pageText + '\n';
            }

            return fullText;
        } catch (err) {
            console.error('Error reading PDF file', err);
            throw new Error('Error reading PDF file');
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            setError('');
        } else {
            setSelectedFile(null);
            setError('Please select a valid PDF file');
        }
    };

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            setError('');
        } else {
            setError('Please drop a valid PDF file');
        }
    }, []);

    const handleSubmit = async () => {
        if (!selectedFile) {
            setError('Please select a PDF file first');
            return;
        }

        try {
            setIsLoading(true);
            const extractedText = await extractText(selectedFile);

            if (!extractedText) {
                setError('Failed to extract text from the PDF');
                setIsLoading(false);
                return;
            }

            const response = await fetch('/api/gemini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pdfText: extractedText }),
            });

            const result = await response.json();
            if (response.ok) {
                setAnalysisResult(result);
                setError('');
            } else {
                setError(result.message || 'Failed to analyze the PDF');
            }
        } catch (err) {
            setError('Failed to process the PDF');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Analyse your agreement</h1>

            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed p-8 mb-4 text-center rounded-lg transition-colors bg-[#721fa8]
                    ${isDragging ? 'bg-[#e74aff]' : 'border-gray-300'}
                    ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf"
                    className="hidden"
                    id="fileInput"
                    disabled={isLoading}
                />
                <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center justify-center space-y-2">
                    <IoCloudUploadOutline className='text-5xl' />
                    {selectedFile ? selectedFile.name : 'Drag & drop your PDF here or click to select'}
                </label>
            </div>

            {error && (
                <div className="text-red-500 mb-4">
                    {error}
                </div>
            )}

            {selectedFile && !isLoading && (
                <div className="flex justify-center mb-4">
                    <Button1 text="Analyse" onClick={handleSubmit} />
                </div>
            )}

            {isLoading && (
                <div className="flex items-center justify-center mb-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <span className="ml-2">Processing PDF...</span>
                </div>
            )}

            {analysisResult && (
                <div className="mt-4">
                    <AnalysisResults data={analysisResult} />
                </div>
            )}

        </div>
    );
}