import React, {useEffect, useState} from 'react';
import {
    Container,
    Box, Typography,
} from '@mui/material';

import MediaCard from './components/MediaCard';
import SidebarMui from "../../components/SidebarMui";
import getData from "../utils/fetchMethod";

function Products(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let mounted = true;
        if(mounted) {
            getData('https://jsonplaceholder.typicode.com/posts')
                .then(data => {
                    setPosts(data);
                    console.log(data); // JSON data parsed by `data.json()` call
                });
        }
        return () => {
            mounted = false
        }
    }, [])

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
                    {posts.map(post => {
                        return <MediaCard
                            key={post.id}
                            post={post}
                        />
                    })}
                </Box>

            </Box>
        </Container>
    )
}



export default Products;
