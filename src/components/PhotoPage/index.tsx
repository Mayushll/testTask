import React, {useEffect, useRef, useState} from 'react';
import {getData} from "../../service";
import PhotoFilter from "./PhotoFilter";
import {PhotoList} from "./PhotoList";
import {PhotoPagination} from "./PhotoPagination";
import {PhotoModal} from "./PhotoModal";
import {Photo} from "../../model/photo.model";
import {styled} from "@mui/material";

const Wrapper = styled('div')({
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto',
    flexDirection: 'column',
    fontFamily: 'Ubuntu',
    backgroundColor: '#98FF98',
    minHeight: '100vh',
});

export const PhotoPage = () => {
    const [url, setUrl] = useState<string>('https://jsonplaceholder.typicode.com/photos?albumId=1')
    const [photos, setPhotos] = useState<Photo[]>([])
    const [albumFilter, setAlbumFilter] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [modalImage, setModalImage] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1)
    const pages = useRef<number[]>([])
    const number = useRef<number>(0)
    const pageSize: number = 10
    useEffect(
        ()=>{
            let initialValue = url.split('?')[0]
            setUrl(`${initialValue}?albumId=${albumFilter}`)
        },[albumFilter, setUrl, url]
    )
    useEffect(
        () => {
            setCurrentPage(1)
        }, [photos?.length]
    )
    useEffect(
        () => {
            number.current = Math.ceil(photos?.length / 10)
            pages.current = []
            for (let i = 1; i <= number.current; i++) {
                pages.current.push(i)
            }
        }, [photos]
    )
    useEffect(
        () => {
            setCurrentPage(1)
        }, [albumFilter]
    )
    useEffect(
        () => {
            (async () => {
                setIsLoading(true)
                let data = await getData(url)
                setPhotos(data)
                setIsLoading(false)
            })()
        }, [url]
    )
    return (
        <Wrapper>
            <PhotoFilter albumFilter={albumFilter} setAlbumFilter={setAlbumFilter}/>
            <PhotoList photos={photos}
                       setPhotos={setPhotos}
                       isLoading={isLoading}
                       currentPage={currentPage}
                       pageSize={pageSize}
                       setOpen={setOpen}
                       setModalImage={setModalImage}
            />
            <PhotoModal open={open} setOpen={setOpen} modalImage={modalImage}/>
            <PhotoPagination pages={pages.current} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </Wrapper>
    );
};