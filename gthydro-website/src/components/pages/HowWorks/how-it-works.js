import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import SinglePagePDFViewer from "./components/pdf/single-page";
import AllPagesPDFViewer from "./components/pdf/all-pages";
import {gtdoc} from "./gthydrodoc.pdf"
import Pdfviewer from '../Pdfviewer';




function howitworks() {

 
    return (
        <div>
            
      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <Pdfviewer pdf={gtdoc} />
      </div>

      <hr />
    </div>

    )
}

export default howitworks