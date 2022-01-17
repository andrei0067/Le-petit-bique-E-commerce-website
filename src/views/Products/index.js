import React, {useEffect, useState} from 'react';
import { collection, query, where } from "firebase/firestore";
import {
    Box, Typography,
} from '@mui/material';
import MediaCard from './components/MediaCard';
import {getProducts} from "./actions";
import {connect} from "react-redux";
import SearchBar from "../../components/SerachBar";
import {database} from "../../config/firebaseConfig";
import {DialogButtonCustom} from "../../components/DialogButtonCustom";
import {motion} from "framer-motion";


function Products(props) {
    const citiesRef = collection(database, "products");
    const q = query(citiesRef, where("body", "==", "asd"));
    console.log(q)
    const {dispatchGetProducts , products}=props;
    const [searchValue,setSearchValue]=useState('');
    const filteredProducts = products.filter(item => item?.body?.includes(searchValue))
    useEffect( () => {
      dispatchGetProducts();
    },[])

    const handleOnChange=(event)=> {
        setSearchValue(event.target.value)
    }

    return (
    <motion.div
        initial={{x: 600, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: -600, opacity: 0}}
        transition={{duration: 0.5}}
    >
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
                    {filteredProducts.map(product => {
                        return <MediaCard
                            key={product.id}
                            post={product}

                        />
                    })}
                </Box>
                <SearchBar onSearchChange={handleOnChange}/>
            <DialogButtonCustom/>
            </Box>
    </motion.div>
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

