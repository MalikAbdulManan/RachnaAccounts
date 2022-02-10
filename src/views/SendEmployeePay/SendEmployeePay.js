import React, { useState } from 'react';
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
// import ViewEmployeesModal from './viewEmployeesModal';

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

function SendEmployeePay() {
    const [data, showData] = useState({});
    const [employeeData, setemployeeData] = useState([
        {
            firstName: 'Nauman',
            id: '1',
            Email: 'naumanjafar8012#gmail.com',
            Cnic: '3540213825193',
            Account: '05467900654103',
            EmployeeCategory: 'A'
        },
        {
            firstName: 'Asad',
            id: '2',
            Email: '2018Cs428@student.gmail.com',
            Cnic: '111111111111',
            Account: '000000000000',
            EmployeeCategory: 'A'
        }
    ]);

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
                        <div className="text-white">Send Employee Pay</div>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Paper>
                <Table className="mt-2">
                    <TableHead className="bg-gray-900">
                        <TableRow>
                            <TableCell className="text-gray-200">Name</TableCell>
                            <TableCell className="text-gray-200">Email</TableCell>
                            <TableCell className="text-gray-200">CNIC</TableCell>
                            <TableCell className="text-gray-200">Account No</TableCell>
                            <TableCell className="text-gray-200">Employee Category</TableCell>
                            <TableCell className="text-gray-200">Select</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeeData.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>{employee.firstName}</TableCell>
                                <TableCell>{employee.Email}</TableCell>
                                <TableCell>{employee.Cnic}</TableCell>
                                <TableCell>{employee.Account}</TableCell>
                                <TableCell>{employee.EmployeeCategory}</TableCell>
                                <TableCell>
                                    <Button
                                        color="primary"
                                        className="cursor-pointer"
                                        onClick={() => handleClickOpen(employee.id)}
                                        variant="contained"
                                    >
                                        Open
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <div>
                <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <BootstrapDialogTitle className="font-bold text-2xl" onClose={handleClose}>
                        {data.firstName}
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            <EmailIcon /> {data.Email}
                        </Typography>
                        <Typography gutterBottom>
                            <Grid3x3Icon /> {data.Cnic}
                        </Typography>
                        <Typography gutterBottom>
                            <AccountBalanceIcon /> {data.Account}
                        </Typography>
                        <Typography gutterBottom>
                            <ClassIcon /> {data.EmployeeCategory} Category
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
export default SendEmployeePay;
