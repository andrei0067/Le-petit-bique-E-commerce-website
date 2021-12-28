import React, {useCallback, useEffect, useState} from 'react';
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
import Spinner from "../../../components/Spinner";
import {makeStyles} from '@mui/styles';

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


function AddProduct(props) {

    const [image, setImage] = useState({})
    const classes = useStyles();
    const [newProduct, setNewProduct] = useState({})


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
        props.saveProduct(data)
       // dispatchCreateProduct(data);
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


    if (props.loading) {
        return <Spinner className={classes.spinnerCss}/>


    }
    return (
        <>

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
        </>


    )
}


export default (AddProduct)
