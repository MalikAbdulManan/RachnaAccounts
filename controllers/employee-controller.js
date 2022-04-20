const Employee = require("../models/employee");
const HttpError = require("../models/http-error");

const getEmployees = async (req, res, next) => {
  let employees;
  try {
    employees = await Employee.find();
  } catch (error) {
    const er = new HttpError(
      "somthing went wrong, could not fetch Employee",
      500
    );
    return next(er);
  }
  res.status(200).json({
    results: employees.map((employee) => ({
      id: employee._id,
      name: employee.name,
      email: employee.email,
      password: employee.password,
      cnic: employee.cnic,
      pageNo: employee.pageNo,
      accountNo: employee.accountNo,
      department: employee.department,
      scale: employee.scale,
      experience: employee.experience,
      type: employee.type,
      designation: employee.designation,
      category: employee.category,
      
      basicPay:employee.basicPay,
      nonPracticingAllowance:employee.nonPracticingAllowance,
      specialHealthCareAllowance:employee.specialHealthCareAllowance,
      healthProfnlAllowance:employee.healthProfnlAllowance,
      houseRent:employee.houseRent,
      conPetAllowance:employee.conPetAllowance,
      qualificationAllowance:employee.qualificationAllowance,
      entertainmentAllowance:employee.entertainmentAllownace,
      personalAllowance:employee.personalAllowance,
      tTAllowance:employee.tTAllowance,
      medicalAllowance:employee.medicalAllowance,
      socialSecuirtyBenefit:employee.socialSecuirtyBenefit,
      seniorPostAllowance:employee.seniorPostAllowance,
      chairmanAllowance:employee.chairmanAllowance,
      rTWardenAllowance:employee.rTWardenAllowance,
      specialReliefAllowance:employee.specialReliefAllowance,
      incomeTax:employee.incomeTax,
      gPFSubscription:employee.gPFSubscription,
      recGPF:employee.recGPF,
      houseRentR:employee.houseRentR,
      waterCharges:employee.waterCharges,
      shortDays:employee.shortDays,
      convRecovery:employee.convRecovery,
      uniTTAllowance:employee.uniTTAllowance,
      tSAFund:employee.tSAFund,
      benevolentFund:employee.benevolentFund,
      groupInsurance:employee.groupInsurance,
      eidAdvance:employee.eidAdvance,
      busCharges:employee.busCharges,
      speciialIncentive:employee.speciialIncentive,
    
      conveyanceAllowance:employee.conveyanceAllowance,
      integratedAllowance:employee.integratedAllowance,
      disableAllowance:employee.disableAllowance,
      sSB:employee.sSB,
      // ARA ADHOC 
      // recoveryOfGDPMisscellinous:employee.,
      gIP:employee.gIP,
      recEidAdvance:employee.recEidAdvance,
      accomadationCharges:employee.accomadationCharges,
    
      totalAmoluments:employee.totalAmoluments,
      totalDeductions:employee.totalDeductions,
      netPayable:employee.netPayable,

    })),
  });
};

