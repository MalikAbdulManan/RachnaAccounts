import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
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
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

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
        // eslint-disable-next-line no-undef
        const employeedata = employeeData.find((e) => e.id === id);
        showData(employeedata);
    };
    // console.log(employeeData);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
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
            </div>
            <div>
                {/* <Button variant="outlined" onClick={handleClickOpen}>
                    Open full-screen dialog
                </Button> */}
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                {data.firstName}
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        </>
    );
}
export default SendEmployeePay;
