const Upload = require('../models/uploadModel');


const getDetails = async (req, res, next) => {
    const { title, description,image} = req.body;

    try{
        let data = await Upload.find({});
        res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

const playVideo = async (req, res, next) => {
    const { title} = req.body;
    console.log(title);
    try{
        let data = await Upload.findOne({title});
        console.log(data);
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = { getDetails, playVideo };
