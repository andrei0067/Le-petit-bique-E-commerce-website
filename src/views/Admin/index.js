import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {createProduct, deleteProduct, getContacts, getOrders, getProduct, isLoading, updateProduct} from "./actions";
import {
    Avatar,
    Box, Button, Card, CardContent,
    Divider,
    Grid,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MediaCardAdmin from "./components/MediaCardAdmin";
import Spinner from "../../components/Spinner";
import {makeStyles} from '@mui/styles';
import {DialogButtonCustom} from "../../components/DialogButtonCustom";
import AddProduct from "./components/AddProduct";
import {motion} from "framer-motion";
import AccordionContacts from "../../components/AccordionContacts"
import ContactsIcon from '@mui/icons-material/Contacts';
import OrdersAdmin from "../../components/OrdersAdmin"

const useStyles = makeStyles({
    spinnerCss: {
        size: '600',
        color: '#008CBA',
    },
    uploadStyle: {
        borderStyle: 'dotted',
        borderWidth: 1,
        borderRadius: 1,
    },
    accordionCSS: {
        width: '100%'
    }
});


function Admin(props) {

    const classes = useStyles();
    const {
        loading,
        products,
        contacts,
        orders,
        dispatchDeleteProduct,
        dispatchCreateProduct,
        dispatchUpdateProduct
    } = props

    useEffect(() => {
        props.dispatchGetProducts();
        props.dispatchGetContacts();
        props.dispatchGetOrders();
    }, []);
    if (loading) {
        return <Spinner className={classes.spinnerCss}/>
    }

    console.log("Produsele sunt :", products)
    console.log("contacts sunt : ", contacts)
    console.log("ORDERS SUNT BAAAAAAAAA:", orders)

    return (
        <motion.div
            initial={{x: 600, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: -600, opacity: 0}}
            transition={{duration: 0.5}}
        >
            <>
                <Card sx={{
                    width:'500px',
                    height:'545px',
                    padding: "10px",
                    borderRadius: "10px",
                }}>
                    <CardContent>
                        <hr style={{borderTop: 'dashed 2px grey', height: "0"}}/>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>

                            <p>test1</p>
                            <p>test2</p>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <p>test1</p>
                            <p>test1</p>
                            <p>test2</p>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Button>test</Button>
                        </Box>
                    </CardContent>
                </Card>
                <OrdersAdmin
                    orders={orders}
                />
                <Box
                    sx={{
                        flex: 'auto',
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: 720,
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{m: 1, bgcolor: '#008CBA'}}>
                        <AddIcon/>
                    </Avatar>
                    <Typography color={'black'} component="h1" variant="h4">
                        Add elements to the database
                    </Typography>
                    <DialogButtonCustom
                        dialogText={"Create Product"}
                        confirmLabel={"Save"}
                        closeLabel={"Close"}
                        title={"Create product"}
                    >
                        <AddProduct
                            saveProduct={dispatchCreateProduct}
                            buttonText={"Add product"}
                        />
                    </DialogButtonCustom>
                </Box>
                <Divider/>
                <Box sx={{left:'7%' ,top:'11%',height: '85%', width: '85%' , position:'absolute' }}>
                    <Divider/>
                    <Grid container spacing={2}>
                        {products.map(product => {
                            return <Grid item xs={12} md={4} key={product?.id}>
                                <MediaCardAdmin
                                    updateProduct={dispatchUpdateProduct}
                                    post={product}
                                    onDelete={dispatchDeleteProduct}
                                />
                            </Grid>
                        })}
                    </Grid>
                    <Box
                        sx={{
                            flex: 'auto',
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: 720,
                            alignItems: 'center',
                        }}>
                        <Avatar sx={{m: 1, bgcolor: '#008CBA'}}>
                            <ContactsIcon/>
                        </Avatar>
                        <Typography align="center" color={'black'} component="h1" variant="h4" marginBottom={'50px'}>
                            View contacts and messages sent by customers
                        </Typography>
                        {contacts.map(contact => {
                            return <Grid item md={12} key={contact?.id} className={classes.accordionCSS}>
                                <AccordionContacts
                                    fullWidth
                                    firstName={contact.firstName}
                                    lastName={contact.lastName}
                                    message={contact.message}
                                    email={contact.email}
                                />
                                <Divider/>
                            </Grid>
                        })}
                    </Box>
                </Box>
            </>
        </motion.div>
    )
}

const mapStateToProps = state => {
    return {
        ...state.admin,
    };
}

const mapDispatchToProps = {
    dispatchGetProducts: getProduct,
    dispatchCreateProduct: createProduct,
    dispatchDeleteProduct: deleteProduct,
    dispatchUpdateProduct: updateProduct,
    dispatchGetContacts: getContacts,
    dispatchGetOrders: getOrders,
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
