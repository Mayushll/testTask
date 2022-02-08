import React, {Dispatch, SetStateAction} from 'react';
import {Photo} from "../../../model/photo.model";
import {PhotoItem} from "./PhotoItem";
import {CircularProgress} from "@mui/material";

interface Props {
    photos: Photo[];
    isLoading: boolean;
    setPhotos: Dispatch<SetStateAction<Photo[]>>;
    currentPage: number;
    pageSize: number;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setModalImage: Dispatch<SetStateAction<string>>;
}

export const PhotoList = ({photos, isLoading, setPhotos, currentPage, setOpen, setModalImage, pageSize}: Props) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', flexGrow: '1'}}>
            {
                isLoading ? <CircularProgress color="secondary" /> :
                    photos && (
                        photos.slice(pageSize * currentPage - pageSize, pageSize * currentPage).map(
                            (photo: Photo) => (
                                <PhotoItem photo={photo} key={photo.id} photos={photos} setPhotos={setPhotos} setOpen={setOpen} setModalImage={setModalImage}/>
                            )
                        )
                    )
            }
        </div>
    );
};