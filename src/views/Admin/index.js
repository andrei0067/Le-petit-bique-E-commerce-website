import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {createProduct, deleteProduct, getProduct, updateProduct} from "./actions";
import {
    Avatar,
    Box,
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
});


function Admin(props) {

    const classes = useStyles();
    const {loading, products, dispatchDeleteProduct, dispatchCreateProduct, dispatchUpdateProduct} = props

    useEffect(() => {
        props.dispatchGetProducts();
    }, []);
    if (loading) {
        return <Spinner className={classes.spinnerCss}/>


    }
    console.log("Produsele sunt :", products)
    return (
        <motion.div
            initial={{x: 600, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: -600, opacity: 0}}
            transition={{duration: 0.5}}
        >
            <>
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
                <Box sx={{mt: 5}}>
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
    dispatchUpdateProduct: updateProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
