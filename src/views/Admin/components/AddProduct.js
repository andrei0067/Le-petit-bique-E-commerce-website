import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
} from "@mui/material";
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

    const {buttonText, post} = props
    const classes = useStyles();
    const [newProduct, setNewProduct] = useState({})
    const [imagesArray, setImagesArray] = useState([])


    const handleChangeImage = e => {
        const {files} = e.target;

        const filesWithId = {
            name:files[0].name,
            size:files[0].size,
            type:files[0].type,
            file:files[0],
            id:uuidv4()
        }
console.log("testNou",filesWithId)
        const dataArray = [
            ...imagesArray,
            filesWithId,
        ] ;

        setImagesArray(dataArray)
    };
    console.log("testulSuprem", imagesArray)

    const handleCreateProduct = () => {
        const data = {
            ...post,
            ...newProduct,
            image: imagesArray
        }
        props.saveProduct(data)
        // dispatchCreateProduct(data);

    }
    const handleChangeProduct = (type) => (event) => {

        const data = {
            ...post,
            ...newProduct,
            [type]: event.target.value
        }
        setNewProduct(data);
    }
    console.log("test", newProduct);

    const handleOnChangeIsInStock = (event, checked) => {
        const data = {
            ...post,
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
                defaultValue={post?.body}

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
                defaultValue={post?.color}

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
                defaultValue={post?.price}
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
                defaultValue={post?.rating}

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
                defaultValue={post?.tipJucarie}

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
                defaultValue={post?.title}

            />
            <FormControlLabel
                control={<Checkbox defaultChecked={post?.isInStock} value={newProduct?.isInStock} color="primary"/>}
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
                {buttonText}
            </Button>
        </>


    )
}


export default (AddProduct)
