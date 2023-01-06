import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContactsIcon from '@mui/icons-material/Contacts';
import {createContactsFbService} from "../../services/firebaseService"
import {useState} from "react";



export default function About() {
    const [contacts , setContacts] = useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
        address:"",
        message:""
    })

    console.log(contacts)
    return (
            <Grid container component="main" sx={{left:'7%' ,top:'11%',height: '85%', width: '85%' , position:'absolute' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square spacing={5}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#008CBA'}}>
                            <ContactsIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" marginBottom='30px'>
                            Contact Us
                        </Typography>
                        <Box component="form" noValidate sx={{ '& > :not(style)': { m: 1}}}>
                            <TextField
                                margin="normal"
                                required
                                id="firstName"
                                label="First name"
                                name="firstName"
                                autoComplete="given-name"
                                style = {{width: '47%'}}
                                value={contacts.firstName}
                                onChange={(event) => {
                                        setContacts({...contacts, firstName: event.target.value})
                                    }
                                }
                            />
                            <TextField
                                margin="normal"
                                required
                                id="lastName"
                                label="Last name"
                                name="lastName"
                                autoComplete="family-name"
                                style = {{width: '47%'}}
                                value={contacts.lastName}
                                onChange={(event) =>
                                    setContacts({...contacts , lastName: event.target.value})
                                }


                            />
                            <TextField
                                margin="normal"
                                required
                                id="phoneNumber"
                                label="Phone number"
                                name="phoneNumber"
                                autoComplete="tel"
                                style = {{width: '47%'}}
                                value={contacts.phoneNumber}
                                onChange={(event) =>
                                    setContacts({...contacts , phoneNumber: event.target.value})
                                }


                            />
                            <TextField
                                margin="normal"
                                required
                                id="email"
                                label="Your email"
                                name="email"
                                autoComplete="email"
                                style = {{width: '47%'}}
                                value={contacts.email}
                                onChange={(event) =>
                                    setContacts({...contacts , email: event.target.value})
                                }
                            />
                            <TextField
                                margin="normal"
                                required
                                id="address"
                                label="Add address"
                                name="address"
                                autoComplete="address"
                                style = {{width: '97%'}}
                                value={contacts.address}
                                onChange={(event) =>
                                    setContacts({...contacts , address: event.target.value})
                                }
                            />
                            <TextField
                                margin="normal"
                                required
                                id="message"
                                label="Your message"
                                name="message"
                                style = {{width: '97%'}}
                                multiline
                                value={contacts.message}
                                onChange={(event) =>
                                    setContacts({...contacts , message: event.target.value})
                                }
                            />
                            <Button
                                variant="contained"
                                sx={{ mt: 3, mb: 2,width:'97%' , bgcolor: '#008CBA'}}
                                onClick={() => createContactsFbService(contacts)}
                            >
                                Send message and contacts
                            </Button >

                        </Box>
                    </Box>
                </Grid>
            </Grid>
    );
}