const getEmployee = async (req, res, next) => {
  const employeeId = req.params.id;
  let employee;
  try {
    employee = await Employee.findById({ _id: employeeId });
  } catch (error) {
    const er = new HttpError(
      "something went wrong, could not save Employee",
      500
    );
    return next(er);
  }
  res.status(200).json({
id: employee._id,
      id: employee._id,
      name: employee.name,
      email: employee.email,
      password: employee.password,
      cnic: employee.cnic,
      pageNo: employee.pageNo,
      accountNo: employee.accountNo,
      department: employee.department,
      scale: employee.scale,
      experience: employee.experience,
      type: employee.type,
      designation: employee.designation,
      category: employee.category,

      basicPay:employee.basicPay,
      nonPracticingAllowance:employee.nonPracticingAllowance,
      specialHealthCareAllowance:employee.specialHealthCareAllowance,
      healthProfnlAllowance:employee.healthProfnlAllowance,
      houseRent:employee.houseRent,
      conPetAllowance:employee.conPetAllowance,
      qualificationAllowance:employee.qualificationAllowance,
      entertainmentAllowance:employee.entertainmentAllownace,
      personalAllowance:employee.personalAllowance,
      tTAllowance:employee.tTAllowance,
      medicalAllowance:employee.medicalAllowance,
      socialSecuirtyBenefit:employee.socialSecuirtyBenefit,
      seniorPostAllowance:employee.seniorPostAllowance,
      chairmanAllowance:employee.chairmanAllowance,
      rTWardenAllowance:employee.rTWardenAllowance,
      specialReliefAllowance:employee.specialReliefAllowance,
      incomeTax:employee.incomeTax,
      gPFSubscription:employee.gPFSubscription,
      recGPF:employee.recGPF,
      houseRentR:employee.houseRentR,
      waterCharges:employee.waterCharges,
      shortDays:employee.shortDays,
      convRecovery:employee.convRecovery,
      uniTTAllowance:employee.uniTTAllowance,
      tSAFund:employee.tSAFund,
      benevolentFund:employee.benevolentFund,
      groupInsurance:employee.groupInsurance,
      eidAdvance:employee.eidAdvance,
      busCharges:employee.busCharges,
      speciialIncentive:employee.speciialIncentive,
    
      conveyanceAllowance:employee.conveyanceAllowance,
      integratedAllowance:employee.integratedAllowance,
      disableAllowance:employee.disableAllowance,
      sSB:employee.sSB,
      // ARA ADHOC 
      // recoveryOfGDPMisscellinous:employee.,
      gIP:employee.gIP,
      recEidAdvance:employee.recEidAdvance,
      accomadationCharges:employee.accomadationCharges,
    
      totalAmoluments:employee.totalAmoluments,
      totalDeductions:employee.totalDeductions,
      netPayable:employee.netPayable,

  });
};

const addEmployee = async (req, res, next) => {
  const obj = req.body;
  const employee = new Employee(obj);
  try {
    await employee.save();
  } catch (error) {
    console.log(error);
    const err = new HttpError(
      "something went wrong, could not save Employee",
      403
    );
    return next(err);
  }
  res.status(201).json({
    id: employee._id,
    name: employee.name,
    email: employee.email,
    password: employee.password,
    cnic: employee.cnic,
    pageNo: employee.pageNo,
    accountNo: employee.accountNo,
    department: employee.department,
    scale: employee.scale,
    experience: employee.experience,
    type: employee.type,
    designation: employee.designation,
    category: employee.category,

    basicPay:employee.basicPay,
    nonPracticingAllowance:employee.nonPracticingAllowance,
    specialHealthCareAllowance:employee.specialHealthCareAllowance,
    healthProfnlAllowance:employee.healthProfnlAllowance,
    houseRent:employee.houseRent,
    conPetAllowance:employee.conPetAllowance,
    qualificationAllowance:employee.qualificationAllowance,
    entertainmentAllowance:employee.entertainmentAllownace,
    personalAllowance:employee.personalAllowance,
    tTAllowance:employee.tTAllowance,
    medicalAllowance:employee.medicalAllowance,
    socialSecuirtyBenefit:employee.socialSecuirtyBenefit,
    seniorPostAllowance:employee.seniorPostAllowance,
    chairmanAllowance:employee.chairmanAllowance,
    rTWardenAllowance:employee.rTWardenAllowance,
    specialReliefAllowance:employee.specialReliefAllowance,
    incomeTax:employee.incomeTax,
    gPFSubscription:employee.gPFSubscription,
    recGPF:employee.recGPF,
    houseRentR:employee.houseRentR,
    waterCharges:employee.waterCharges,
    shortDays:employee.shortDays,
    convRecovery:employee.convRecovery,
    uniTTAllowance:employee.uniTTAllowance,
    tSAFund:employee.tSAFund,
    benevolentFund:employee.benevolentFund,
    groupInsurance:employee.groupInsurance,
    eidAdvance:employee.eidAdvance,
    busCharges:employee.busCharges,
    speciialIncentive:employee.speciialIncentive,
  
    conveyanceAllowance:employee.conveyanceAllowance,
    integratedAllowance:employee.integratedAllowance,
    disableAllowance:employee.disableAllowance,
    sSB:employee.sSB,
    // ARA ADHOC 
    // recoveryOfGDPMisscellinous:employee.,
    gIP:employee.gIP,
    recEidAdvance:employee.recEidAdvance,
    accomadationCharges:employee.accomadationCharges,
  
    totalAmoluments:employee.totalAmoluments,
    totalDeductions:employee.totalDeductions,
    netPayable:employee.netPayable,

  });
};

