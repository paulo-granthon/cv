import { ReactElement } from "react";
import html2pdf from "html2pdf.js";

interface PdfOptions {
  margin?: number;
  filename?: string;
  image?: { type: string; quality: number };
  html2canvas?: {
    scale: number;
    useCORS: boolean;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    windowWidth?: number;
    windowHeight?: number;
  };
  jsPDF?: {
    unit?: string;
    format?: number[];
    orientation?: string;
  };
  hotfixes: string[];
}

interface PDFGeneratorProps {
  contentId: string;
  setIsGenerating: (isGenerating: boolean) => void;
}

export const PDF = ({
  contentId,
  setIsGenerating,
}: PDFGeneratorProps): ReactElement => {
  const handleGeneratePDF = () => {
    const element = document.getElementById(contentId);
    if (!element) {
      console.error("Element with ID " + contentId + " not found.");
      return;
    }

    setIsGenerating(true);

    // const elementRect = element.getBoundingClientRect();
    const pdfWidth = 1185;
    const pdfHeight = 1580;

    // Create the HTML2PDF instance
    const pdfOptions: PdfOptions = {
      margin: -24,
      filename:
        "paulo-granthon-resumee_" +
        new Date().toISOString().split("T")[0] +
        ".pdf",
      image: {
        type: "webp",
        quality: 0.8,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
        y: -24,
        height: pdfHeight + 48,
        windowWidth: 3440,
        windowHeight: 1440,
      },
      jsPDF: {
        unit: "px",
        format: [pdfWidth - 3, pdfHeight],
        orientation: "portrait",
      },
      hotfixes: ["px_scaling"],
    };

    html2pdf()
      .from(element)
      .set(pdfOptions)
      .outputPdf()
      .catch((error: Error) => {
        console.error("Error generating PDF:", error);
      })
      .then(() => {
        setIsGenerating(false);
      })
      .save();
  };

  return (
    <button
      className="actions bx bxs-file-pdf"
      title="Download as PDF"
      onClick={handleGeneratePDF}
    />
  );
};
