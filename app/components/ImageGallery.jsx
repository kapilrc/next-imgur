import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GalleryCard from './GalleryCard';

const ImageGallery = ({ images = [] }) => {
  const [list, setList] = React.useState(false);

   return (
    <ImageList cols={3} gap={24}>
      {images.map((item) => {
        const image = item.images?.[0];
        if (image?.type?.includes('video') || !image) return;
        return <GalleryCard key={item.id} url={image.link} title={item.title} />
        // <ImageListItem key={item.id}>
        //   <img
        //     srcSet={`${item.images?.[0].link}?w=248&fit=crop&auto=format&dpr=2 2x`}
        //     src={`${item.images?.[0].link}?w=248&fit=crop&auto=format`}
        //     alt={item.title}
        //     loading="lazy"
        //   />
        // </ImageListItem>
      })}
    </ImageList>
  );
}

export default ImageGallery;