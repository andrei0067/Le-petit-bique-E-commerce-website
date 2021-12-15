import {Snackbar} from "@mui/material";
import * as React from "react";



function CustomSnackbar(props) {
    const { open, close,text, action} = props;

   return <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={close}
        message={text}
        action={action}
    />

}
export default CustomSnackbar;
