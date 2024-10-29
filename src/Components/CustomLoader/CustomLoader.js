// CustomLoader.js
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import './CustomLoader.module.css'

const CustomLoader = ({ message = "Loading..." }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f7f9fc', // Light background for contrast
        color: '#002D62', // Primary color for text
        gap: 2, // Space between spinner and text
      }}
    >
      <Box 
        sx={{
          position: 'relative',
          width: 80,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress 
          size={80} 
          thickness={5}
          sx={{ 
            color: '#F36F21', // Accent color for spinner
            animation: 'spin 1.5s linear infinite', // Smooth spinning effect
          }} 
        />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002D62' }}>
        {message}
      </Typography>
    </Box>
  );
};

export default CustomLoader;
