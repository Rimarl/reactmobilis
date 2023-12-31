const express = require('express');
const { createPdf, fetchPdf, sendPdf } = require('../Controllers/pdfControlers')
const pdfRoute = express.Router()


// Define your routes
pdfRoute.post('/createPdf',createPdf) // to generate pdf 

pdfRoute.get('/fetchPdf',fetchPdf) // to fetch the generated pdf

pdfRoute.post('/sendPdf',sendPdf) //sent pdf to mail 


module.exports = pdfRoute

