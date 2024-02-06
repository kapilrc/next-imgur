import styled from '@emotion/styled';
import { ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
import List from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import Image from 'next/image';
import formatTimestamp from '../utils/formatTimeStamp';

const ListItem = styled(MuiListItem)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: 8,
  margin: theme.spacing(2, 0)
}));

const InfoSection = styled(Stack)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  height: 140,
  justifyContent: 'center'
}));

const GalleryListView = ({ data = [] }) => {
   return (
    <List>
      {data.map((item) => {
        const image = item.images?.[0];
        if (image?.type?.includes('video') || !image) return;
        const {id, title, description, datetime} = item;
        return <ListItem key={item.id} alignItems="flex-start">
          <ListItemAvatar>
            {/* <img src={image.link} alt={item.title} width={150} height={150} /> */}
            <Image 
              blurDataURL={image.link} 
              src={image.link} 
              width={150} 
              height={150} 
              alt={item.title}
              placeholder="blur"
            />
        </ListItemAvatar>
        
        <InfoSection>
          {title && <Typography gutterBottom component="div">
            {title}
          </Typography>}
          
          {item.images?.length > 1 && <Typography variant="body2" color="text.secondary">
            Additional images: {item.images?.length - 1}
          </Typography>}

          <Typography variant="body2" color="text.secondary" mt={1}>
            Posted on: {formatTimestamp(datetime)}
          </Typography>
        </InfoSection>
      </ListItem>
      })}
    </List>
  );
}

export default GalleryListView;