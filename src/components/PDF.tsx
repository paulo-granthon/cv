import { ReactElement, useState } from "react";
import html2pdf from "html2pdf.js";

interface PDFGeneratorProps {
  contentId: string;
}

export const PDF = ({ contentId }: PDFGeneratorProps): ReactElement => {
    const [pdfGenerating, setPdfGenerating] = useState(false);

    const handleGeneratePDF = () => {
        const element = document.getElementById(contentId);
        if (!element) {
            console.error("Element with ID " + contentId + " not found.");
            return;
        }

        const elementRect = element.getBoundingClientRect();

        // Create the HTML2PDF instance
        const pdfOptions: Options = {
            margin: 0,
            filename: 'paulo-granthon-resumee_' + new Date().toISOString().split("T")[0] + '.pdf',
            image: { type: "png", quality: 0.98 },
            html2canvas: { scale: 3, useCORS: true },
            jsPDF: { unit: "px", format: [elementRect.width, elementRect.height], orientation: "portrait" },
            hotfixes: ["px_scaling"],
        };

        setPdfGenerating(true);

        html2pdf()
            .from(element)
            .set(pdfOptions)
            .outputPdf()
            .then(() => {
                setPdfGenerating(false);
            })
            .catch((error) => {
                console.error("Error generating PDF:", error);
            })
            .save();
    };

    return (
        <div>
            {!pdfGenerating && <button
                className='actions bx bxs-file-pdf'
                title="Download CV as PDF"
                onClick={handleGeneratePDF}
            />}
        </div>
    );
};
