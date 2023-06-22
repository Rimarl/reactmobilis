import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { createWorker } from 'tesseract.js';

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState('');
  const [ocrResult, setOCRResult] = useState('');

  const captureImage = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    await performOCR(imageSrc);
  };

  const performOCR = async (imageSrc) => {
    const worker = createWorker({
      // Indiquez le chemin vers les fichiers de langue français de Tesseract.js
      langPath: 'https://tessdata.projectnaptha.com/4.0.0_best',
    });

    await worker.load();
    await worker.loadLanguage('fra');
    await worker.initialize('fra');

    const { data: { text } } = await worker.recognize(imageSrc);

    // Filtrer les chiffres à partir du texte reconnu
    const numbers = text.match(/\d+/g);
    const result = numbers ? numbers.join(' ') : 'Aucun chiffre trouvé';

    setOCRResult(result);

    await worker.terminate();
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={captureImage}>Capture</button>
      {capturedImage && <img src={capturedImage} alt="Captured" />}
      {ocrResult && (
        <div>
          <h2>Résultat OCR :</h2>
          <p>{ocrResult}</p>
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
