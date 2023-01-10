import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './adressForm';
import PaymentForm from './paymentForm';
import Review from './reviewForm';
import {motion} from "framer-motion";
import {useState} from "react";
import {createContactsFbService, createOrdersFbService} from "../../services/firebaseService";


const steps = ['Adresa de livrare', 'Detalii despre plata', 'Ultimul pas'];


export default function Checkout() {

    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        nameOnCard: "",
        cardNumber: "",
        expDate: "",
        securityNumber: "",
    })

    console.log(formData)

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <AddressForm formData={formData} setFormData={setFormData}/>;
            case 1:
                return <PaymentForm formData={formData} setFormData={setFormData}/>;
            case 2:
                return <Review formData={formData}/>;
            default:
                throw new Error('Unknown step');
        }
    }


    const handleNext = (order) => {
        setActiveStep(activeStep + 1);
        if (activeStep === steps.length - 1) {

        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <motion.div
            initial={{x: 600, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: -600, opacity: 0}}
            transition={{duration: 0.5}}
        >
            <Container component="main" maxWidth="sm" sx={{mb: 4}}>
                <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Multumim pentru comanda.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order
                                    confirmation, and will send you an update when your order has
                                    shipped.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{mt: 3, ml: 1}}>
                                            Back
                                        </Button>
                                    )}

                                    {/* IF STATEMENT PENTRU NEXT/PLACE ORDER*/}

                                    {activeStep === steps.length - 1 ? (
                                        <Button
                                            variant="contained"
                                            onClick={() => createOrdersFbService(formData)}
                                            sx={{mt: 3, ml: 1}}
                                        >
                                            Place order
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{mt: 3, ml: 1}}
                                        >
                                            Next
                                        </Button>
                                    )
                                    }


                                </Box>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </Container>
        </motion.div>
    );
}