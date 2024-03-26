
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dsxkwbfyq',
    api_key: '729674232279543',
    api_secret: '03MYXH6G60zod9FKLWSv7R4Adu0'
});

const imagePath = 'tru-tien.jpg';

cloudinary.uploader.upload(imagePath, { folder: 'img-movie' }, (error, result) => {
    if (error) {
      console.error("Error uploading image:", error);
    } else {
      console.log("Image uploaded successfully. URL:", result.secure_url);
    }
});