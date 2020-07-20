import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './MediaCard.css';

interface IMediaCardProps{
    ImageUrl: string | undefined;
    Title: string | undefined;
    Link: string;
}


function MediaCard(props: IMediaCardProps){

    function viewBookWeb(){
        try{
            window.open(
                props.Link,
                '_blank'
            );
        }catch(err){
            console.log('no viewable website');
        }
    }

    return(
        <div onClick={viewBookWeb}>
            <Card className="MediaCardContainer">
                <CardActionArea>
                    <CardMedia
                        className="MediaCardImage"
                        image={props.ImageUrl}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" className="MediaCardDescription">
                            {props.Title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default MediaCard