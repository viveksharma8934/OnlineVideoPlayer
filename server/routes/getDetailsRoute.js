const express = require('express');
const router = express.Router();

const {
    getDetails,
    playVideo,
} = require('../controllers/getDetailsController');

router.get('/getDetails', getDetails);
router.get('/playVideo', playVideo);

module.exports = router;