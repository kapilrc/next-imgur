import MuiImageList from '@mui/material/ImageList';
import GalleryCard from './GalleryCard';
import styled from '@emotion/styled';

const ImageList = styled(MuiImageList)(({ theme }) => ({
  margin: theme.spacing(3, 0),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)!important'
  }
}));

const GalleryGridView = ({ data = [] }) => {
   return (
    <ImageList cols={3} gap={24} elevation={4}>
      {data.map((item) => {
        const image = item.images?.[0];
        if (!image) return;
        return <GalleryCard 
          key={item.id} 
          image={image} 
          title={item.title}
          additionalImages={item.images?.length - 1} 
          datetime={item.datetime}
        />
      })}
    </ImageList>
  );
}

export default GalleryGridView;