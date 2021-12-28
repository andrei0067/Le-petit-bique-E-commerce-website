import React, { useState} from 'react'
import {
    Container,
    Box,
    Typography,
    CardMedia, Button
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useParams, useNavigate, Link} from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import SidebarMui from "../../components/SidebarMui";


const useStyles = makeStyles({
    backButton: {
        '& svg': {
            marginRight: 4,
        }
    }
});


function Product(props) {
    const {posts}=props;
    const params = useParams()
    const { id } = params;
    const navigate = useNavigate();
    const classes = useStyles();
    const [products, setProducts] = useState([])

    // const car = mockData.find(car => car.id.toString() === id.toString());
    /*const handleClick = async () => {
        await addDoc(collection(database, "products"), {
            name: "Tokyo",
            quantity: 34
        });*/
    // navigate('/products')
    /*   }*/


    return (
        <Container component="main" maxWidth="sm">
            <SidebarMui/>
            <Box mt={2}>
                <Button
                    className={classes.backButton}
                    variant="outlined"
                ><ArrowBackIcon fontSize="small" />Products</Button>
            </Box>
            <Box
                mt={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <CardMedia
                    component="img"
                    sx={{ width:600 }}
                    image={products.url}
                    alt={`${products.maker}/${products.model}`}
                />
                <Typography variant="h4" component='h1' gutterBottom>Product {products.maker}/{products.model}</Typography>
                <Typography component="div" gutterBottom>
                    <Typography variant="caption" component="span">Color:</Typography>
                    {products.color}
                </Typography>
                <Typography component="div" gutterBottom>
                    <Typography variant="caption" component="span">Vin:</Typography>
                    {products.vin}
                </Typography>

                <Typography component="div" variant="h4" gutterBottom>
                    <Typography variant="caption" component="span">Price:</Typography>
                    {Math.random(900).toFixed(2)} {products.price}
                </Typography>
                <UserContext.Consumer>
                    {user => {
                        return <div>
                            {user?.email}
                        </div>
                    }}
                </UserContext.Consumer>
            </Box>
            <Link to='/products'>
                <Button
                    to={`/products`}
                    className={classes.backButton}
                    variant="outlined"
                ><ArrowBackIcon fontSize="small" />Products</Button>
            </Link>
            {products.map(product => (
                    <div key={product.quantity}>
                        {product.name}
                    </div>
                )
            )}
        </Container>
    )
}



export default Product;
