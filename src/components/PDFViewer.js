import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const PDFViewer = ({ fileURL }) => {
  return (
    <div className="pdf-viewer">
      <Document file={fileURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
