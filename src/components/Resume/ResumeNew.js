import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import fullstack from "../../Assets/../Assets/Vamsi Template docx.pdf";
import ml from "../../Assets/../Assets/Vamsi ML template.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 className="resume-title">Fullstack Resume</h1>
          <Button
            variant="primary"
            href={fullstack}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={fullstack} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
        <h1 className="resume-title">Machine Learning Resume</h1>
          <Button
            variant="primary"
            href={ml}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Document file={ml} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
