import * as React from 'react';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import formatTimestamp from '../utils/formatTimeStamp';

const Card = styled(MuiCard)(({ theme }) => ({
  position: 'relative',
  maxWidth: 345
}));

const CardContent = styled(MuiCardContent)(({ theme }) => ({
  minHeight: 108
}));

const Title = styled(Typography)(({ theme }) => ({
  maxHeight: 50
}));

const BottomText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2)
}));

const GalleryCard = ({image = {}, title = '', datetime, additionalImages = 0}) => {
  const {link, type, description} = image;
  // image?.type?.includes('video') || 
  return (
    <Card>
      <CardMedia
        sx={{ height: 240 }}
        image={link}
        component={type?.includes('video') ? "video" : "img"}
        title={title}
      />
      <CardContent>
        {title && <Title title={title} className='ellipse _1line' gutterBottom component="div">
          {title}
        </Title>}

        {additionalImages > 1 && <Typography variant="body2" color="text.secondary">
          Additional images: {additionalImages}
        </Typography>}

        <BottomText variant="body2" color="text.secondary">
          Posted on: {formatTimestamp(datetime)}
        </BottomText>

      </CardContent>
    </Card>
  );
}

export default GalleryCard;

GalleryCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  datetime: PropTypes.number,
  additionalImages: PropTypes.number
}