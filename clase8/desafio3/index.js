const express = require("express");
const app = express();
const multer = require("multer")

// app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 3000;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
});

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/index.html")
})

let storage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + "-" + file.originalname);
    }
})

let upload = multer({storage: storage});

app.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const err = new Error("Please upload a file");
        err.httpStatusCode = 400;
        return next(err);
    }
    res.send(file);
});

app.post('/uploadfiles', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
      const error = new Error('please upload files')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(files)
  })

server.on("error", error => console.log(`Error: ${error}`))