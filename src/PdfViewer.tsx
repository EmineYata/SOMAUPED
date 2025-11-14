import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

type PdfViewerProps = {
  src: string;
  startPage?: number;
};

const PdfViewer = ({ src, startPage = 1 }: PdfViewerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(320);
  const [numPages, setNumPages] = useState<number>(0);

  useEffect(() => {
    const handle = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setWidth(Math.max(280, Math.min(w, 900)));
      }
    };
    handle();
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <Document file={src} onLoadSuccess={(info) => setNumPages(info.numPages)} loading={null}>
        {Array.from({ length: Math.max(0, numPages - (startPage - 1)) }, (_, i) => i + startPage).map((page) => (
          <div key={page} style={{ margin: '0 auto 16px' }}>
            <Page pageNumber={page} width={width} renderTextLayer={false} renderAnnotationLayer={false} />
          </div>
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
