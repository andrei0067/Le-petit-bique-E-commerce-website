import React, {useState} from 'react'
import {Box, TextField, Button, Avatar, Typography, Container, Grid}  from '@mui/material';
import validator from 'validator'
import LockIcon from '@mui/icons-material/Lock';
import {Link} from "react-router-dom";
import SidebarMui from "../../components/SidebarMui";
import {auth} from "../../config/firebaseConfig";
import {
    sendPasswordResetEmail
} from 'firebase/auth';


function ForgotPassword(props) {
    const [user, setUser] = useState({});

    const sendResetEmail = async () => {
        JSON.stringify(user.email)
        try {
            if (validator.isEmail(user.email)){
                await sendPasswordResetEmail(user.auth,user.email);
                alert("Password reset link sent!");
           }
            else{
                alert("nu prea mere")
            }
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const handleChange = (type) => (event) => {

        console.log('type', type, 'event', event)
        const data = {
            ...user,
            [type]: event.target.value
        }
        return setUser(data)
    }
    return (
            <Container component="main" maxWidth="xs">
                <SidebarMui/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: '#008CBA' }}>
                        <LockIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Forgot password
                    </Typography>
                    <Box component="form" onClick={sendResetEmail} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange('email')}
                        />
                        <Button
                          //  type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Reset password
                        </Button>
                        <Grid container>
                            <Grid item >
                                <Link to="/create-account" variant="body2" >
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    )


}


export default ForgotPassword;
