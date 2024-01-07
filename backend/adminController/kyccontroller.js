const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Kyc = require('../models/KycSchema');



const handleGetKyc = async (req, res) => {
    try {
        let KycData = await Kyc.find({});
        return res.status(200).json({ success: true, data: KycData, message: 'Successfully get!!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, data: [], message: 'Internal server error' });
    }
};

const handleUpdateKyc = async (req, res) => {
    try {
        const reqData = req.body // type || flag
        console.table(reqData)


        if (reqData.flag === 0) {
            let d = reqData.type.split('Reason').at(0) + 'Status'
            updateQ = { [reqData.type]: reqData.reason, [d]: false }
        }else{
            let d = reqData.type.split('Status').at(0) + 'Reason'
            updateQ = { [reqData.type]: true , [d] : '' }
        }

        await Kyc.findOneAndUpdate({ _id: reqData._id }, updateQ);
        msg = reqData.type + reqData.flag === 0 ? 'Rejected' : ' Approved'

        res.status(200).json({ success: true, message: msg });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Err-' + error.message });
    }
};


// OLD
const handleUpdateKyc_old = async (req, res) => {
    try {
        const reqData = req.body
        /**
         * _id : Id
         * status : 1 -> apprv
         * status : 2 -> reject
         */

        await Kyc.findOneAndUpdate({ _id: reqData._id }, { status: reqData.status });
        msg = 'Kyc Verified'
        if (reqData.status == 2) {
            msg = 'Kyc Rejected'
        }
        res.status(200).json({ success: true, message: msg });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Err-' + error.message });
    }
};

module.exports = { handleGetKyc, handleUpdateKyc };