import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {connect} from "react-redux";
import {closeDialog, openDialog} from "./actions";

export function DialogAlert(props) {

    const {type , dispatchCloseDialog , dispatchOpenDialog}=props;
    const open=!!type;


    console.log(type)

    const handleCloseDialog = () => {
        dispatchCloseDialog();
    };
    const handleOpenDialog = () => {
        dispatchOpenDialog();
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleOpenDialog}>
                Open alert dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Disagree</Button>
                    <Button onClick={handleCloseDialog} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
const mapStateToProps=(state)=>{
    return {
        ...state.dialog
    };
}
const mapDispatchToProps={
    dispatchOpenDialog: openDialog,
    dispatchCloseDialog : closeDialog,

}
export default connect(mapStateToProps, mapDispatchToProps)(DialogAlert)
