import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@mui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from '@mui/material'
import MediaCardCustom from "../../../../components/MediaCardCustom";
import DeleteDialog from "../DeleteDialog"
import LearnMoreModal from "../LearnMoreModal"
import {DialogButtonCustom} from "../../../../components/DialogButtonCustom";
import AddProduct from "../AddProduct";


const useStyles = makeStyles({
    mediaCard: {
        maxWidth: 250,
        minWidth: 250,
        margin: 10,
    }
})



export default function MediaCardAdmin(props) {
    const classes = useStyles();
    const {post, onDelete ,updateProduct} = props;
    const {body, id, title, price , imageIds} = post;
    const [openDialog, setOpenDialog] = useState(false)
    const [openModal,setOpenModal] = useState(false)

    console.log("post",post)

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
            <Link to={`/products/${id}`}>
                <MediaCardCustom imageId={imageIds[0]} folderId={id}/>
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" marginTop={'2px'}>
                    {title}
                </Typography>
                <Typography color={"red"} gutterBottom variant="body1" component="div" marginTop={'25px'}>
                    {price} Lei
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    onClick={handleOpenModal}
                    display='flex'
                    variant="outlined"
                    color="primary"
                >Learn More</Button>
                <LearnMoreModal
                    open={openModal}
                    onClose={handleCloseModal}
                    title={title}
                    body={body}
                />
                <Button
                    onClick={handleOpenDialog}
                    display='flex'
                    variant="outlined"
                    color="primary"
                >Delete Product</Button>
                <DeleteDialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    onDelete={handleOnDelete}
                />
                <DialogButtonCustom
                    dialogText={"Edit Product"}
                    confirmLabel={"Save"}
                    closeLabel={"Close"}
                    title={"Edit Product"}
                >
                    <AddProduct
                        saveProduct = {updateProduct}
                        buttonText={"Edit Product"}
                        post={post}
                    />
                </DialogButtonCustom>
            </CardActions>
        </Card>
    );
}
