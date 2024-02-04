import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ItemsSkeletonComponent = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      <Grid container spacing={2} justifyContent="center">
        {Array.from(new Array(10)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box sx={{ margin: 2, width: 345, maxWidth: '100%' }}>
              <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
              <Skeleton variant="text" animation="wave" sx={{ mt: 1 }} />
              <Skeleton variant="text" width="60%" animation="wave" sx={{ mt: 1 }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemsSkeletonComponent;

