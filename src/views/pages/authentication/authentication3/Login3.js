import { Link } from 'react-router-dom';
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import picture from '../../../../assets/images/users/1.jpg';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const AuthWrapper2 = styled('div')(({ theme }) => ({
        // backgroundColor: theme.palette.primary.light,
        minHeight: '100vh',
        display: 'flex',
        float: 'right',
        marginTop: '-100px',
        marginBottom: '-100px'
    }));
    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <AuthWrapper2>
                            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                                <Grid item xs={12}>
                                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                                            <AuthCardWrapper>
                                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                                    <Grid item sx={{ mb: 3 }}>
                                                        <Link to="#">
                                                            <Logo />
                                                        </Link>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid
                                                            container
                                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                                            alignItems="center"
                                                            justifyContent="center"
                                                        >
                                                            <Grid item>
                                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                                    <Typography
                                                                        color={theme.palette.secondary.main}
                                                                        gutterBottom
                                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                                    >
                                                                        Welcome Back!
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="caption"
                                                                        fontSize="16px"
                                                                        textAlign={matchDownSM ? 'center' : 'inherit'}
                                                                    >
                                                                        Enter your credentials to continue
                                                                    </Typography>
                                                                </Stack>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <AuthLogin />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Divider />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                                            <Typography
                                                                component={Link}
                                                                to="/pages/register/register3"
                                                                variant="subtitle1"
                                                                sx={{ textDecoration: 'none' }}
                                                            >
                                                                Don&apos;t have an account?
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </AuthCardWrapper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AuthWrapper2>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
export default Login;
