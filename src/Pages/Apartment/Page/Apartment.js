import React from "react";
import { Box, Grid, Typography, Button, CardMedia } from "@mui/material";
import mainImage from "../../../assets/imgs/b1.png";
import verticalImage1 from "../../../assets/imgs/b2.png";
import verticalImage2 from "../../../assets/imgs/b3.jpg";
import lastImage from "../../../assets/imgs/b4.jpg";

const ApartmentDetails = () => {
  const images = {
    mainImage: mainImage,
    verticalImages: [verticalImage1, verticalImage2],
    lastImage: lastImage,
  };

  return (
    <Box sx={{ padding: "10% 5%" }}>
      {/* Row 1 - Images */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={images.mainImage}
            alt="Main Image"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            {images.verticalImages.map((img, index) => (
              <Grid item xs={12} key={index}>
                <CardMedia
                  component="img"
                  image={img}
                  alt={`Image ${index + 1}`}
                  sx={{ height: "250px", width: "100%", objectFit: "cover" }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={3}>
          <CardMedia
            component="img"
            image={images.lastImage}
            alt="Last Image"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Grid>
      </Grid>

      {/* Row 2 - Details */}
      <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "space-between"}}>
      <Box sx={{ marginTop: "3rem" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#002D62" }}>
          $1,528,950
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "2rem",
            backgroundColor: "#F36F21",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#E96E00",
            },
          }}
        >
          Contact Agent
        </Button>
      </Box>
      <Box sx={{ marginTop: "3rem", width: {xs: "100%", md: "50%"} }}>
      <Typography variant="h4" sx={{ color: "#555"}}>
          233 m² | 2 floors | 4 beds | 5 baths
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "1rem", color: "#F36F21" }}>
          Lake view | Mountain view
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "2rem", color: "#555" }}>
          Up for sale is a spacious home in Benevento, Italy, nestled in a picturesque setting. This exceptional eco-friendly residence is characterized by quality and luxurious living.
        </Typography>
      </Box>
      </Grid>
    </Box>
  );
};

export default ApartmentDetails;
