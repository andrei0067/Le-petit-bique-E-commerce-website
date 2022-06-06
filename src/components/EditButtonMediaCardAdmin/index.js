import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {useState} from "react";
import {Button, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import Product from "../../views/Product";
import EditIcon from "@mui/icons-material/Edit";

export function EditButtonMediaCard(props) {
    const {dialogText, children, onSave, label, confirmLabel, closeLabel, title} = props
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSave = () => {
        setIsOpen(false);
        if (onSave) {
            onSave();
        }
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    return (
        <>
            <IconButton aria-label="delete" size="large">
                <EditIcon fontSize="inherit"
                    onClick={handleClickOpen}
                    display='flex'
                    variant="outlined"
                    >
                    {dialogText}
                </EditIcon>
            </IconButton>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="dialog-content"
                aria-describedby="dialog-title"
            >

                <DialogTitle id="dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent dividers id="dialog-content">
                    {children}
                    {/*<Product/>*/}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>
                        {confirmLabel}
                    </Button>
                    <Button onClick={handleCancel}>
                        {closeLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

EditButtonMediaCard.defaultProps = {
    label: 'Save',
    confirmLabel: 'Save',
    cancelLabel: 'cancel1',
    title: 'title1'


}