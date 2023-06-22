const pdf = require('html-pdf');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');
const pdfTemplate = require('../Documents/documents');
const env = require('dotenv');
env.config();

exports.createPdf = (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('invoice.pdf', (err) => {
    if (err) {
      console.error('Error generating PDF:', err);
      res.status(500).send('Error generating PDF');
      return;
    }
    res.send('PDF generated');
  });
};

exports.fetchPdf = (req,res)=>{
    const pathToAttachment = path.join(__dirname, '..', 'invoice.pdf');
    res.sendFile(pathToAttachment);
}

exports.sendPdf = (req, res) => {
  const pathToAttachment = path.join(__dirname , 'invoice.pdf');
  fs.readFile(pathToAttachment, (err, data) => {
    if (err) {
      console.error('Error reading PDF file:', err);
      res.status(500).send('Error reading PDF file');
      return;
    }
    const attachment = data.toString('base64');

    const smtpTransport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      service: 'Gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    smtpTransport.sendMail(
      {
        from: process.env.EMAIL,
        to: req.body.email,
        subject: 'Pdf Generate document',
        html: `
        Testing Pdf Generate document, Thanks.`,
        attachments: [
          {
            content: attachment,
            filename: 'invoice.pdf',
            contentType: 'application/pdf',
            path: pathToAttachment,
          },
        ],
      },
      (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).send('Error sending email');
          return;
        }
        res.send('Mail has been sent to your email. Check your mail');
      }
    );
  });
};
