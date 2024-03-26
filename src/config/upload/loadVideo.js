// const fs = require('fs');
// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//   cloud_name: 'dsxkwbfyq',
//   api_key: '729674232279543',
//   api_secret: '03MYXH6G60zod9FKLWSv7R4Adu0'
// });


const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dsxkwbfyq',
  api_key: '729674232279543',
  api_secret: '03MYXH6G60zod9FKLWSv7R4Adu0'
});

// Function to upload a chunk
async function uploadChunk(chunkPath) {
  try {
    const uploadResult = await cloudinary.uploader.upload(chunkPath, { resource_type: "video" });
    return uploadResult.secure_url;
  } catch (error) {
    console.error('Error uploading chunk:', error);
    throw error;
  }
}

// Upload each chunk and store the URLs
async function uploadVideoChunks(chunkPaths) {
  const chunkUrls = [];
  for (const chunkPath of chunkPaths) {
    const chunkUrl = await uploadChunk(chunkPath);
    chunkUrls.push(chunkUrl);
  }
  return chunkUrls;
}

// Merge the uploaded chunks on Cloudinary
async function mergeChunks(chunkUrls) {
  // Construct a video transformation to concatenate the chunks
  const transformation = {
    transformation: [
      { concatenate: chunkUrls.join("|") }
    ]
  };

  // Generate the URL for the merged video
  const mergedVideoUrl = cloudinary.url('1', transformation);

  console.log('Merged video URL:', mergedVideoUrl);
}

// Usage example
const chunkPaths = ['ll.mp4', 'ff.mp4']; // Paths to the split video chunks
uploadVideoChunks(chunkPaths)
  .then(chunkUrls => mergeChunks(chunkUrls))
  .catch(error => console.error('Error:', error));

