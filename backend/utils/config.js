
let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;

const CLOUDINARY = {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
    }

if (process.env.NODE_ENV === "test") {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
} 


module.exports = {
  MONGODB_URI,
  PORT,
  CLOUDINARY
};

