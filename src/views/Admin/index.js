import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {createProduct, deleteProduct, getProduct} from "./actions";
import SidebarMui from "../../components/SidebarMui";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControlLabel,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MediaCardAdmin from "./components/MediaCardAdmin";
import {createProductFbService} from "../../services/firebaseService"




function Admin(props) {
    const [newProduct ,setNewProduct] = useState({})
    const [newProductStatus , setNewProductStatus]=useState('')
    const {loading, products ,dispatchCreateProduct,dispatchDeleteProduct} =props


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

    const handleOnChangeIsInStock = (event,checked) => {
        console.log(event.target.checked);
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
        return(
        <Container component="main" maxWidth="xs">
            <div>Loading...</div>
        </Container>

        )
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
                    <TextField
                        margin="normal"
                        fullWidth
                        type="text"
                        id="url"
                        label="URL"
                        name="url"
                        autoFocus
                        onChange={handleChangeProduct('url')}

                    />
                    <FormControlLabel
                        control={<Checkbox value={newProduct?.isInStock} color="primary" />}
                        label="The product is in stock"
                        onChange={handleOnChangeIsInStock}

                    />
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