import ImageList from '@mui/material/ImageList';
import GalleryCard from './GalleryCard';

const GalleryGridView = ({ data }) => {
   return (
    <ImageList cols={3} gap={24} elevation={4}>
      {data.map((item) => {
        const image = item.images?.[0];
        if (!image) return;
        return <GalleryCard key={item.id} image={image} title={item.title} />
      })}
    </ImageList>
  );
}

export default GalleryGridView;