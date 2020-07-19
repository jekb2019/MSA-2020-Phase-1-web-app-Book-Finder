import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Banner.css';
function Banner() {
    return (
      <div className="BannerContainer">
          <Typography variant="h2">
              Google Books: Book Finder!
          </Typography>
      </div>
    );
}

export default Banner;