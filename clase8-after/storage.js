const multer = require("multer");
const storageFolder = "uploads";

let storage = multer.diskStorage({
    destination: function (req, res, next) {
        next(null, storageFolder);
    },
    filename: function (req, file, next) {
        next(null, Date.now() + "-" + file.originalname);
    }
});

let upload = multer({storage: storage});

module.exports = upload;