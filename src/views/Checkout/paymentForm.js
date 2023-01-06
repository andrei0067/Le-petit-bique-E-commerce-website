import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useState} from "react";

export default function PaymentForm(props) {
    const {formData , setFormData} = props

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="nameOnCard"
                        name="nameOnCard"
                        label="Numele pe card"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={formData.nameOnCard}
                        onChange={(event) =>
                            setFormData({...formData , nameOnCard: event.target.value})
                        }
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        name="cardNumber"
                        label="Numarul cardului"
                        fullWidth
                        variant="standard"
                        value={formData.cardNumber}
                        onChange={(event) =>
                            setFormData({...formData , cardNumber: event.target.value})
                        }
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        name="expDate"
                        label="Data expirarii"
                        fullWidth
                        variant="standard"
                        value={formData.expDate}
                        onChange={(event) =>
                            setFormData({...formData , expDate: event.target.value})
                        }
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="securityNumber"
                        name="securityNumber"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        variant="standard"
                        value={formData.securityNumber}
                        onChange={(event) =>
                            setFormData({...formData , securityNumber: event.target.value})
                        }
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}