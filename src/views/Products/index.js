import React, {useEffect, useState} from 'react';

import {
    Container,
    Box, Typography,
} from '@mui/material';
import MediaCard from './components/MediaCard';
import SidebarMui from "../../components/SidebarMui";
import {collection, getDocs} from "firebase/firestore";
import {database} from "../../config/firebaseConfig";



function Products() {
    const [posts, setPosts] = useState( []);

    useEffect( () => {
        const fetchData = async () => {
            const productSnapshot= await getDocs(collection(database, 'products'));
            setPosts(productSnapshot.docs.map((doc) => ({...doc.data() , id: doc.id})))
        }
        return fetchData();
    },[])



    /*   useEffect(() => {
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
   */



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
