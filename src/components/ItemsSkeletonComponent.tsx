import React from 'react';
import { Skeleton, Box, Grid } from '@mui/material';

const ItemsSkeletonComponent = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      <Grid container spacing={2} justifyContent="center">
        {Array.from(new Array(10)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box sx={{ margin: 2, width: 345, maxWidth: '100%' }}>
              <Skeleton variant="rectangular" width="100%" height={200} animation="wave" data-testid="loading-skeleton-rectangular" />
              <Skeleton variant="text" animation="wave" sx={{ mt: 1 }} data-testid="loading-skeleton-primary" />
              <Skeleton variant="text" width="60%" animation="wave" sx={{ mt: 1 }} data-testid="loading-skeleton-secondary" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemsSkeletonComponent;

