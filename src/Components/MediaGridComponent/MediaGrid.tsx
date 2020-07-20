import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IMediaGridProps{
    SearchQuery: (string | null);
}

function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<any[]>(
        []
    )
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=" + props.SearchQuery)
            .then(response => response.json())
            .then(response => {
                console.log(response.items)
                setItemArray(response.items)
            })
            .catch(() => console.log("it didn't work")
            );

    }, [props.SearchQuery]);

    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: any, i: Number) => {
        try{
        if (!el) {
            return;
        }
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MediaCard ImageUrl={el.volumeInfo.imageLinks.thumbnail} Title={el.volumeInfo.title} Link={el.volumeInfo.canonicalVolumeLink} />
            </Grid>)
        }catch(error){
            return;
        }
    })
    
    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid