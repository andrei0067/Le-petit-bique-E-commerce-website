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
import LearnMoreModal from "../../LearnMoreModal"
import {Item} from "semantic-ui-react";
import InfoIcon from '@mui/icons-material/Info';

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
    const {post, onDelete } = props;
    const {body, id, title, price , imageIds} = post;
    const [openDialog, setOpenDialog] = useState(false)
    const [openModal,setOpenModal] = useState(false)

    console.log("Post",post)
    const handleAddProductToQueue = () => {
        sessionStorage.setItem(id,JSON.stringify(post))
    }

    const handleOpenModal= () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

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
                </Box>
                <Button
                    className={classes.addToCart}
                    variant="contained"
                    onClick={handleAddProductToQueue}
                >Add to cart</Button>
                
            </CardContent>
        </Card>


    );
}
