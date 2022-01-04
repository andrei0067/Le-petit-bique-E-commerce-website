import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {useState} from "react";
import {Button, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Product from "../../views/Product";

export function DialogButtonCustom(props) {
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
            <Button
                onClick={handleClickOpen}
                display='flex'
                variant="outlined"
                color="primary">
                {dialogText}
            </Button>
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

DialogButtonCustom.defaultProps = {
    label: 'Save',
    confirmLabel: 'Save',
    cancelLabel: 'cancel1',
    title: 'title1'


}