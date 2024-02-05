import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GalleryCard = ({image, title}) => {
  const {link, type, description} = image;
  // image?.type?.includes('video') || 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={link}
        component={type?.includes('video') ? "video" : "img"}
        title={title}
      />
      <CardContent>
        {title && <Typography gutterBottom component="div">
          {title}
        </Typography>}
        {description && <Typography variant="body2">
         {description.slice(0, 50)}
        </Typography>}
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          posted on: today //wip
        </Typography>
      </CardActions>
    </Card>
  );
}

export default GalleryCard;