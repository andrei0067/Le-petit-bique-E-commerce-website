import {Modal} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function Cart(props) {
    const {onClose, selectedValue, open } = props;
    const {title,body} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        {body}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}