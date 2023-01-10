import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';






export default function Review(props) {
    const {formData} = props
    const censoredCard = formData.cardNumber;
    const last4Str = String(censoredCard).slice(-2);
    let total = 0 ;

    let sessionStorageData = [],
        keys = Object.keys(sessionStorage),
        i = keys.length;

    while ( i-- ) {
        sessionStorageData.push( JSON.parse(sessionStorage.getItem(keys[i])) );
    }

    sessionStorageData.forEach(item => {
        total = total + Number(item.price) ;
    })


    console.log("ajsdhajksd",sessionStorageData)
    console.log("formData = " , formData)
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                 {sessionStorageData.map((product) => (
                    <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.title} />
                        <Typography variant="body2">{product.price}L</Typography>
                    </ListItem>
                ))}


                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {total} Lei
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Livrarea
                    </Typography>
                    <Typography gutterBottom>{formData.firstName} {formData.lastName}</Typography>
                      <Typography gutterBottom>{formData.address}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Detalii despre plata
                    </Typography>
                       <Grid container>
                            <React.Fragment>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>Card Holder</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{formData.firstName} {formData.lastName}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>Card Number</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>xxxx-xxxx-xxxx-xx{last4Str}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>Expiry Date</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{formData.expDate}</Typography>
                                </Grid>

                            </React.Fragment>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}