import React, {useState} from 'react'
import {Box, TextField, Button, Avatar, Typography, Container, Grid} from '@mui/material';
import isEmail from 'validator/lib/isEmail';
import LockIcon from '@mui/icons-material/Lock';
import {Link} from "react-router-dom";
import {auth} from "../../config/firebaseConfig";
import {motion} from "framer-motion";
import {
    sendPasswordResetEmail
} from 'firebase/auth';


function ForgotPassword(props) {
    const [email, setEmail] = useState("");
    const isValidEmail = email ? isEmail(email) : false;

    const sendResetEmail = async () => {
        try {
            const response = await sendPasswordResetEmail(auth, email);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChangeEmail = (event) => {

        return setEmail(
            event.target.value
        )

    }
    return (
        <motion.div
            initial={{x: 600, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: -600, opacity: 0}}
            transition={{duration: 0.5}}
        >
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{m: 1, bgcolor: '#008CBA'}}>
                    <LockIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Forgot password
                </Typography>
                <Box component="form" onClick={sendResetEmail} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChangeEmail}
                    />
                    <Button
                        disabled={!isValidEmail}
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}>
                        Reset password
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/create-account" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </motion.div>
    )

}


export default ForgotPassword;
