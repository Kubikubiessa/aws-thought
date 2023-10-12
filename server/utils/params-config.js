const { v4: uuidv4 } = require('uuid');
const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      // Replace the <My_Bucket_Name> with the name of your own S3 bucket
      Bucket: 'user-images-a12418fe-8c7f-4d84-a8bd-f78877abcf2b',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
      ACL: 'public-read', 
    };
  
    return imageParams;
  };
  module.exports = params;