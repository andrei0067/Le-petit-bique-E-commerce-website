import React, {Fragment, useState} from 'react'
import {Box, TextField, Button, Avatar, Typography, Container, FormControlLabel, Grid, Link, Checkbox}  from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
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

    // const handleClickShowPassword =(idPerson) => () => {
    //     const dataValues = {
    //         ...values,
    //         showPassword: !values.showPassword,
    //     }
    //     setValues(dataValues);
    //
    //     const newArray = persons.map((person, index) => {
    //         if(person.id === idPerson) {
    //             return {
    //                 ...person,
    //                 name: 'Sidona'
    //             }
    //         }
    //         return person;
    //     })
    //     const findElement = persons.find(person => person.id === idPerson);
    //     const findIndex = persons.findIndex(person => person.id === idPerson);
    //     console.log('findElement', findElement, findIndex)
    //     findElement.name = 'Alex';
    //     const newData = [...persons.slice(0, findIndex),
    //         {...findElement, name: 'alex'},
    // ...persons.slice(findIndex + 1, persons.length)]
    //     setPersons([...persons, findElement])
    // }


    const handleSubmit = () => {
        if (validator.isEmail(values.email)){
            sessionStorage.setItem('userEmail', values.email );
            sessionStorage.setItem('userPassword', values.password );
            alert('Datele au fost introduse cu succes!')
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
        // if(type === 'email') {
        //     const data = {
        //         ...values,
        //         email: event.target.value,
        //     }
        //     return setValues(data)
        // } else {
        //     const data = {
        //         ...values,
        //         password: event.target.value,
        //     }
        //     return setValues(data)
        // }
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
