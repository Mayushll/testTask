import React, {Dispatch, SetStateAction} from 'react';
import {Box, Modal, styled} from "@mui/material";
interface Props{
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>;
    modalImage: string;
}

const Wrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 632px;
  height: 632px;
  padding: 32px;
  background-color: #F1E9D9;
  @media(max-width: 632px){
    width: 100%;
    height: auto;
  }
`
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
                <Wrapper>
                    <img src={modalImage} alt={modalImage}/>
                </Wrapper>
            </Modal>
        </div>
    );
};