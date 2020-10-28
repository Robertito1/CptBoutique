const config = require("./config");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");

cloudinary.config(config.CLOUDINARY);
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: "videos",
    format: async (req, file) => 'png',
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    });
const parser = multer({ storage: storage });

module.exports = parser; 