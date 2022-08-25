const cloudinary = require('../utils/cloudinary');
const Upload = require('../models/uploadModel');

// const uploadImage = async (req, res, next) => {
//     const { title, description } = req.body;
//     const filename  = req.files.file;
//     const path = req.files.file.path;
//     const result = await cloudinary.uploader.upload(path, {
//         folder: 'uploads',
//         use_filename: true,
//         unique_filename: false,
//         overwrite: true,
//         tags: ['uploaded']
//     });
//     const image = {
//         title,
//         description,
//         image: result.url
//     };
//     res.status(200).json(image);
// }

const uploadImage = async (req, res, next) => {
    const { title, description,image} = req.body;
    console.log(title);
    console.log(description);
    console.log(image);
    try{
        const Imageresult = await cloudinary.uploader.upload(image, {
            folder: 'uploads',
        });
        // const Videoresult = await cloudinary.uploader.upload(video, {
        //     folder: 'uploads',  
        //     resource_type: 'video',
        // });
        // console.log(JSON.stringify(Videoresult,null,2));
        console.log(JSON.stringify(Imageresult,null,2));
        var newUpload = new Upload({
            title,
            description,
            image: Imageresult.url,
            //video: Videoresult.url
        });
        const takeTitle = await Upload.findOne({title});
        if(takeTitle){
            res.status(400).json({
                message: 'Title already exists'
            });
        }else{
        console.log(newUpload);
        await newUpload.save();
        res.status(200).json(newUpload);
        }
    }catch(err){
        console.log(err);
    }
}


module.exports = { uploadImage };