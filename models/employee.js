const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cnic: { type: String, required: true },
  pageNo: { type: Number, required: true },
  accountNo: { type: String, required: true },
  department: { type: String, required: true },
  scale: { type: Number, required: true },
  experience: { type: Number, required: true },
  type: { type: String, required: true },
  designation: { type: String, required: true },
  category: { type: String, required: true },
  
  basicPay: { type: Number, required: true },
  nonPracticingAllowance: { type: Number, required: true },
  specialHealthCareAllowance: { type: Number, required: true },
  healthProfnlAllowance: { type: Number, required: true },
  houseRent: { type: Number, required: true },
  conPetAllowance: { type: Number, required: true },
  qualificationAllowance: { type: Number, required: true },
  entertainment: { type: Number, required: true },
  personalAllowance: { type: Number, required: true },
  tTAllowance: { type: Number, required: true },
  medicalAllowance: { type: Number, required: true },
  socialSecuirtyBenefit: { type: Number, required: true },
  seniorPostAllowance: { type: Number, required: true },
  chairmanAllowance: { type: Number, required: true },
  rTWardenAllowance: { type: Number, required: true },
  specialReliefAllowance: { type: Number, required: true },
  incomeTax: { type: Number, required: true },
  gPFSubscription: { type: Number, required: true },
  recGPF: { type: Number, required: true },
  houseRentR: { type: Number, required: true },
  waterCharges: { type: Number, required: true },
  shortDays: { type: Number, required: true },
  convRecovery: { type: Number, required: true },
  uniTTAllowance: { type: Number, required: true },
  tSAFund: { type: Number, required: true },
  benevolentFund: { type: Number, required: true },
  groupInsurance: { type: Number, required: true },
  eidAdvance: { type: Number, required: true },
  busCharges: { type: Number, required: true },
  speciialIncentive: { type: Number, required: true },

  conveyanceAllowance: { type: Number, required: true },
  integratedAllowance: { type: Number, required: true },
  disableAllowance: { type: Number, required: true },
  sSB: { type: Number, required: true },
  // ARA ADHOC 
  // recoveryOfGDPMisscellinous: { type: Number, required: true },,
  gIP: { type: Number, required: true },
  recEidAdvance: { type: Number, required: true },
  accomadationCharges: { type: Number, required: true },

  totalAmoluments: { type: Number, required: true },
  totalDeductions: { type: Number, required: true },
  netPayable: { type: Number, required: true },



  

  
});

module.exports = mongoose.model("Employee", employeeSchema);
