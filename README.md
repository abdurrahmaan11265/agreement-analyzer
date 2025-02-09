# Agreement Analyzer

An AI-powered tool that analyzes legal agreements and contracts using Gemini API, providing detailed insights and analysis.

## Features

- 📄 PDF Document Upload
- 🔍 Text Extraction & Analysis
- 📊 Visual Analytics
- 💡 AI-Powered Insights
- 🚀 Real-time Processing

## Analysis Provided

- Risk Assessment
- Legal Compliance Check
- Readability Score
- Sentiment Analysis
- Financial Impact Analysis
- Obligation Summary
- Alternative Suggestions

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS, Styled-Components
- **PDF Processing**: pdf.js
- **Charts**: Recharts
- **AI**: Google Gemini API
- **API Handling**: Axios

## Project Structure

```
agreement-analyzer/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── gemini/        # AI analysis endpoint
│   │   ├── analyse/           # Analysis page
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   ├── lib/                   # Utility functions
│   ├── types/                 # TypeScript definitions
│   └── utils/                 # Helper functions
```

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Usage

1. Navigate to the Analysis page
2. Upload a PDF document (drag & drop or click to select)
3. Click "Analyze" to process the document
4. View the comprehensive analysis results:
   - Risk analysis
   - Legal compliance
   - Financial impact
   - Readability metrics
   - Suggested improvements

## Build and Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the framework
- Google Gemini API for AI capabilities
- PDF.js for PDF processing
- Recharts for data visualization
