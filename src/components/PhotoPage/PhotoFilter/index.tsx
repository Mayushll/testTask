import React, {Dispatch, SetStateAction} from 'react';
import {MenuItem, Select, Typography} from "@mui/material";
interface Props{
    albumFilter: number;
    setAlbumFilter: Dispatch<SetStateAction<number>>;
}
const PhotoFilter = ({albumFilter, setAlbumFilter}: Props) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '15px'}}>
            <Typography sx={{fontSize: '36px', color: '#A63131'}}>Sorting</Typography>
            <Select
                onChange={(e)=>setAlbumFilter(+e.target.value)}
                value={albumFilter}
                sx={{
                    color: '#A63131'
                }}
            >
                <MenuItem value="1">First album</MenuItem>
                <MenuItem value="2">Second album</MenuItem>
                <MenuItem value="3">Third album</MenuItem>
                <MenuItem value="4">Fourth album</MenuItem>
                <MenuItem value="5">Fifth album</MenuItem>
            </Select>
        </div>
    );
};

export default PhotoFilter;