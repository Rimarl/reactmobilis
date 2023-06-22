const fs = require('fs');

const downloadPDF = (pdfFilePath, outputFilePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pdfFilePath, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      fs.writeFile(outputFilePath, data, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  });
};

module.exports = {
  downloadPDF,
};
