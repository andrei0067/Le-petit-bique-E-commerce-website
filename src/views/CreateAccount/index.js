import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BottomCopyright from '../../components/BottomCopyright';
import {useState} from "react";
import validator from "validator";
import SidebarMui from "../../components/SidebarMui";
import { auth } from '../../config/firebaseConfig';
import {IconButton, Snackbar} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {
    createUserWithEmailAndPassword,
} from 'firebase/auth'




const theme = createTheme();

export default function SignUp() {

    const [userCreateObj, setUserCreateObj] = useState({});
    const [emailVerifySnackbar, setEmailVerifySnackbar] = useState(false);
    const [emailAlreadyInUseSnackbar, setEmailAlreadyInUseSnackbar] = useState(false);
    const [emailCreatedSuccessSnackbar, setEmailCreatedSuccessSnackbar] = useState(false);

    const emailCreatedSuccessSnackbarOpen = () => {
        setEmailCreatedSuccessSnackbar(true);
    };

    const emailCreatedSuccessSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setEmailCreatedSuccessSnackbar(false);
    };

    const emailAlreadyInUseSnackbarOpen = () => {
        setEmailAlreadyInUseSnackbar(true);
    };

    const emailAlreadyInUseSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setEmailAlreadyInUseSnackbar(false);
    };

    const emailVerifySnackbarOpen = () => {
        setEmailVerifySnackbar(true);
    };

    const emailVerifySnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setEmailVerifySnackbar(false);
    };

    const actionEmailVerify = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={emailVerifySnackbarClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    const actionEmailCreatedSuccess = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={emailCreatedSuccessSnackbarClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    const actionEmailAlreadyInUse = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={emailAlreadyInUseSnackbarClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );



    const handleCreateChange = type => event => {
        setUserCreateObj({
            ...userCreateObj,
            [type]: event.target.value
        })

    }
    const handleCreateClick = async () => {

        const { email, password } = userCreateObj;
        try {
            if (validator.isEmail(userCreateObj.email)) {
                const createdUser = await createUserWithEmailAndPassword(auth, email, password)
                emailCreatedSuccessSnackbarOpen()
            }
            else
            {
                emailVerifySnackbarOpen()
            }
        } catch (errors) {
            if (errors.code === 'auth/email-already-in-use')
                emailAlreadyInUseSnackbarOpen()
        }
    }

    return (


        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <SidebarMui/>
                <CssBaseline />
                <Snackbar
                    open={emailVerifySnackbar}
                    autoHideDuration={6000}
                    onClose={emailVerifySnackbarClose}
                    message="The email format is not valid"
                    action={actionEmailVerify}
                />
                <Snackbar
                    open={emailAlreadyInUseSnackbar}
                    autoHideDuration={6000}
                    onClose={emailAlreadyInUseSnackbarClose}
                    message="This email is already in use"
                    action={actionEmailAlreadyInUse}
                />
                <Snackbar
                    open={emailCreatedSuccessSnackbar}
                    autoHideDuration={6000}
                    onClose={emailAlreadyInUseSnackbarClose}
                    message="Account created successfully"
                    action={actionEmailCreatedSuccess}
                />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#008CBA' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" onClick={handleCreateClick}>
                        Sign up
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleCreateChange('email')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleCreateChange('password')}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            onClick={handleCreateClick}
                            // type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <BottomCopyright sx={{ mt: 5 }} />
            </Container>

        </ThemeProvider>


    );
}
