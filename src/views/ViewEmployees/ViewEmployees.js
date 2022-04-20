/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
import EmailIcon from '@mui/icons-material/Email';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ClassIcon from '@mui/icons-material/Class';
// import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Api } from '@mui/icons-material';
// import ViewEmployeesModal from './viewEmployeesModal';
import API from '../API/api';
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
// import CsvDownload from 'react-json-to-csv'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
    }
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500]
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired
};

function ViewEmployees() {
    const [data, showData] = useState({});
    const [employeeData, setemployeeData] = useState([

    ]);

    

    useEffect(() => {
        const view =async ()=>{
            try{
                
                const res =await API.get('/employee');
                console.log("response",res.data);
                 setemployeeData(res.data.results);
                
            }
            catch(error){
                console.log(error)
        }
        }
        view();
        // setemployeeData(data);
    }, []);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (id) => {
        setOpen(true);
        // eslint-disable-next-line no-const-assign
        const employeedata = employeeData.find((e) => e.id === id);
        showData(employeedata);
    };
    // console.log(employeeData);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="h-full w-full">
            <AppBar className="mt-4" position="static">
                <Toolbar className="h-32">
                    <Typography variant="h2">
                        <div className="text-white">View Employees</div>
                    </Typography>
                    {/* <Button variant="contained" className="float-right">
                        <CsvDownload data={employeeData} />
                    </ Button> */}
                </Toolbar>
            </AppBar>
            <Paper>
                <Table className="mt-2" id="emp-table">  
                    <TableHead className="bg-gray-900">
                        <TableRow>
                            <TableCell className="text-gray-200">Open</TableCell>
                            <TableCell className="text-gray-200">Name</TableCell>
                            <TableCell className="text-gray-200">Email</TableCell>
                            <TableCell className="text-gray-200">CNIC</TableCell>
                            <TableCell className="text-gray-200">Account No</TableCell>
                            <TableCell className="text-gray-200">Employee Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeeData.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>
                                    <LaunchIcon className="cursor-pointer" onClick={() => handleClickOpen(employee.id)} />
                                </TableCell>
                                <TableCell>{employee.name}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                                <TableCell>{employee.cnic}</TableCell>
                                <TableCell>{employee.accountNo}</TableCell>
                                <TableCell>{employee.category}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* <ReactHTMLTableToExcel
                className="btn btn-info"
                table="emp-table"
                filename="Emp Excel File"
                sheet="Sheet"
                buttonText="Export of Excel"

                /> */}

            </Paper>
            <div>
                <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <BootstrapDialogTitle className="font-bold text-2xl" onClose={handleClose}>
                        {data.name}
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Name: {data.name}
                        </Typography>
                        <Typography gutterBottom>
                            Email: {data.email}
                        </Typography>
                        <Typography gutterBottom>
                            Scale: {data.scale}
                        </Typography>
                        <Typography gutterBottom>
                            Experience: {data.experience}
                        </Typography>
                        <Typography gutterBottom>
                            Designation: {data.Designation}
                        </Typography>
                        <Typography gutterBottom>
                            Department: {data.department}
                        </Typography>
                        <Typography gutterBottom>
                            Type: {data.type}
                        </Typography>
                        <Typography gutterBottom>
                            Category: {data.category}
                        </Typography>
                        {/* <Typography gutterBottom>
                            EMAIL: {data.email}
                        </Typography>
                        <Typography gutterBottom>
                            EMAIL: {data.email}
                        </Typography>
                        <Typography gutterBottom>
                            EMAIL: {data.email}
                        </Typography> */}
                        <Typography gutterBottom>
                            <Grid3x3Icon /> {data.cnic}
                        </Typography>
                        <Typography gutterBottom>
                            <AccountBalanceIcon /> {data.accountNo}
                        </Typography>
                        <Typography gutterBottom>
                            <ClassIcon /> {data.category}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
        </div>
    );
}
export default ViewEmployees;
