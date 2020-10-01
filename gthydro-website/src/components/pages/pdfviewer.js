import React from 'react'

function pdfviewer() {
    return (
        <div>
            <canvas>
            <embed src=".../pdfjs-2.5.207-dist/web/viewer.html?file=gthydrodoc.pdf" />

            </canvas>
        </div>
    )
}

export default pdfviewer
