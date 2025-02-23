import React, { useState } from "react";
import { Image, Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {src:"/img/lab/1.JPG",width: 518, height: 388,original:"/img/lab/1.JPG"},
  {src:"/img/lab/2.JPG",width: 518, height: 388,original:"/img/lab/2.JPG"},
  {src:"/img/lab/3.JPG",width: 518, height: 388,original:"/img/lab/3.JPG"},
  {src:"/img/lab/4.JPG",width: 518, height: 388,original:"/img/lab/4.JPG"},
  {src:"/img/lab/5.JPG",width: 518, height: 388,original:"/img/lab/5.JPG"},
  {src:"/img/lab/6.JPG",width: 518, height: 388,original:"/img/lab/6.JPG"},
  {src:"/img/lab/7.JPG",width: 518, height: 388,original:"/img/lab/7.JPG"},
  {src:"/img/lab/8.JPG",width: 518, height: 388,original:"/img/lab/8.JPG"},
  {src:"/img/lab/9.JPG",width: 388, height: 518,original:"/img/lab/9.JPG"},
  {src:"/img/lab/10.JPG",width: 388, height: 518,original:"/img/lab/10.JPG"},
  {src:"/img/lab/11.JPG",width: 518, height: 388,original:"/img/lab/11.JPG"},
  {src:"/img/lab/12.JPG",width: 518, height: 388,original:"/img/lab/12.JPG"},
  {src:"/img/lab/13.JPG",width: 404, height: 345,original:"/img/lab/13.JPG"}
]

export default function ReactGrid() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}