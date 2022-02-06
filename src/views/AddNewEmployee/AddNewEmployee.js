import React, { useState } from 'react';
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

const AddNewEmployee = () => {
    const classes = useStyles();
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        Email: '',
        Password: '',
        Cnic: '',
        Phone: '',
        Account: '',
        Department: '',
        Type: '',
        Address: '',
        EmployeeCategory: ''
    });
    const [flag, setFlag] = useState(false);

    const employeeHandler = (e, type) => {
        if (type === 'fName') {
            setEmployee({ ...employee, firstName: e.target.value });
        } else if (type === 'lName') {
            setEmployee({ ...employee, lastName: e.target.value });
        } else if (type === 'email') {
            setEmployee({ ...employee, Email: e.target.value });
        } else if (type === 'password') {
            setEmployee({ ...employee, Password: e.target.value });
        } else if (type === 'cnic') {
            setEmployee({ ...employee, Cnic: e.target.value });
        } else if (type === 'phone') {
            setEmployee({ ...employee, Phone: e.target.value });
        } else if (type === 'account') {
            setEmployee({ ...employee, Account: e.target.value });
        } else if (type === 'department') {
            setEmployee({ ...employee, Department: e.target.value });
        } else if (type === 'type') {
            setEmployee({ ...employee, Type: e.target.value });
        } else if (type === 'address') {
            setEmployee({ ...employee, Address: e.target.value });
        } else if (type === 'employeeCategory') {
            setEmployee({ ...employee, EmployeeCategory: e.target.value });
        }
    };
    console.log(employee);
    const ButtonHandler = () => {
        setFlag(true);
    };

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
                        <div className="text-white">Add New Employee</div>
                    </Typography>
                    <Button className={classes.btn} onClick={ButtonHandler} color="secondary" size="medium" variant="contained">
                        Add Employee
                    </Button>
                </Toolbar>
            </AppBar>

            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.firstName}
                                onChange={(e) => employeeHandler(e, 'fName')}
                                id="fName"
                                type="text"
                                label="First Name"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.lastName}
                                onChange={(e) => employeeHandler(e, 'lName')}
                                id="lName"
                                type="text"
                                label="Last Name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.Email}
                                onChange={(e) => employeeHandler(e, 'email')}
                                id="email"
                                type="email"
                                label="Email"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.Password}
                                onChange={(e) => employeeHandler(e, 'password')}
                                id="password"
                                type="password"
                                label="Password"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.Cnic}
                                onChange={(e) => employeeHandler(e, 'cnic')}
                                id="cnic"
                                type="text"
                                label="CNIC"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.Phone}
                                onChange={(e) => employeeHandler(e, 'phone')}
                                id="phone"
                                type="number"
                                label="Phone"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                value={employee.Account}
                                onChange={(e) => employeeHandler(e, 'account')}
                                id="account"
                                type="number"
                                label="Account"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="department-id">Department</InputLabel>
                                <Select
                                    labelId="department-id-label"
                                    id="department"
                                    value={employee.Department}
                                    onChange={(e) => employeeHandler(e, 'department')}
                                    label="Department"
                                >
                                    <MenuItem value={1}>(EE)Electrical Engineering</MenuItem>
                                    <MenuItem value={2}>(CS)Computer Science</MenuItem>
                                    <MenuItem value={3}>(ME)Machenical Engineering</MenuItem>
                                    <MenuItem value={4}>(IME)Industrial & Manufacturing Enginnering</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="type-id">Type</InputLabel>
                                <Select
                                    labelId="type-id-label"
                                    value={employee.type}
                                    onChange={(e) => employeeHandler(e, 'type')}
                                    id="type"
                                    label="Type"
                                >
                                    <MenuItem value={1}>Class A</MenuItem>
                                    <MenuItem value={2}>Class B or C</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={12}>
                            <TextField
                                fullWidth
                                value={employee.Address}
                                onChange={(e) => employeeHandler(e, 'address')}
                                id="address"
                                type="text"
                                label="Address"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl fullWidth>
                                <InputLabel id="category-id">Employee-Category</InputLabel>
                                <Select
                                    labelId="category-id-label"
                                    id="employeeCategory"
                                    value={employee.EmployeeCategory}
                                    onChange={(e) => employeeHandler(e, 'employeeCategory')}
                                    label="employeeCategory"
                                >
                                    <MenuItem value={1}>Current Employee</MenuItem>
                                    <MenuItem value={2}>Pensioner</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default AddNewEmployee;
