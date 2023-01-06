import * as React from 'react';
import {useRef, useState} from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm(props) {
    const {formData , setFormData} = props


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Adresa de livrare
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Nume"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={formData.firstName}
                        onChange={(event) =>
                            setFormData({...formData , firstName: event.target.value})
                    }


                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Prenume"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={formData.lastName}
                        onChange={(event) =>
                            setFormData({...formData , lastName: event.target.value})
                        }

                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Adresa"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        value={formData.address}
                        onChange={(event) =>
                            setFormData({...formData , address: event.target.value})
                        }
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}