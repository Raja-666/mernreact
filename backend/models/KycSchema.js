const mongoose = require('mongoose');

const kycSchema = new mongoose.Schema({
  status: {
    default: 0,
    type: Number
  },
  proofType: String,
  frontSideProof: String,
  backSideProof: String,
  selfieProof: String,
  address: String,
  number:String,
  frontStatus:{
    default: false,
    type: Boolean
  },
  backStatus:{
    default: false,
    type: Boolean
  },
  selfiStatus:{
    default: false,
    type: Boolean
  },
  frontReason:{
    default: "",
    type: String
  },
  backReason:{
    default: "",
    type: String
  },
  selfiReason:{
    default: "",
    type: String
  },
  
}, {
  timestamps: true
});

const KYCModel = mongoose.model('KYC', kycSchema);
module.exports = KYCModel;
