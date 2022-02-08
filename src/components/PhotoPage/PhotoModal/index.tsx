import React, {Dispatch, SetStateAction} from 'react';
import {Box, Modal} from "@mui/material";
interface Props{
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>;
    modalImage: string;
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '632px',
    height: '632px',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export const PhotoModal = ({open, setOpen, modalImage}: Props) => {
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={modalImage} alt={modalImage}/>
                </Box>
            </Modal>
        </div>
    );
};