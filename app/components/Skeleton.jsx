import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const GalleryLoading = ({ quantity = 3, imageHeight = 190 }) => {
  return (
    <Container disableGutters>
      <Stack direction="row" spacing={3} my={4}>
        {Array.from(new Array(quantity)).map((item, index) => (
          <Box width="100%" key={index}>
            <Skeleton variant="rounded" height={imageHeight} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};
export const BlogsLoading = ({ quantity = 3 }) => (
  <Container disableGutters>
    <Stack direction="row" spacing={3}>
      {Array.from(new Array(quantity)).map((item, index) => (
        <Box width="100%" key={index}>
          <Skeleton variant="rounded" height={150} />
          <Box sx={{ pt: 2 }}>
            <Skeleton />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Stack>
  </Container>
);