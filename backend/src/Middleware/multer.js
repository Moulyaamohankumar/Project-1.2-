const multer = require('multer');


// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Define your upload folder
    },
    filename: function(req, file, cb) {
      const uniqueSuffix =  Date.now() + '-' + Math.round.apply(Math.random() * 1e9);
       // Define a unique filename
       const filename = file.originalname.split(".")[0];
       cb(null,filename + "-" + uniqueSuffix + ".png"); // Define
    },
  });

  const productStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'productUploads/'); // Define your upload folder
    },
    filename: function(req, file, cb) {
      const uniqueSuffix =  Date.now() + '-' + Math.round.apply(Math.random() * 1e9);
       // Define a unique filename
       const filename = file.originalname.split(".")[0]; // when the file name is give 123.pdf, it will split the name and return 123 
       cb(null,filename + "-" + uniqueSuffix + ".png"); // filename will be 123-123456789.png
    },
  });
  
  // Initialize upload object
exports.upload = multer({ storage: storage });