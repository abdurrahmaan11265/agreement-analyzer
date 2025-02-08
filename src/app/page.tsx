import Link from "next/link";
import Section1 from "@/components/Section1";
import Card1 from "@/components/Card1";
import { AiFillDropboxCircle } from "react-icons/ai";
import { PiCursorClickFill } from "react-icons/pi";
import { IoAnalytics } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <Section1 />
      <section className="p-10 flex justify-around align-middle min-h-[50vh]">
        <Card1
          icon={<AiFillDropboxCircle size={50} />}
          frontText="1. Upload Document"
          descriptionTitle="Upload your document"
          descriptionPara="Upload your document by dragging and dropping it in the box or by clicking the box to select the Pdf file."
          />
        <Card1
          icon={<PiCursorClickFill size={50} />}
          frontText="2. Click Analyse"
          descriptionTitle="Click the button"
          descriptionPara="Click the button to analyse the document and get the results. Our system scans the document, extracting key clauses and highlighting critical points."
          />
        <Card1
          icon={<IoAnalytics size={50} />}
          frontText="3. Get Results"
          descriptionTitle="Get your results"
          descriptionPara="Get the results of the analysis in a clear and concise manner. Our system provides a summary of the document, highlighting the key points and clauses."
        />
      </section>
    </div>
  );
}
