import React, {useState} from 'react'
import {
    Box,
    TextField,
    Button,
    Avatar,
    Typography,
    Container,
    FormControlLabel,
    Grid,
    Checkbox,
    IconButton, Snackbar,
} from '@mui/material';
import {
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import LoginIcon from '@mui/icons-material/Login';
import {Link} from 'react-router-dom'
import SidebarMui from "../../components/SidebarMui";
import { auth } from '../../config/firebaseConfig';
import CloseIcon from "@mui/icons-material/Close";
import consumerComponent from "./consumerComponent";


function Login() {
    const [user, setUser] = useState(null);
    const [passwordShown, setPasswordShown] = useState(false);
    const [loginObj, setLoginObj] = useState({});
    const [loginSuccessSnackbar, setLoginSuccessSnackbar] = useState(false);

    const loginSuccessOpen = () => {
        setLoginSuccessSnackbar(true);
    };

    const loginSuccessClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setLoginSuccessSnackbar(false);
    };

    const actionLoginSuccess = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={loginSuccessClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const handleLoginChange = type => event => {
        setLoginObj({
            ...loginObj,
            [type]: event.target.value
        })
    }
    const handleLoginClick = async () => {
        const { email, password } = loginObj;
        try {
            const createdUser =  await signInWithEmailAndPassword(auth, email, password)
            loginSuccessOpen()
        } catch (errors) {
            console.log(errors.message);

        }

    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const handleLogout = () => {
        signOut(auth);
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };


    return (
        <div>
            <Container component="main" maxWidth="xs">
                <SidebarMui/>
                <Snackbar
                    open={loginSuccessSnackbar}
                    autoHideDuration={6000}
                    onClose={loginSuccessClose}
                    message="Logged in successfully"
                    action={actionLoginSuccess}
                />
                <Box>
                    <consumerComponent label="in interior contextului" />
                </Box>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: '#008CBA' }}>
                        <LoginIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onClick={handleLoginClick} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleLoginChange('email')}
                        />

                        <TextField

                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={passwordShown ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            onChange={handleLoginChange('password')}

                        />


                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            //type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link to="/forgot-password">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>

                                <Link to="/create-account" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box sx={{ margin: 10 }}>
                    Auth user: {user?.email}

                    <Button onClick={handleLogout}>
                        Log out
                    </Button>
                </Box>
            </Container>
        </div>
    )


}


export default Login;
