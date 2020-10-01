import React, {useState} from 'react';
import { Document, Page } from "react-pdf";


function Pdfviewer(props) {

    const [numPages, setNumPages] = useState(1);

    const onDocumentLoadSuccess = ( num ) => {
        setNumPages(num);
      }

      const { pdf } = props;
    return (
        <div>
            <canvas>
            <Document
                file={pdf}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
            {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
             </Document>

            </canvas>
        </div>
    )
}

export default Pdfviewer;
