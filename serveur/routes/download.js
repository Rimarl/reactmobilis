const express = require('express');
const { downloadPDF } = require('../utils/pdfUtils');

const router = express.Router();

router.get('/download', async (req, res) => {
    const { pdf } = req.body; // Chemin vers votre fichier PDF
  const outputFilePath = 'path/to/save/downloaded.pdf'; // Chemin où vous souhaitez enregistrer le fichier téléchargé

  try {
    await downloadPDF(pdfFilePath, outputFilePath);
    res.download(outputFilePath, 'downloaded.pdf');
  } catch (error) {
    console.error(error);
    res.status(500).send('Une erreur est survenue lors du téléchargement du fichier PDF.');
  }
});

module.exports = router;
