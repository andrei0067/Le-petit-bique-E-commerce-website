import * as React from 'react';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import {makeStyles} from "@mui/styles";
import {Item} from "semantic-ui-react";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getImage} from "../MediaCardCustom/actions";
import {IconButton} from "@mui/material";

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
    const {title, price, id, folderId} = props;
    const [image, setImage] = useState('');

    const handleCallback = (url) => {
        setImage(url);
    }
    const handleDeleteItem = () => {
        sessionStorage.removeItem(id);

    }

    useEffect(() => {
        props.dispatchGetImage(folderId[0], id, handleCallback);
    }, []);
    console.log("Imaginea din cartElem", id, folderId[0])

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
                        <ButtonBase sx={{width: 100, height: 100}}>
                            <Img src={image}/>
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
                                <IconButton sx={{marginLeft: '20px'}}>
                                    <DeleteIcon onClick={handleDeleteItem} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container marginTop={'20px'}>
                            <Grid item xs={8}>
                                <RemoveIcon/>
                                <AddIcon/>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1" component="div" align='right' alignSelf="flex-end"
                                            color='blue'>
                                    {price} Lei
                                </Typography>
                            </Grid>
                        </Grid>

                    </Item>
                </Grid>
            </Grid>
        </Paper>

    );
}

const mapDispatchToProps = {
    dispatchGetImage: getImage,
}

export default connect(null, mapDispatchToProps)(CartElement)