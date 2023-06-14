const {Router} = require('express');
const {newUser} = require('../Controller/profileController');
const router = Router();
const multer = require('multer');
const uploadedImage = multer(
    {
        dest: 'images/',
        limits:{fileSize:10000000},
        filter: (req,file,cb)=>{
            
        }
    }).array("picture",5);


router.post("/user", uploadedImage, newUser);
// router.get("/restaurant/:branch", getOneBranch);
// router.get("/restaurants", getAllBranches);
// router.get("/restaurant/:branch/:type", getOneMealType);
// router.put("/restaurant/:branch", updateMenu);
// router.delete("/patient/:id",deletePatient);

module.exports = router;
