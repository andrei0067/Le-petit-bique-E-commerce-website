import React, {useState} from 'react'
import {Box, TextField, Button, Avatar, Typography, Container, Grid, Link}  from '@mui/material';
import validator from 'validator'
import LockIcon from '@mui/icons-material/Lock';


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
    const [persons, setPersons] = useState(person);
    const [passwordShown, setPasswordShown] = useState(false);

    console.log('persons', persons)




    const handleSubmit = () => {
        if (validator.isEmail(values.email)){
            localStorage.setItem('user', {email:values.email, authentificated: true});
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
                        <LockIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Forgot password
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Reset password
                        </Button>
                        <Grid container>
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
