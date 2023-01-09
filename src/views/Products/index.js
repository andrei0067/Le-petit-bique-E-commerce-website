import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {createProduct, deleteProduct, getProduct, updateProduct} from "./actions";
import {
    Box,
    Divider,
    Grid,
} from "@mui/material";
import MediaCardAdmin from "./components/MediaCard";
import Spinner from "../../components/Spinner";
import {makeStyles} from '@mui/styles';
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
    console.log("Produsele din product index sunt :", products)
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
