import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import './Banner.css';
import { AnyCnameRecord } from 'dns';

let font: string = "h2";
computeFontSize();
function computeFontSize(){
    let width: number = window.innerWidth;
    if(width < 450){
        font = "h5";
    }else if(width < 650){
        font = "h4";
    }else if(width < 750){
        font = "h3";
    }else {
        font = "h2";
    }
}

function Banner() {
    const [FontSize, setFontSize] = useState<any>(font);

    window.addEventListener('resize', ()=>{
        computeFontSize();
        setFontSize(font);
    })

    return (
      <div className="BannerContainer">
        <Typography variant = {FontSize}>
            Google Books: Book Finder!
        </Typography>
      </div>
    );
}

export default Banner;