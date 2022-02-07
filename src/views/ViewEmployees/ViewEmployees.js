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

function ViewEmployees() {
    const [employeeData, setemployeeData] = useState([
        {
            firstName: 'Nauman',
            Email: 'naumanjafar8012#gmail.com',
            Cnic: '3540213825193',
            Account: '05467900654103',
            EmployeeCategory: 'A'
        },
        {
            firstName: 'Asad',
            Email: '2018Cs428@student.gmail.com',
            Cnic: '111111111111',
            Account: '000000000000',
            EmployeeCategory: 'A'
        }
    ]);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
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
                </Toolbar>
            </AppBar>
            <Paper>
                <Table className="mt-2">
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
                            <TableRow>
                                <TableCell>
                                    <LaunchIcon className="cursor-pointer" onClick={handleClickOpen} />
                                </TableCell>
                                <TableCell>{employee.firstName}</TableCell>
                                <TableCell>{employee.Email}</TableCell>
                                <TableCell>{employee.Cnic}</TableCell>
                                <TableCell>{employee.Account}</TableCell>
                                <TableCell>{employee.EmployeeCategory}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <div>
                <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Modal title
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Save changes
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
        </div>
    );
}
export default ViewEmployees;
