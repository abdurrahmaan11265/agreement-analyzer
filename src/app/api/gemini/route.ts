import { NextResponse } from 'next/server';
import axios from 'axios';

const geminiAPIKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export async function POST(request: Request) {
    try {
        const { pdfText } = await request.json();

        if (!pdfText) {
            return NextResponse.json({ message: 'PDF text is required' }, { status: 400 });
        }

        const instructions = `
            Risk Analysis - Identify potential risks or loopholes in the agreement.
            Legal Compliance Check - Ensure the agreement aligns with relevant laws and regulations.
            Clause Comparison - Compare similar agreements to suggest stronger or more balanced clauses.
            Readability & Clarity Score out of 100 - Highlight complex or vague sections that need simplification.
            Sentiment Analysis - Determine the tone of the agreement (e.g., neutral, favorable, or biased).
            Obligation Summary - Summarize key obligations for each party.
            Financial Impact Analysis - Assess monetary advantages or disadvantages for each party. give positive and negative percentages.
            Alternative Suggestions - Suggest alternative phrasings or provisions to improve fairness.
            Please provide the response in JSON format and give nothing else. If the pdf data is not a valid agreement return that it is not a valid agreement for string fields and 0 for numeric fields in all the fields.
            The response should be in the following format:
            {
                riskAnalysis: ["Risk 1", "Risk 2", "Risk 3"],
                legalComplianceCheck: ["Compliance 1", "Compliance 2"],
                clauseComparison: ["Clause 1", "Clause 2"],
                readabilityScore: 80,
                sentimentAnalysis: "Neutral",
                obligationSummary: ["Obligation 1", "Obligation 2"],
                financialImpact: {
                    postitive: 30,
                    negative: 70,
                },
                alternativeSuggestions: ["Suggestion 1", "Suggestion 2"],
            }
        `;

        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiAPIKey}`, {
            contents: [{
                parts: [{
                    text: `${pdfText}
                    analyse the following aspects of the agreement from the perspective of a legal Indian expert:
                    ${instructions}`
                }]
            }]
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let jsonResponse = response.data.candidates[0].content.parts[0].text;

        jsonResponse = jsonResponse.replace(/```json\n|```/g, '');

        // console.log('Analysis result:', jsonResponse);

        return NextResponse.json(JSON.parse(jsonResponse));

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error analyzing PDF text:', error.response?.data || error.message);
        } else {
            console.error('Error analyzing PDF text:', error);
        }
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}