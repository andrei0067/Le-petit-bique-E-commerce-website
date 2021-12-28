import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {useState} from "react";
import {Button, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Product from "../../views/Product";

export function DialogAlert(props) {
    const {children ,onSave , label , confirmLabel , closeLabel , title} = props
    const [isOpen,setIsOpen] = useState( false)

    const handleClickOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSave = () => {
        setIsOpen(false);
        if(onSave){
            onSave();
        }
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button onClick={handleClickOpen}>
                Dialog
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
DialogAlert.defaultProps={
    label:'Save',
    confirmLabel:'Save',
    cancelLabel:'cancel1',
    title:'title1'


}