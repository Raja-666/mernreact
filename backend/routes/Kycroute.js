const express = require('express');
const router = express.Router();
const multer = require('multer');
const kycController = require('../controller/Kyccontroller');

router.post('/submitKYC', kycController.handleKyccontrol);
router.post('/getKyc', kycController.handleGetKYC);

module.exports = router;