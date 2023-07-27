import { ReactElement } from "react";
import html2pdf from "html2pdf.js";

interface PdfOptions {
    margin?: number,
    filename?: string,
    image?: { type: string, quality: number },
    html2canvas?: { scale: number, useCORS: boolean },
    jsPDF?: { unit?: string, format?: number[], orientation?: string },
    hotfixes: string[],
}

interface PDFGeneratorProps {
    contentId: string,
    setIsGenerating: (isGenerating: boolean) => void,
}

export const PDF = ({ contentId, setIsGenerating }: PDFGeneratorProps): ReactElement => {

    const handleGeneratePDF = () => {
        const element = document.getElementById(contentId);
        if (!element) {
            console.error("Element with ID " + contentId + " not found.");
            return;
        }

        setIsGenerating(true);

        const elementRect = element.getBoundingClientRect();

        // Create the HTML2PDF instance
        const pdfOptions: PdfOptions = {
            margin: 0,
            filename: 'paulo-granthon-resumee_' + new Date().toISOString().split("T")[0] + '.pdf',
            image: { type: "webp", quality: 0.8 },
            html2canvas: { scale: 1.6, useCORS: true },
            jsPDF: { unit: "px", format: [elementRect.width, elementRect.height], orientation: "portrait" },
            hotfixes: ["px_scaling"],
        };

        html2pdf()
            .from(element)
            .set(pdfOptions)
            .outputPdf()
            .then(() => {
                setIsGenerating(false);
            })
            .catch((error: Error) => {
                console.error("Error generating PDF:", error);
            })
            .save();
    };

    return (
        <button
            className='actions bx bxs-file-pdf'
            title="Download as PDF"
            onClick={handleGeneratePDF}
        />
    );
};
