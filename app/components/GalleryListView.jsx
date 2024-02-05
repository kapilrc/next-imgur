import { ListItemAvatar, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const GalleryListView = ({ data }) => {
   return (
    <List>
      {data.map((item) => {
        const image = item.images?.[0];
        if (image?.type?.includes('video') || !image) return;
        return <ListItem key={item.id} alignItems="flex-start">
          <ListItemAvatar>
            <img src={image.link} alt={item.title} width={150} height={150} />
        </ListItemAvatar>
        
        <ListItemText primary={item.title} secondary="Jan 9, 2014" />
      </ListItem>
      })}
    </List>
  );
}

export default GalleryListView;