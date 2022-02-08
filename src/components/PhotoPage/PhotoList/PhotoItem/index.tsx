import React, {Dispatch, SetStateAction} from 'react';
import {Photo} from "../../../../model/photo.model";
import ClearIcon from '@mui/icons-material/Clear';
interface Props{
    photo: Photo;
    photos: Photo[]
    setPhotos: Dispatch<SetStateAction<Photo[]>>;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setModalImage: Dispatch<SetStateAction<string>>;
}
const deleteImage = async (id: number, photos: Photo[], setPhotos: Dispatch<SetStateAction<Photo[]>>): Promise<any> => {
    await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
        method: 'DELETE',
    })
    setPhotos(
        photos.filter(photo => photo.id !== id)
    )
}
export const PhotoItem = ({photo, photos, setPhotos, setOpen,setModalImage}: Props) => {
    const {thumbnailUrl, title, id, url} = photo
    return (
        <div style={{position: 'relative', width: '188px', height: '180px'}}>
            <img
                src={thumbnailUrl}
                alt={title}
                key={id}
                style={{padding: '15px', cursor: 'pointer'}}
                onClick={()=> {
                    setModalImage(url)
                    setOpen(true)
                }}
            />
            <button
                style={{position: 'absolute', top: '10px', right: '15px', cursor: 'pointer', border: 'none', background: 'none'}}
                onClick={()=> {
                    deleteImage(id, photos, setPhotos)
                }}
            >
                <ClearIcon sx={{color: 'red', fontSize: 'large', width: '40px', height: '40px'}}/>
            </button>
        </div>
    );
};