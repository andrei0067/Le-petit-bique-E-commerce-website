import React, {useCallback, useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import {connect} from "react-redux";
import {createProduct, deleteProduct, getProduct} from "./actions";
import SidebarMui from "../../components/SidebarMui";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import {storage} from "../../config/firebaseConfig"
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControlLabel,
    TextField,
    Grid,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MediaCardAdmin from "./components/MediaCardAdmin";
import Spinner from "../../components/Spinner";
import {makeStyles} from '@mui/styles';
import {DialogAlert} from "../../components/Dialog";
import AddProduct from "./components/AddProduct";

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

    const [image, setImage] = useState({})
    const [progress, setProgress] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const classes = useStyles();
    const [newProduct, setNewProduct] = useState({})
    const {loading, products, dispatchCreateProduct, dispatchDeleteProduct} = props


    const handleChangeImage = e => {
        const {files} = e.target;
        if (files?.length) {
            setImage(files[0])
        }


    };

    const handleCreateProduct = () => {
        const data = {
            ...newProduct,
            image: image
        }
        dispatchCreateProduct(data);
    }

    const handleChangeProduct = (type) => (event) => {

        const data = {
            ...newProduct,
            [type]: event.target.value
        }
        setNewProduct(data);
    }
    const handleChangeProductURL = (event) => {

        const data = {
            ...newProduct,
            url: event
        }
        setNewProduct(data);
    }

    const handleOnChangeIsInStock = (event, checked) => {
        const data = {
            ...newProduct,
            isInStock: checked
        }
        setNewProduct(data)
    };

    useEffect(() => {
        props.dispatchGetProducts();
    }, []);
    if (loading) {
        return <Spinner className={classes.spinnerCss}/>


    }
    const handleOpenDialog = () => {
        setOpenDialog(!openDialog)
    }
    return (
        <Container component="main" maxWidth="md">
            <SidebarMui/>
            <Box
                sx={{
                    flex: 'auto',
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 720,
                    alignItems: 'center',
                }}>
                <DialogAlert>
                    <AddProduct saveProduct={props.dispatchCreateProduct}/>
                </DialogAlert>
            </Box>

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
                <Typography component="h1" variant="h5">
                    Add elements to the database
                </Typography>
                <Box noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        fullWidth
                        multiline
                        rows={4}
                        id="text"
                        label="Descriere"
                        type="text"
                        name="text"
                        autoFocus
                        onChange={handleChangeProduct('body')}

                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="color"
                        label="Color"
                        name="Color"
                        type="text"
                        autoFocus
                        onChange={handleChangeProduct('color')}

                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="number"
                        id="price"
                        label="Price"
                        name="price"
                        autoFocus
                        onChange={handleChangeProduct('price')}

                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="number"
                        id="rating"
                        label="Rating"
                        name="rating"
                        autoFocus
                        onChange={handleChangeProduct('rating')}

                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="text"
                        id="tipJucarie"
                        label="Tipul jucariei"
                        name="tipJucarie"
                        autoFocus
                        onChange={handleChangeProduct('tipJucarie')}

                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="text"
                        id="title"
                        label="Title"
                        name="title"
                        autoFocus
                        onChange={handleChangeProduct('title')}

                    />
                    <FormControlLabel
                        control={<Checkbox value={newProduct?.isInStock} color="primary"/>}
                        label="The product is in stock"
                        onChange={handleOnChangeIsInStock}

                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="file"
                        id="file"
                        label="file"
                        name="file"
                        autoFocus
                        onChange={handleChangeImage}

                    />
                    <Button
                        onClick={handleCreateProduct}
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}>
                        Add element
                    </Button>
                    <Divider/>
                </Box>
            </Box>
                <Box>
                    <Grid container spacing={2}>
                        {products.map(product => {
                            return <Grid item xs={12} md={4} key={product?.id}>
                                <MediaCardAdmin
                                    post={product}
                                    onDelete={dispatchDeleteProduct}
                                />
                            </Grid>
                        })}
                    </Grid>

                </Box>
        </Container>


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
    dispatchDeleteProduct: deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
