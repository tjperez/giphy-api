import React from 'react';

const GifCard = (image) => {
    return (
        <div className="gif-item">
            <img src={image.gif.images.downsized.url} />
        </div>
    )
};

export default GifCard;