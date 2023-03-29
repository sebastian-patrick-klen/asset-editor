import { useEffect, useRef, useState } from 'react';

export default function Canvas() {
  const canvasRef = useRef(null);
  const [canvasLength, setCanvasLength] = useState([]);
  const [windowResizing, setWindowResizing] = useState(false);

  useEffect(() => {
    setCanvasLength([window.innerWidth, window.innerHeight]);

    const handleResize = () => {
      setCanvasLength([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext('2d');
  }, []);

  return (
    <canvas
      className='bg-white dark:bg-slate-900'
      ref={canvasRef}
      width={canvasLength[0]}
      height={canvasLength[1]}
    />
  );
}
