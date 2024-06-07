import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page,pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { GlobalWorkerOptions } from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;
// GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
import pdf from "../resume/CV_new.pdf"

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
   <>
    
    <div className="flex items-center w-full justify-center ">
    {/* <Document file={pdf} className={" justify-content-center"}>
 <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
 </Document> */}
 <img src="resume.png" alt="" className="scale-110" />
    </div>
   </>
  )
}

export default Resume
