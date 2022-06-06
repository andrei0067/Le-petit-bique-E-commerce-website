import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Item} from "semantic-ui-react";
import {useEffect, useState} from "react";
import Spinner from "../Spinner";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {createProduct, deleteProduct, getProduct, updateProduct} from "../../views/Admin/actions";
import {connect} from "react-redux";
import {getImage} from "../MediaCardCustom/actions";

const useStyles = makeStyles({
    divCSS: {
        margin: 16,
        align: 'right',
    }
})
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

    function CartElement(props) {
    const classes = useStyles();
    const {title , price  , id , folderId} = props;
    const [image, setImage]=useState('');

        const handleCallback = (url) => {
            setImage(url);
        }

        useEffect(() => {
            props.dispatchGetImage(folderId[0] , id , handleCallback);
        },[] );
        console.log("Imaginea din cartElem" , id , folderId[0] )

    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                width: 400,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>
                        <ButtonBase sx={{ width: 100, height: 100 }}>
                            <Img src={image} />
                        </ButtonBase>
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <Grid container>
                            <Grid item xs={10}>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <DeleteIcon sx={{ marginLeft: '20px'}}/>
                            </Grid>
                        </Grid>
                        <Box sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <RemoveIcon/>
                            <AddIcon/>
                            <Typography variant="subtitle1" component="div" align='right' alignSelf="flex-end" color='blue'>
                                {price}
                            </Typography>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Paper>

    );
}
const mapDispatchToProps ={
    dispatchGetImage : getImage,
}

export default connect(null , mapDispatchToProps)(CartElement)