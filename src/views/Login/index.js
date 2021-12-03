import React, {Fragment, useState} from 'react'
import {Box, TextField, Button, Avatar, Typography, Container, FormControlLabel, Grid, Link, Checkbox}  from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import LoginIcon from '@mui/icons-material/Login';

import VisibilityOff from '@mui/icons-material/VisibilityOff';
import validator from 'validator'


/**
 * Login
 */
const person = [
    {
        id: 1,
        name: 'Test',
        email: 'test@test.com'
    },
    {
        id: 2,
        name: 'Test2',
        email: 'test2@test.com2'
    }
]
function Login(props) {
    const [values, setValues] = useState({});
    const [persons, setPersons] = useState(person)
    const [error, setError] = useState({})

    console.log('persons', persons)


    const handleSubmit = () => {
        if (validator.isEmail(values.email)){
            localStorage.setItem('user', {email:values.email, authentificated: true});
            alert('Email-ul au fost introduse cu succes!')
        }

        else
            alert('Emailul nu este valid !')
    }
    const handleChange = (type) => (event) => {

        console.log('type', type, 'event', event)
        const data = {
            ...values,
            [type]: event.target.value

        }
        return setValues(data)
    }

    return (
        <div>
                <Container component="main" maxWidth="xs">
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
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange('password')}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
        </div>
    )


}


export default Login;
