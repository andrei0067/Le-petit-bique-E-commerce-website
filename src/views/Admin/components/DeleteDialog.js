import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from "react";

export default function DeleteDialog(props) {

    const {onClose, selectedValue, open, onDelete, id} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };
    const handleOnDelete = () => {
        onDelete(id);
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle id="dialog-title">
                Confirm Delete
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure do you want to delete this product?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleOnDelete}>
                    Yes
                </Button>
                <Button onClick={onClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}