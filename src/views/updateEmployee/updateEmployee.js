/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import ViewEmployees from '../ViewEmployees/ViewEmployees';
import API from '../API/api';


const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1,
    // },
    btn: {
             marginRight: theme.spacing(4)
    },
    title: {
        flexGrow: 1
    }
}));
const updateEmployee = () => {
    const classes = useStyles();
    const [employee, setEmployee] = useState({
        
        name: '',
        email: '',
        password: '',
        cnic: 0,
        pageNo: 0,
        accountNo: '',
        department: '',
        scale: 0,
        experience: 0,
        type: '',
        designation: '',
        category: '',

        basicPay: 0,
        nonPracticingAllowance: 0,
        specialHealthCareAllowance: 0,
        healthProfnlAllowance: 0,
        houseRent: 0,
        conPetAllowance: 0,
        qualificationAllowance: 0,
        entertainment: 0,
        personalAllowance: 0,
        tTAllowance: 0,
        medicalAllowance: 0,
        socialSecuirtyBenefit: 0,
        seniorPostAllowance: 0,
        chairmanAllowance: 0,
        rTWardenAllowance: 0,
        specialReliefAllowance: 0,
        incomeTax: 0,
        gPFSubscription: 0,
        recGPF: 0,
        houseRentR: 0,
        waterCharges: 0,
        shortDays: 0,
        convRecovery: 0,
        uniTTAllowance: 0,
        tSAFund: 0,
        benevolentFund: 0,
        groupInsurance: 0,
        eidAdvance: 0,
        busCharges: 0,
        speciialIncentive: 0,
      
        conveyanceAllowance: 0,
        integratedAllowance: 0,
        disableAllowance: 0,
        sSB: 0,
        // ARA ADHOC 
        // recoveryOfGDPMisscellinous: 0,
        gIP: 0,
        recEidAdvance: 0,
        accomadationCharges: 0,
      
        totalAmoluments: 0,
        totalDeductions: 0,
        netPayable: 0,
    });
    const add =async ()=>{
        try{
            
            const res= await API.patch("/employee/62533cbecc9b5985d5a78e31", employee)
            setFlag(true);
            
        }
        catch(error){
            console.log(error)
    }
    
}
   

    const [flag, setFlag] = useState(false);

    const employeeHandler = (e, type) => {
       
          if (type === 'name') {
            setEmployee({ ...employee, name: e.target.value });
        } else if (type === 'email') {
            setEmployee({ ...employee, email: e.target.value });
        } else if (type === 'password') {
            setEmployee({ ...employee, password: e.target.value });
        } else if (type === 'cnic') {
            setEmployee({ ...employee, cnic: e.target.value });
        } else if (type === 'pageNo') {
            setEmployee({ ...employee, pageNo: e.target.value });
        } else if (type === 'accountNo') {
            setEmployee({ ...employee, accountNo: e.target.value });
        } else if (type === 'department') {
            setEmployee({ ...employee, department: e.target.value });
        } else if (type === 'scale') {
            setEmployee({ ...employee, scale: e.target.value });
        } else if (type === 'experience') {
            setEmployee({ ...employee, experience: e.target.value });
        } else if (type === 'type') {
            setEmployee({ ...employee, type: e.target.value });
        } else if (type === 'designation') {
            setEmployee({ ...employee, designation: e.target.value });
        } else if (type === 'category') {
            setEmployee({ ...employee, category: e.target.value });
        } else if (type === 'basicPay') {
            setEmployee({ ...employee, basicPay: e.target.value });
        } else if (type === 'nonPracticingAllowance') {
            setEmployee({ ...employee, nonPracticingAllowance: e.target.value });
        } else if (type === 'specialHealthCareAllowance') {
            setEmployee({ ...employee, specialHealthCareAllowance: e.target.value });
        } else if (type === 'healthProfnlAllowance') {
            setEmployee({ ...employee, healthProfnlAllowance: e.target.value });
        } else if (type === 'houseRent') {
            setEmployee({ ...employee, houseRent: e.target.value });
        } else if (type === 'conPetAllowance') {
            setEmployee({ ...employee, conPetAllowance: e.target.value });
        } else if (type === 'qualificationAllowance') {
            setEmployee({ ...employee, qualificationAllowance: e.target.value });
        } else if (type === 'entertainment') {
            setEmployee({ ...employee, entertainment: e.target.value });
        } else if (type === 'personalAllowance') {
            setEmployee({ ...employee, personalAllowance: e.target.value });
        } else if (type === 'tTAllowance') {
            setEmployee({ ...employee, tTAllowance: e.target.value });
        } else if (type === 'medicalAllowance') {
            setEmployee({ ...employee, medicalAllowance: e.target.value });
        } else if (type === 'socialSecuirtyBenefit') {
            setEmployee({ ...employee, socialSecuirtyBenefit: e.target.value });
        } else if (type === 'seniorPostAllowance') {
            setEmployee({ ...employee, seniorPostAllowance: e.target.value });
        } else if (type === 'chairmanAllowance') {
            setEmployee({ ...employee, chairmanAllowance: e.target.value });
        } else if (type === 'rTWardenAllowance') {
            setEmployee({ ...employee, rTWardenAllowance: e.target.value });
        } else if (type === 'specialReliefAllowance') {
            setEmployee({ ...employee, specialReliefAllowance: e.target.value });
        } else if (type === 'incomeTax') {
            setEmployee({ ...employee, incomeTax: e.target.value });
        } else if (type === 'gPFSubscription') {
            setEmployee({ ...employee, gPFSubscription: e.target.value });
        } else if (type === 'recGPF') {
            setEmployee({ ...employee, recGPF: e.target.value });
        } else if (type === 'houseRentR') {
            setEmployee({ ...employee, houseRentR: e.target.value });
        } else if (type === 'waterCharges') {
            setEmployee({ ...employee, waterCharges: e.target.value });
        } else if (type === 'shortDays') {
            setEmployee({ ...employee, shortDays: e.target.value });
        } else if (type === 'convRecovery') {
            setEmployee({ ...employee, convRecovery: e.target.value });
        } else if (type === 'uniTTAllowance') {
            setEmployee({ ...employee, uniTTAllowance: e.target.value });
        } else if (type === 'tSAFund') {
            setEmployee({ ...employee, tSAFund: e.target.value });
        } else if (type === 'benevolentFund') {
            setEmployee({ ...employee, benevolentFund: e.target.value });
        } else if (type === 'groupInsurance') {
            setEmployee({ ...employee, groupInsurance: e.target.value });
        } else if (type === 'eidAdvance') {
            setEmployee({ ...employee, eidAdvance: e.target.value });
        } else if (type === 'busCharges') {
            setEmployee({ ...employee, busCharges: e.target.value });
        } else if (type === 'speciialIncentive') {
            setEmployee({ ...employee, speciialIncentive: e.target.value });
        } else if (type === 'conveyanceAllowance') {
            setEmployee({ ...employee, conveyanceAllowance: e.target.value });
        } else if (type === 'integratedAllowance') {
            setEmployee({ ...employee, integratedAllowance: e.target.value });
        } else if (type === 'disableAllowance') {
            setEmployee({ ...employee, disableAllowance: e.target.value });
        } else if (type === 'sSB') {
            setEmployee({ ...employee, sSB: e.target.value });
        } else if (type === 'gIP') {
            setEmployee({ ...employee, gIP: e.target.value });
        } else if (type === 'recEidAdvance') {
            setEmployee({ ...employee, recEidAdvance: e.target.value });
        } else if (type === 'accomadationCharges') {
            setEmployee({ ...employee, accomadationCharges: e.target.value });
        } else if (type === 'totalAmoluments') {
            setEmployee({ ...employee, totalAmoluments: e.target.value });
        } else if (type === 'totalDeductions') {
            setEmployee({ ...employee, totalDeductions: e.target.value });
        } else if (type === 'netPayable') {
            setEmployee({ ...employee, netPayable: e.target.value });
        }
        
        
        
        

    };
    console.log(employee);
    // const ButtonHandler = async () => {
    //     try {
    //         const res = await Api.post('URL', employee);
    //         console.log('response ', res);
    //         setFlag(true);
    //     } catch (error) {
    //         console.log('error', error);
    //     }
    // };

    

    if (flag) {
        return <ViewEmployees employees={employee} />;
    }
    console.log(employee);
    return (
        <div
        // style={{
        //     marginTop: '2%',
        //     marginLeft: '2%',
        //     marginRight: '2%',
        //     marginBottom: '2%'
        // }}
        >
            <AppBar className="mt-4" position="static">
                <Toolbar className="h-32">
                    <Typography variant="h2" className={classes.title}>
                        <div className="text-white">Update Employee</div>
                    </Typography>
                    <Button onClick={add} size="medium" className="bg-blue-800 text-white hover:bg-blue-800 hover:text-white">
                        Update
                    </Button>
                </Toolbar>
            </AppBar>

            <Card>
                <CardContent>
                    <Grid container spacing={2}>

                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.name}
                                onChange={(e) => employeeHandler(e, 'name')}
                                id="name"
                                type="text"
                                required
                                label="Name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.email}
                                onChange={(e) => employeeHandler(e, 'email')}
                                id="email"
                                type="email"
                                required
                                label="Email"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.password}
                                onChange={(e) => employeeHandler(e, 'password')}
                                id="password"
                                type="password"
                                required
                                label="Password"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.cnic}
                                onChange={(e) => employeeHandler(e, 'cnic')}
                                id="cnic"
                                type="number"
                                required
                                label="CNIC"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.pageNo}
                                onChange={(e) => employeeHandler(e, 'pageNo')}
                                id="PageNo"
                                required
                                type="number"
                                label="PageNo"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.accountNo}
                                onChange={(e) => employeeHandler(e, 'accountNo')}
                                id="account"
                                required
                                type="text"
                                label="Account"
                                variant="standard"
                            />
                        </Grid>
                       
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.scale}
                                onChange={(e) => employeeHandler(e, 'scale')}
                                id="scale"
                                required
                                type="number"
                                label="Scale"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.experience}
                                onChange={(e) => employeeHandler(e, 'experience')}
                                id="experience"
                                required
                                type="number"
                                label="Experience(in years)"
                                variant="standard"
                            />
                        </Grid>
                        
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.designation}
                                required
                                onChange={(e) => employeeHandler(e, 'designation')}
                                id="Designation"
                                type="text"
                                label="Designation"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="department-id">Department</InputLabel>
                                <Select
                                    labelId="department-id-label"
                                    id="department"
                                    required
                                    value={employee.department}
                                    onChange={(e) => employeeHandler(e, 'department')}
                                    label="Department"
                                >
                                    <MenuItem value="Electrical Engineering">(EE)Electrical Engineering</MenuItem>
                                    <MenuItem value="Computer Science">(CS)Computer Science</MenuItem>
                                    <MenuItem value="Machenical Engineering">(ME)Machenical Engineering</MenuItem>
                                    <MenuItem value="Industrial and Manufacturing Enginnering">
                                        (IME)Industrial & Manufacturing Enginnering
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="type-id">Type</InputLabel>
                                <Select
                                    labelId="type-id-label"
                                    value={employee.type}
                                    required
                                    onChange={(e) => employeeHandler(e, 'type')}
                                    id="type"
                                    label="Type"
                                >
                                    <MenuItem value="Class A">Class A</MenuItem>
                                    <MenuItem value="Class B or C">Class B or C</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="category-id">Employee-Category</InputLabel>
                                <Select
                                    labelId="category-id-label"
                                    id="employeeCategory"
                                    required
                                    value={employee.category}
                                    onChange={(e) => employeeHandler(e, 'category')}
                                    label="employeeCategory"
                                >
                                    <MenuItem value="Current Employee">Current Employee</MenuItem>
                                    <MenuItem value="Pensioner">Pensioner</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.basicPay}
                                onChange={(e) => employeeHandler(e, 'basicPay')}
                                id="basicPay"
                                required
                                type="number"
                                label="basicPay"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.nonPracticingAllowance}
                                onChange={(e) => employeeHandler(e, 'nonPracticingAllowance')}
                                id="nonPracticingAllowance"
                                required
                                type="number"
                                label="nonPracticingAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.specialHealthCareAllowance}
                                onChange={(e) => employeeHandler(e, 'specialHealthCareAllowance')}
                                id="specialHealthCareAllowance"
                                required
                                type="number"
                                label="specialHealthCareAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.healthProfnlAllowance}
                                onChange={(e) => employeeHandler(e, 'healthProfnlAllowance')}
                                id="healthProfnlAllowance"
                                required
                                type="number"
                                label="healthProfnlAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.houseRent}
                                onChange={(e) => employeeHandler(e, 'houseRent')}
                                id="houseRent"
                                required
                                type="number"
                                label="houseRent"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.conPetAllowance}
                                onChange={(e) => employeeHandler(e, 'conPetAllowance')}
                                id="conPetAllowance"
                                required
                                type="number"
                                label="conPetAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.qualificationAllowance}
                                onChange={(e) => employeeHandler(e, 'qualificationAllowance')}
                                id="qualificationAllowance"
                                required
                                type="number"
                                label="qualificationAllowance"
                                variant="standard"
                            />
                        </Grid> 
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.entertainment}
                                onChange={(e) => employeeHandler(e, 'entertainment')}
                                id="entertainment"
                                required
                                type="number"
                                label="entertainment"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.personalAllowance}
                                onChange={(e) => employeeHandler(e, 'personalAllowance')}
                                id="personalAllowance"
                                required
                                type="number"
                                label="personalAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.tTAllowance}
                                onChange={(e) => employeeHandler(e, 'tTAllowance')}
                                id="tTAllowance"
                                required
                                type="number"
                                label="tTAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.medicalAllowance}
                                onChange={(e) => employeeHandler(e, 'medicalAllowance')}
                                id="medicalAllowance"
                                required
                                type="number"
                                label="medicalAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.socialSecuirtyBenefit}
                                onChange={(e) => employeeHandler(e, 'socialSecuirtyBenefit')}
                                id="socialSecuirtyBenefit"
                                required
                                type="number"
                                label="socialSecuirtyBenefit"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.seniorPostAllowance}
                                onChange={(e) => employeeHandler(e, 'seniorPostAllowance')}
                                id="seniorPostAllowance"
                                required
                                type="number"
                                label="seniorPostAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.chairmanAllowance}
                                onChange={(e) => employeeHandler(e, 'chairmanAllowance')}
                                id="chairmanAllowance"
                                required
                                type="number"
                                label="chairmanAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.rTWardenAllowance}
                                onChange={(e) => employeeHandler(e, 'rTWardenAllowance')}
                                id="rTWardenAllowance"
                                required
                                type="number"
                                label="rTWardenAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.specialReliefAllowance}
                                onChange={(e) => employeeHandler(e, 'specialReliefAllowance')}
                                id="specialReliefAllowance"
                                required
                                type="number"
                                label="specialReliefAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.incomeTax}
                                onChange={(e) => employeeHandler(e, 'incomeTax')}
                                id="incomeTax"
                                required
                                type="number"
                                label="incomeTax"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.gPFSubscription}
                                onChange={(e) => employeeHandler(e, 'gPFSubscription')}
                                id="gPFSubscription"
                                required
                                type="number"
                                label="gPFSubscription"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.recGPF}
                                onChange={(e) => employeeHandler(e, 'recGPF')}
                                id="recGPF"
                                required
                                type="number"
                                label="recGPF"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.houseRentR}
                                onChange={(e) => employeeHandler(e, 'houseRentR')}
                                id="houseRentR"
                                required
                                type="number"
                                label="houseRentR"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.waterCharges}
                                onChange={(e) => employeeHandler(e, 'waterCharges')}
                                id="waterCharges"
                                required
                                type="number"
                                label="waterCharges"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.shortDays}
                                onChange={(e) => employeeHandler(e, 'shortDays')}
                                id="shortDays"
                                required
                                type="number"
                                label="shortDays"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.convRecovery}
                                onChange={(e) => employeeHandler(e, 'convRecovery')}
                                id="convRecovery"
                                required
                                type="number"
                                label="convRecovery"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.uniTTAllowance}
                                onChange={(e) => employeeHandler(e, 'uniTTAllowance')}
                                id="uniTTAllowance"
                                required
                                type="number"
                                label="uniTTAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.tSAFund}
                                onChange={(e) => employeeHandler(e, 'tSAFund')}
                                id="tSAFund"
                                required
                                type="number"
                                label="tSAFund"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.benevolentFund}
                                onChange={(e) => employeeHandler(e, 'benevolentFund')}
                                id="benevolentFund"
                                required
                                type="number"
                                label="benevolentFund"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.groupInsurance}
                                onChange={(e) => employeeHandler(e, 'groupInsurance')}
                                id="groupInsurance"
                                required
                                type="number"
                                label="groupInsurance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.eidAdvance}
                                onChange={(e) => employeeHandler(e, 'eidAdvance')}
                                id="eidAdvance"
                                required
                                type="number"
                                label="eidAdvance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.busCharges}
                                onChange={(e) => employeeHandler(e, 'busCharges')}
                                id="busCharges"
                                required
                                type="number"
                                label="busCharges"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.speciialIncentive}
                                onChange={(e) => employeeHandler(e, 'speciialIncentive')}
                                id="speciialIncentive"
                                required
                                type="number"
                                label="speciialIncentive"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.conveyanceAllowance}
                                onChange={(e) => employeeHandler(e, 'conveyanceAllowance')}
                                id="conveyanceAllowance"
                                required
                                type="number"
                                label="conveyanceAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.integratedAllowance}
                                onChange={(e) => employeeHandler(e, 'integratedAllowance')}
                                id="integratedAllowance"
                                required
                                type="number"
                                label="integratedAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.disableAllowance}
                                onChange={(e) => employeeHandler(e, 'disableAllowance')}
                                id="disableAllowance"
                                required
                                type="number"
                                label="disableAllowance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.sSB}
                                onChange={(e) => employeeHandler(e, 'sSB')}
                                id="sSB"
                                required
                                type="number"
                                label="sSB"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.gIP}
                                onChange={(e) => employeeHandler(e, 'gIP')}
                                id="gIP"
                                required
                                type="number"
                                label="gIP"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.recEidAdvance}
                                onChange={(e) => employeeHandler(e, 'recEidAdvance')}
                                id="recEidAdvance"
                                required
                                type="number"
                                label="recEidAdvance"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.accomadationCharges}
                                onChange={(e) => employeeHandler(e, 'accomadationCharges')}
                                id="accomadationCharges"
                                required
                                type="number"
                                label="accomadationCharges"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.totalAmoluments}
                                onChange={(e) => employeeHandler(e, 'totalAmoluments')}
                                id="totalAmoluments"
                                required
                                type="number"
                                label="totalAmoluments"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.totalDeductions}
                                onChange={(e) => employeeHandler(e, 'totalDeductions')}
                                id="totalDeductions"
                                required
                                type="number"
                                label="totalDeductions"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.netPayable}
                                onChange={(e) => employeeHandler(e, 'netPayable')}
                                id="netPayable"
                                required
                                type="number"
                                label="netPayable"
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default updateEmployee;
