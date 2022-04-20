import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import pic from 'assets/images/pic.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SearchRecords = () => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleMonth = (event) => {
        setMonth(event.target.value);
    };
    const handleYear = (event) => {
        setYear(event.target.value);
    };
    return (
        <>
            <AppBar className="mt-4" position="static">
                <Toolbar className="h-32">
                    <Typography variant="h2">
                        <div className="text-white">Search Records</div>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="flex justify-center items-center pt-16">
                <Card className="justify-center w-96">
                    <CardActionArea>
                        <CardMedia component="img" height="60" image={pic} alt="green iguana" />
                        <hr />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="font-bold">
                                Select Month and year to view records
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-helper-label">Month</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={month}
                                            label="Month"
                                            onChange={handleMonth}
                                        >
                                            <MenuItem value={1}>January</MenuItem>
                                            <MenuItem value={2}>February</MenuItem>
                                            <MenuItem value={3}>March</MenuItem>
                                            <MenuItem value={4}>April</MenuItem>
                                            <MenuItem value={5}>May</MenuItem>
                                            <MenuItem value={6}>June</MenuItem>
                                            <MenuItem value={7}>July</MenuItem>
                                            <MenuItem value={8}>August</MenuItem>
                                            <MenuItem value={9}>September</MenuItem>
                                            <MenuItem value={10}>October</MenuItem>
                                            <MenuItem value={11}>November</MenuItem>
                                            <MenuItem value={12}>December</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl className="mt-2" sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={year}
                                            label="Year"
                                            onChange={handleYear}
                                        >
                                            <MenuItem value={2020}>2020</MenuItem>
                                            <MenuItem value={2021}>2021</MenuItem>
                                            <MenuItem value={2022}>2022</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Search
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
};

export default SearchRecords;
