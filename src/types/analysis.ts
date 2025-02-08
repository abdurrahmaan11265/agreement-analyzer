export interface AnalysisData {
    summary: string;
    readabilityScore: number;
    sentimentAnalysis: string;
    financialImpact: {
        positive: number;
        negative: number;
    };
    riskAnalysis: string[];
    legalComplianceCheck: string[];
    obligationSummary: string[];
    alternativeSuggestions: string[];
}