const deleteEmployee = async (req, res, next) => {
  const employeeId = req.params.id;
  let employee;
  try {
    employee = await Employee.findById({ _id: employeeId });
  } catch (error) {
    const err = new HttpError(
      "somthing went wrong, could not delete Employee",
      500
    );
    return next(err);
  }
  if (!employee) {
    const err = new HttpError("could not find employee", 500);
    return next(err);
  }
  try {
    await Employee.deleteOne({ _id: employeeId });
  } catch (error) {
    const err = new HttpError(
      "somthing went wrong, could not delete employee",
      500
    );
    return next(err);
  }
  res.status(200).json({ message: "Deleted Employee" });
};

const updateEmployee = async (req, res, next) => {
  const employeeId = req.params.id;
  let employee;
  try {
    employee = await Employee.findById({ _id: employeeId });
  } catch (error) {
    const err = new HttpError(
      "somthing went wrong, could not delete employee",
      500
    );
    return next(err);
  }
  if (!employee) {
    const err = new HttpError("could not find employee", 500);
    return next(err);
  }

  const updatedEmployee = req.body;

  try {
    await Employee.updateOne({ _id: employeeId }, updatedEmployee);
  } catch (error) {
    const err = new HttpError(
      "something went wrong,could not update employee",
      500
    );
    return next(err);
  }
  res.status(200).json({
    id: employee._id,
    name: employee.name,
    email: employee.email,
    password: employee.password,
    cnic: employee.cnic,
    pageNo: employee.pageNo,
    accountNo: employee.accountNo,
    department: employee.department,
    scale: employee.scale,
    experience: employee.experience,
    type: employee.type,
    designation: employee.designation,
    category: employee.category,

    basicPay:employee.basicPay,
    nonPracticingAllowance:employee.nonPracticingAllowance,
    specialHealthCareAllowance:employee.specialHealthCareAllowance,
    healthProfnlAllowance:employee.healthProfnlAllowance,
    houseRent:employee.houseRent,
    conPetAllowance:employee.conPetAllowance,
    qualificationAllowance:employee.qualificationAllowance,
    entertainmentAllowance:employee.entertainmentAllownace,
    personalAllowance:employee.personalAllowance,
    tTAllowance:employee.tTAllowance,
    medicalAllowance:employee.medicalAllowance,
    socialSecuirtyBenefit:employee.socialSecuirtyBenefit,
    seniorPostAllowance:employee.seniorPostAllowance,
    chairmanAllowance:employee.chairmanAllowance,
    rTWardenAllowance:employee.rTWardenAllowance,
    specialReliefAllowance:employee.specialReliefAllowance,
    incomeTax:employee.incomeTax,
    gPFSubscription:employee.gPFSubscription,
    recGPF:employee.recGPF,
    houseRentR:employee.houseRentR,
    waterCharges:employee.waterCharges,
    shortDays:employee.shortDays,
    convRecovery:employee.convRecovery,
    uniTTAllowance:employee.uniTTAllowance,
    tSAFund:employee.tSAFund,
    benevolentFund:employee.benevolentFund,
    groupInsurance:employee.groupInsurance,
    eidAdvance:employee.eidAdvance,
    busCharges:employee.busCharges,
    speciialIncentive:employee.speciialIncentive,
  
    conveyanceAllowance:employee.conveyanceAllowance,
    integratedAllowance:employee.integratedAllowance,
    disableAllowance:employee.disableAllowance,
    sSB:employee.sSB,
    // ARA ADHOC 
    // recoveryOfGDPMisscellinous:employee.,
    gIP:employee.gIP,
    recEidAdvance:employee.recEidAdvance,
    accomadationCharges:employee.accomadationCharges,
  
    totalAmoluments:employee.totalAmoluments,
    totalDeductions:employee.totalDeductions,
    netPayable:employee.netPayable,

  });
};

module.exports = {
  addEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployee,
};
