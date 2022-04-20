import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';
import { darken } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';
import logo1 from 'assets/images/logo1.svg';
import React, { useState } from 'react';
import data from './data';

const useStyles = makeStyles((theme) => ({
    root: {
        background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`
    },
    divider: {
        backgroundColor: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    seller: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        marginRight: -88,
        paddingRight: 66,
        width: 480
    }
}));

const Invoice = () => {
    const classes = useStyles();
    const [invoice, setInvoice] = useState(null);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    const currentDate = new Date().toLocaleDateString();
    return (
        <div className={clsx(classes.root, 'flex-grow flex-shrink-0 p-0 sm:p-64 print:p-0')}>
            <Card className="mx-auto w-xl print:w-full print:p-8 print:shadow-none">
                <CardContent className="p-88 print:p-0">
                    <Typography color="textSecondary" className="mb-32" />
                    <div className="flex justify-between">
                        <div>
                            <table className="mb-16">
                                <tbody>
                                    <tr>
                                        <td className="pb-4">
                                            <Typography className="font-bold" variant="h6" color="textSecondary">
                                                Salary Template
                                            </Typography>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Typography color="textSecondary">Dated:</Typography>
                                        </td>
                                        <td className="px-16">
                                            <Typography color="textSecondary">{currentDate}</Typography>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Typography color="textSecondary">Template Name:</Typography>
                                        </td>
                                        <td className="px-16">
                                            <Typography color="textSecondary">{data.Tname}</Typography>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Typography color="textSecondary">Template ID:</Typography>
                                        </td>
                                        <td className="px-16">
                                            <Typography color="textSecondary">{data.TID}</Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Typography className="font-bold mb-8" variant="h6" color="textSecondary">
                                HBL Habib Bank Limited
                            </Typography>

                            <Typography color="textSecondary">Rachna College of Engineering & Technology</Typography>
                            <Typography color="textSecondary">Branch: Kot Inayat Khan </Typography>
                            <Typography color="textSecondary">Branch Code: 1397</Typography>
                            <Typography color="textSecondary">Acoount No: 13977900023401</Typography>
                        </div>

                        <div className={clsx(classes.seller, 'flex items-center p-16')}>
                            <img className="w-80" src={logo1} alt="logo" />

                            <div className={clsx(classes.divider, 'w-px mx-8 h-96 opacity-50')} />

                            <div className="px-8">
                                <Typography color="inherit" variant="h6">
                                    Admin RCET
                                </Typography>
                                <Typography color="inherit">Name Here</Typography>
                                <Typography color="inherit">sample@uet.edu.pk</Typography>
                                <Typography color="inherit">www.uet.edu.pk</Typography>
                            </div>
                        </div>
                    </div>

                    <div className="mt-64">
                        <Table className="simple mt-32">
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            NAME
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            {data.name}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            CLASS
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            Class {data.Class}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            EMPLOYEE TYPE
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            {data.type}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            ACCOUNT NUMBER
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            {data.Accountno}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            BASIC PAY
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            Rs.{data.Basicpay}/-
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            HOUSE RENT
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            Rs. {data.Houserent}/-
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            TRANSPORT
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            Rs. {data.transport}/-
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            QUALIFICATION ALLOWANCE
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                            Rs. {data.Qualificationallowance}/-
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className="font-light" variant="h4" color="textSecondary">
                                            TOTAL
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography className="font-light" variant="h4" color="textSecondary">
                                            Rs.{data.total}/-
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className="mt-48">
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={4}>
                                <TextField fullWidth id="S-name" type="number" label="GP FUND" variant="standard" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <TextField fullWidth id="S-address" type="number" label="SENIOR POST ALLOWANCE" variant="standard" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <TextField fullWidth id="S-redg" type="number" label="GPF SUBSCRIPTION" variant="standard" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <TextField fullWidth id="S-class" type="number" label="UNI TT ALLOWANCE" variant="standard" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <TextField fullWidth id="S-semester" type="number" label="EID ADVANCE" variant="standard" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <TextField fullWidth id="S-year" type="number" label="INCOME TAX" variant="standard" />
                            </Grid>
                        </Grid>
                    </div>

                    <div className="mt-8">
                        <Button variant="contained" color="primary" className="flex float-right">
                            download
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Invoice;
