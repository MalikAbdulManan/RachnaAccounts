import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
// import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

    const [show, setshow] = useState(false);
    const showEmployeeData = () => {
        setshow(true);
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
                                    <LaunchIcon onClick={showEmployeeData} />
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
        </div>
    );
}
export default ViewEmployees;
