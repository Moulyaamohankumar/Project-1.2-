const multer = require('multer');


// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: function(req, file, cb) {
      const uniqueSuffix =  Date.now() + '-' + Math.round.apply(Math.random() * 1e9);
       
       const filename = file.originalname.split(".")[0];
       cb(null,filename + "-" + uniqueSuffix + ".png"); // Define
    },
  });
  

exports.upload = multer({ storage: storage });