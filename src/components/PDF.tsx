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

        const formattedDate = new Date().toISOString().split("T")[0]; // Get the date in YYYY-MM-DD format

        // Create the HTML2PDF instance
        const pdfOptions: Options = {
            margin: 0,
            filename: 'paulo-granthon-resumee_' + formattedDate + '.pdf',
            image: { type: "png", quality: 0.98 },
            html2canvas: { scale: 3, useCORS: true },
            jsPDF: { unit: "px", format: [1185, 1580], orientation: "portrait" },
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
        {!pdfGenerating && <button onClick={handleGeneratePDF}>Generate PDF</button>}
        </div>
    );
};
