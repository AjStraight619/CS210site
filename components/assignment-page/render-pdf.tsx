"use client";

import { Document, Page } from "react-pdf";

const RenderPdf = ({ pdfUrl }: { pdfUrl: string }) => {
  return (
    <Document file={pdfUrl}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default RenderPdf;
