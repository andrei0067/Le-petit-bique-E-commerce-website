import React, {useState} from 'react';
import {makeStyles} from '@mui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography, Box, Grid, IconButton
} from '@mui/material'
import MediaCardCustom from "../../../../components/MediaCardCustom";
import DeleteDialog from "../DeleteDialog"
import LearnMoreModal from "../LearnMoreModal"
import AddProduct from "../AddProduct";
import {Item} from "semantic-ui-react";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import {EditButtonMediaCard} from "../../../../components/EditButtonMediaCardAdmin";

const useStyles = makeStyles({
    mediaCard: {
        maxWidth: 250,
        minWidth: 250,
        margin: 10,
    },
    addToCart:{
        alignSelf: 'stretch',
        backgroundColor : '#008CBA',
        marginTop : '10px',
        width : '100%'
    }
})



export default function MediaCardAdmin(props) {
    const classes = useStyles();
    const {post, onDelete ,updateProduct} = props;
    const {body, id, title, price , imageIds} = post;
    const [openDialog, setOpenDialog] = useState(false)
    const [openModal,setOpenModal] = useState(false)
    const [productsQueue , setProductsQueue] = useState({})
    const [newProduct , setNewProduct] = useState('')

   // const handleAddProductToQueue = (event) => {
   //     const productData = {
    //        ...productsQueue,
    //        newProduct,
    //    }
    //    setProductsQueue(productData)
   // }
  //  console.log("Produsele sunt",productsQueue)
    console.log("Post",post)
   const handleAddProductToQueue = () => {
        sessionStorage.setItem(id,JSON.stringify(post))
   }

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const handleOpenModal= () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };



    const handleOnDelete = () => {
        onDelete(id);
    }

    return (
        <Card className={classes.mediaCard}>
                <MediaCardCustom imageId={imageIds[0]} folderId={id}/>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" marginTop={'2px'}>
                    {title}
                </Typography>
                <Typography color={"#ef2809"} gutterBottom variant="body1" fontWeight="bold" marginRight={'5px'} component="div" marginTop={'25px'} align={'right'}>
                    {price} Lei
                </Typography>
            <Box  sx={{
                    display: 'flex',
                    justifyContent: 'center',
            }}>
                <Item>
                    <IconButton aria-label="delete" size="large">
                        <InfoIcon
                            onClick={handleOpenModal}
                            fontSize="inherit" />
                    </IconButton>
                    <LearnMoreModal
                        open={openModal}
                        onClose={handleCloseModal}
                        title={title}
                        body={body}
                        imagesIds={imageIds}
                        folderId={id}
                    />
                </Item>
                <Item>
                    <IconButton aria-label="delete" size="large" >
                        <DeleteIcon
                            onClick={handleOpenDialog}
                            fontSize="inherit" />
                        <DeleteDialog
                            open={openDialog}
                            onClose={handleCloseDialog}
                            onDelete={handleOnDelete}
                        />
                    </IconButton>
                </Item>
                <Item>
                    <EditButtonMediaCard
                        dialogText={"Edit Product"}
                        confirmLabel={"Save"}
                        closeLabel={"Close"}
                    >
                        <AddProduct
                            saveProduct = {updateProduct}
                            buttonText={"Edit Product"}
                            post={post}
                        />
                    </EditButtonMediaCard>
                </Item>
            </Box>
                <Button
                    className={classes.addToCart}
                    variant="contained"
                    onClick={handleAddProductToQueue}
                >Add to cart</Button>



            {/*<CardActions>*/}
            {/*    <Button*/}
            {/*        onClick={handleOpenModal}*/}
            {/*        display='flex'*/}
            {/*        variant="outlined"*/}
            {/*        color="primary"*/}
            {/*    >Learn More</Button>*/}
            {/*    <LearnMoreModal*/}
            {/*        open={openModal}*/}
            {/*        onClose={handleCloseModal}*/}
            {/*        title={title}*/}
            {/*        body={body}*/}
            {/*        imagesIds={imageIds}*/}
            {/*        folderId={id}*/}
            {/*    />*/}
            {/*    <Button*/}
            {/*        onClick={handleOpenDialog}*/}
            {/*        display='flex'*/}
            {/*        variant="outlined"*/}
            {/*        color="primary"*/}
            {/*    >Delete Product</Button>*/}
            {/*    <DeleteDialog*/}
            {/*        open={openDialog}*/}
            {/*        onClose={handleCloseDialog}*/}
            {/*        onDelete={handleOnDelete}*/}
            {/*    />*/}

            {/*</CardActions>*/}
            </CardContent>
        </Card>


    );
}
