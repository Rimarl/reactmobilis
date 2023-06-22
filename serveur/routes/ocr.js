const express = require('express');


const router = express.Router();
router.get('/', (req,res)=>{
    res.send('<h1>Node.js OCR</h1>')
})

const capturedImage = async (req, res, next) => {
    try {
        const path = '../storage/ocr_image.jpeg'     // destination image path
        let imgdata = req.body.img;                 // get img as base64
        const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');     // convert base64
        fs.writeFileSync(path, base64Data,  {encoding: 'base64'});                  // write img file

        Tesseract.recognize(
            'http://localhost:3001/img/ocr_image.jpeg',
            'eng',
            { logger: m => console.log(m) }
        )
        .then(({ data: { text } }) => {
            console.log(text)
            return res.send({
                image: imgdata,
                path: path,
                text: text
            });
        })

    } catch (e) {
        next(e);
    }
}
router.post('/capture', capturedImage)

router.post('/upload', (req, res)=>{
    if(req.files){
        console.log(req.files)
        var unggahFile = req.files.file
        var namaFile = unggahFile.name
        unggahFile.mv('../storage/'+namaFile, (err)=>{
            if(err){
                console.log(err)
                res.send(err)
            } else {
                // console.log(namaFile)
                // res.send(namaFile)
                Tesseract.recognize(
                    `../storage/${namaFile}`,
                    'eng',
                    { logger: m => console.log(m) }
                )
                .then(({ data: { text } }) => {
                    console.log(text)
                    return res.send({
                        image: `http://localhost:3001/img/${namaFile}`,
                        path: `http://localhost:3001/img/${namaFile}`,
                        text: text
                    });
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        })
    }
})

module.exports = router;
