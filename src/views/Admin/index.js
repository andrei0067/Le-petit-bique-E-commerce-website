import React, {useCallback,useEffect, useState} from 'react';
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
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MediaCardAdmin from "./components/MediaCardAdmin";
import Spinner from "../../components/Spinner";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   spinnerCss:{
       size : '600',
       color:'#008CBA',
   },
        uploadStyle:{
        borderStyle: 'dotted',
            borderWidth: 1,
            borderRadius: 1,
    },
});


function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }

        </div>
    )
}


function Admin(props) {

    const [progress , setProgress] = useState(0)
    const classes = useStyles();
    const [newProduct ,setNewProduct] = useState({})
    const {loading, products ,dispatchCreateProduct,dispatchDeleteProduct} =props


    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
    };

    const uploadFiles = (file) => {
        //
        if (!file) return;
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    handleChangeProductURL(downloadURL)
                });
            }
        );
    };


    const handleCreateProduct = () => {
       dispatchCreateProduct(newProduct);
    }

    const handleChangeProduct= (type) => (event) =>{

        const data = {
            ...newProduct,
            [type] : event.target.value
        }
        setNewProduct(data);
    }
    const handleChangeProductURL= (event)=> {

        const data = {
            ...newProduct,
            url: event
        }
        setNewProduct(data);
    }

    const handleOnChangeIsInStock = (event,checked) => {
        const data={
        ...newProduct,
           isInStock : checked
        }
        setNewProduct(data)
    };

    useEffect(() => {
        props.dispatchGetProducts();
    },[] );
    if(loading)
    {
        return <Spinner className={classes.spinnerCss}/>


    }
    return (
        <Container component="main" maxWidth="xs">
            <SidebarMui/>

            <Box
                sx={{
                    flex: 'auto',
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{ m: 1, bgcolor: '#008CBA' }}>
                    <AddIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                   Add elements to the database
                </Typography>
                <Box noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="text"
                        label="Descriere"
                        type = "text"
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
                        control={<Checkbox value={newProduct?.isInStock} color="primary" />}
                        label="The product is in stock"
                        onChange={handleOnChangeIsInStock}

                    />
                    <div>
                        <form onSubmit={formHandler}>
                            <input type="file" className="input" />
                            <button type="submit">
                                Upload
                            </button>
                        </form>
                    </div>
                    <h2>Uploading done {progress}%</h2>
                    <Button
                      onClick={handleCreateProduct}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                        Add element
                    </Button>



         <Divider/>
                </Box>
                <Box>
                    {products.map(product => {
                        return <MediaCardAdmin
                            key={product.id}
                            post={product}
                            onDelete={dispatchDeleteProduct}
                        />
                    })}

                </Box>
            </Box>
        </Container>



    )
}

const mapStateToProps = state => {
    return {
        ...state.admin,
    };
}

const mapDispatchToProps= {
    dispatchGetProducts:getProduct,
    dispatchCreateProduct:createProduct,
    dispatchDeleteProduct : deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
