import React from "react";
import { Box, Grid, Typography, Button, CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";
import i18n from "../../../i18n";
import apartmentsData from "../../../data/apartments"; // Make sure this path is correct

const ApartmentDetails = () => {
  const language = i18n.language;
  const { apartmentId } = useParams(); // Fetch the apartment ID from the URL
  const apartment = apartmentsData.find((apt) => apt.id === parseInt(apartmentId));

  if (!apartment) {
    return (
      <Box sx={{ padding: "5%", textAlign: "center" }}>
        <Typography variant="h4" color="error">
          Apartment not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: { xs: "25% 5%", md: "10% 5%"} }}>
      {/* Row 1 - Images */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={apartment.mainImage}
            alt="Main Image"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            {apartment.images.slice(0, 2).map((img, index) => (
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
            image={apartment.images[2] || apartment.mainImage} // Use the third image or fallback to main
            alt="Last Image"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Grid>
      </Grid>

      {/* Row 2 - Details */}
      <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#002D62" }}>
              {apartment.price[language]}
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
              {language === "ar" ? "تواصل مع الوكيل" : "Contact Agent"}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h4" sx={{ color: "#555" }}>
              {apartment.size} | {apartment.floors} {language === "ar" ? "طوابق" : "floors"} |{" "}
              {apartment.beds} {language === "ar" ? "غرف نوم" : "beds"} | {apartment.baths}{" "}
              {language === "ar" ? "حمامات" : "baths"}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "1rem", color: "#F36F21" }}>
              {apartment.view[language]}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "2rem", color: "#555" }}>
              {apartment.description[language]}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ApartmentDetails;
