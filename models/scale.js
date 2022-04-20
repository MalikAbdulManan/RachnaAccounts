const mongoose = require("mongoose");

const scaleSchema = new mongoose.Schema({
  scaleID: { type: Number, required: true },  
  scale: { type: Number, required: true },
  houseRent: { type: Number, required: true },
  conPetAllowance: { type: Number, required: true },
  qualificationAllowance : { type: Number, required: true },
  personalAllowance : { type: Number, required: true },
  entertainmentAllowance : { type: Number, required: true },
  ttAllowance: { type: Number, required: true },
  medicalAllowance : { type: Number, required: true },
  socialSecurityBenefit : { type: Number, required: true },
  seniorPostAllowance : { type: Number, required: true },
  speicalReleifAllowance : { type: Number, required: true },
  chairmanAllowance : { type: Number, required: true },
  gpfSubscription: { type: Number, required: true },
  uniTtAllowance : { type: Number, required: true },
  benevolentFund : { type: Number, required: true },
  groupInsurance : { type: Number, required: true },
  specialIncentive : { type: Number, required: true },
  sSb : { type: Number, required: true },
  gIp: { type: Number, required: true },

});

module.exports = mongoose.model("Scale", scaleSchema);
