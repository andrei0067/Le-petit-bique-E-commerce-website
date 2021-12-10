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
    IconButton
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import validator from 'validator'
import {Link} from 'react-router-dom'
import SidebarMui from "../../components/SidebarMui";


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

    console.log('persons', persons)




    const handleSubmit = () => {
        if (validator.isEmail(values.email)){
            localStorage.setItem('user', {email:values.email, authentificated: true});
            alert('The email was saved into the storage data!')
        }

        else
            alert('The email is not valid !')
    }
    const handleChange = (type) => (event) => {

        console.log('type', type, 'event', event)
        const data = {
            ...values,
            [type]: event.target.value

        }
        return setValues(data)
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };


    return (
        <div>
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
                                type={passwordShown ? "text" : "password"}
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange('password')}

                            />

                            <IconButton onClick={togglePassword}>Show Password</IconButton>

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
                </Container>
        </div>
    )


}


export default Login;
