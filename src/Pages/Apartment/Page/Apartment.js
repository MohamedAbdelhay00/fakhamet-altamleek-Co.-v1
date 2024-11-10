import React, { useState } from "react";
import { Box, Grid, Typography, Button, CardMedia, IconButton } from "@mui/material";
import { WhatsApp, Phone } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import i18n from "../../../i18n";
import apartmentsData from "../../../data/apartments"; // Make sure this path is correct

const ApartmentDetails = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);
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

  const handleContactClick = () => {
    setShowContactOptions(!showContactOptions);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+966544934745"; // Replace with actual phone number
    window.open(`https://wa.me/${phoneNumber}?text=Hello, I am interested in the apartment with ID ${apartmentId}`, "_blank");
  };

  const handlePhoneClick = () => {
    const phoneNumber = "tel:+966544934745"; // Replace with actual phone number
    window.location.href = phoneNumber;
  };

  return (
    <Box sx={{ padding: { xs: "25% 5%", md: "10% 5%" } }}>
      {/* Row 1 - Images */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={apartment.mainImage}
            alt="Main Image"
            sx={{ height: "100%", width: "100%", objectFit: "cover", maxHeight: "515px" }}
            loading="lazy"
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
                  loading="lazy"
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={3}>
          <CardMedia
            component="img"
            image={apartment.images[2] || apartment.mainImage}
            alt="Last Image"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
            loading="lazy"
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
              onClick={handleContactClick}
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
            {showContactOptions && (
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "1rem",
                  animation: "popUp 0.5s ease-out",
                  "@keyframes popUp": {
                    from: { transform: "scale(0.5)", opacity: 0 },
                    to: { transform: "scale(1)", opacity: 1 },
                  },
                }}
              >
                <IconButton color="success" aria-label="WhatsApp" onClick={handleWhatsAppClick}>
                  <WhatsApp />
                </IconButton>
                <IconButton color="primary" aria-label="Phone" onClick={handlePhoneClick}>
                  <Phone />
                </IconButton>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h4" sx={{ color: "#555" }}>
              {apartment.size} {language === "ar" ? "²م" : "m²"} | {apartment.floors} {language === "ar" ? "طوابق" : "floors"} | {apartment.beds} {language === "ar" ? "غرف نوم" : "beds"} | {apartment.baths} {language === "ar" ? "حمامات" : "baths"}
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
