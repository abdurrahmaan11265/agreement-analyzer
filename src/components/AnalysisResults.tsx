import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { AnalysisData } from '../types/analysis';

interface Props {
    data: AnalysisData;
}

const AnalysisResults = ({ data }: Props) => {
    const financialData = [
        { name: 'Positive', value: data.financialImpact.positive },
        { name: 'Negative', value: data.financialImpact.negative },
    ];

    const COLORS = ['#4CAF50', '#f44336'];

    const GlowWrapper = ({ children, bgColor }: { children: React.ReactNode, bgColor: string }) => (
        <div className="relative group/card h-[100%]">
            <div className={`${bgColor} p-6 rounded-lg shadow relative transition-all duration-500 h-[100%]`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-fuchsia-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-lg" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)] group-hover/card:animate-pulse rounded-lg" />
                <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="relative z-10 transition-transform duration-300 group-hover/card:translate-y-[-2px]">
                    {children}
                </div>
                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-sm group-hover/card:animate-pulse" />
            </div>
        </div>
    );

    return (
        <div className="space-y-6 text-[#ffffff]">
            {/* Readability and Sentiment Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GlowWrapper bgColor="bg-[#141414]">
                    <h3 className="text-xl font-semibold mb-3 text-[#ffffff]">Document Overview</h3>
                    <div className="space-y-2">
                        <p>Readability Score: <span className="font-semibold">{data.readabilityScore}%</span></p>
                        <p>Sentiment: <span className="font-semibold">{data.sentimentAnalysis}</span></p>
                    </div>
                </GlowWrapper>

                <GlowWrapper bgColor="bg-[#282828]">
                    <h3 className="text-xl font-semibold mb-3 text-[#ffffff]">Financial Impact</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={financialData}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {financialData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center space-x-4">
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#4CAF50] rounded-full mr-2"></div>
                            <span>Positive ({data.financialImpact.positive}%)</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#f44336] rounded-full mr-2"></div>
                            <span>Negative ({data.financialImpact.negative}%)</span>
                        </div>
                    </div>
                </GlowWrapper>
            </div>

            {/* Risk Analysis Section */}
            <GlowWrapper bgColor="bg-[#230046]">
                <h3 className="text-xl font-semibold mb-3 text-[#ffffff]">Risk Analysis</h3>
                <ul className="list-disc pl-6 space-y-2">
                    {data.riskAnalysis.map((risk: string, index: number) => (
                        <li key={index} className="text-[#ffffff]">{risk}</li>
                    ))}
                </ul>
            </GlowWrapper>

            {/* Legal Compliance Section */}
            <GlowWrapper bgColor="bg-[#320064]">
                <h3 className="text-xl font-semibold mb-3 text-[#ffffff]">Legal Compliance</h3>
                <ul className="list-disc pl-6 space-y-2">
                    {data.legalComplianceCheck.map((item: string, index: number) => (
                        <li key={index} className="text-[#ffffff]">{item}</li>
                    ))}
                </ul>
            </GlowWrapper>

            {/* Obligations Section */}
            <GlowWrapper bgColor="bg-[#141414]">
                <h3 className="text-xl font-semibold mb-3 text-[#ffffff]">Key Obligations</h3>
                <ul className="list-disc pl-6 space-y-2">
                    {data.obligationSummary.map((obligation: string, index: number) => (
                        <li key={index} className="text-[#ffffff]">{obligation}</li>
                    ))}
                </ul>
            </GlowWrapper>

            {/* Suggestions Section */}
            <GlowWrapper bgColor="bg-[#282828]">
                <h3 className="text-xl font-semibold mb-3 text-[#ffffff]">Suggested Improvements</h3>
                <ul className="list-disc pl-6 space-y-2">
                    {data.alternativeSuggestions.map((suggestion: string, index: number) => (
                        <li key={index} className="text-[#ffffff]">{suggestion}</li>
                    ))}
                </ul>
            </GlowWrapper>
        </div>
    );
};

export default AnalysisResults;
