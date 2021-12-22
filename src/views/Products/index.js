import React, {useEffect, useState} from 'react';

import {
    Container,
    Box, Typography,
} from '@mui/material';
import MediaCard from './components/MediaCard';
import SidebarMui from "../../components/SidebarMui";
import {collection, getDocs} from "firebase/firestore";
import {database} from "../../config/firebaseConfig";
import {getProducts} from "./actions";
import {connect} from "react-redux";



function Products(props) {
    const {dispatchGetProducts , products}=props;
    const [posts, setPosts] = useState( []);

    useEffect( () => {
      dispatchGetProducts();
    },[])



    return (
        <Container component="main" maxWidth="lg">
            <SidebarMui/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 'auto',
                }}>
                <Typography component="h1" variant='h6' gutterBottom>Products</Typography>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}>
                    {products.map(product => {
                        return <MediaCard
                            key={product.id}
                            post={product}

                        />
                    })}
                </Box>

            </Box>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        ...state.products,
    };
}

const mapDispatchToProps= {
    dispatchGetProducts:getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

