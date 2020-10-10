import React from 'react';



function Pdfviewer(props) {

 
    return (
        <div>
            <canvas>
            <div>
             <canvas>
             <embed src={gtdoc} type="application/pdf" width="400px" height="600px"/>
             </canvas>
         </div>
            

            </canvas>
        </div>
    )
}

export default Pdfviewer
