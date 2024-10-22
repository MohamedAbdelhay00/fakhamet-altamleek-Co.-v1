import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import FlooringIcon from "@mui/icons-material/Carpenter";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";

export default function ServicesSection() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const services = [
    {
      icon: <BuildIcon sx={{ fontSize: "2rem", color: "#F36F21" }} />,
      bgColor: "#FFFFFF", // Orange for the first card
      textColor: "#FFFFFF", // White text for the first card
    },
    {
      icon: <PlumbingIcon sx={{ fontSize: "2rem", color: "#FFFFFF" }} />,
      bgColor: "#002D62", // Navy blue for icon background
      textColor: "#002D62", // Navy text
    },
    {
      icon: <ElectricalServicesIcon sx={{ fontSize: "2rem", color: "#FFFFFF" }} />,
      bgColor: "#8C8C8C", // Grey for icon background
      textColor: "#555", // Dark grey text
    },
    {
      icon: <FormatPaintIcon sx={{ fontSize: "2rem", color: "#FFFFFF" }} />,
      bgColor: "#3DA9FC", // Light blue for icon background
      textColor: "#002D62", // Navy text
    },
    {
      icon: <FlooringIcon sx={{ fontSize: "2rem", color: "#FFFFFF" }} />,
      bgColor: "#001C40", // Dark navy for icon background
      textColor: "#002D62", // Navy text
    },
  ];

  return (
    <Box sx={{ padding: "7.5% 5%", backgroundColor: "#FAFAFA", width: "100%", overflow: "hidden" }}>
      <Grid container spacing={4}>
        {/* Title and Description */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: isArabic ? "Cairo, sans-serif" : "Poppins, sans-serif",
              marginBottom: 2,
              color: "#002D62",
            }}
          >
            {t("servicesSection.title")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontWeight: 400,
              color: "#555",
              maxWidth: "500px",
              fontFamily: isArabic ? "Cairo, sans-serif" : "Open Sans, sans-serif",
              marginBottom: 3,
            }}
          >
            {t("servicesSection.description")}
          </Typography>
        </Grid>

        {/* Service Cards */}
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "16px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                backgroundColor: index === 0 ? "#F36F21" : "#FFFFFF", // First card different color
              }}
            >
              <Box
                sx={{
                  backgroundColor: service.bgColor,
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                {service.icon}
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontFamily: isArabic ? "Cairo, sans-serif" : "Poppins, sans-serif",
                    color: index === 0 ? "#FFFFFF" : service.textColor, // White text for first card
                  }}
                >
                  {t(`servicesSection.services.${index}.title`)}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: isArabic ? "Cairo, sans-serif" : "Open Sans, sans-serif",
                    color: index === 0 ? "#FFFFFF" : "#555", // White text for first card
                  }}
                >
                  {t(`servicesSection.services.${index}.description`)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
