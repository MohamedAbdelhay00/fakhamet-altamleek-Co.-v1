import { Box, Grid, Typography, Card, CardContent, Button } from "@mui/material";
import React from "react";
import heroImage from "../../../../assets/imgs/IMG_2356.jpg";
import i18n from "../../../../i18n";
import { useTranslation } from "react-i18next";

export default function TrustedSection() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box sx={{ padding: "7.5% 5%", backgroundColor: "#FAFAFA", width: "100%", overflow: "hidden" }}>
      <Grid container spacing={4} alignItems="stretch">
        {/* Upper Left - Title */}
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
            {t("aboutUsTitle")}
          </Typography>
        </Grid>

        {/* Upper Right - Description */}
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
            {t("aboutUsSubTitle")}
          </Typography>
        </Grid>

        {/* Lower Left - Metric Cards */}
        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            {[
              {
                value: isArabic ? "+17الف" : "17K+",
                label: `${t("customerSatisfaction")}`,
                bg: "#FFFFFF",
                color: "#555",
              },
              {
                value: "25+",
                label: `${t("yearsOfExperience")}`,
                bg: "#002D62",
                color: "#FFFFFF",
              },
              {
                value: "150+",
                label: `${t("winningAwards")}`,
                bg: "#F4F4F4",
                color: "#555",
              },
              {
                value: "25+",
                label: `${t("colelctionsOfProperty")}`,
                bg: "#F4F4F4",
                color: "#555",
              },
            ].map((item, index) => (
              <Grid item xs={6} key={index}>
                <Box
                  sx={{
                    backgroundColor: item.bg,
                    color: item.color || "#000",
                    padding: "2rem 1.5rem",
                    borderRadius: "12px",
                    textAlign: "center",
                    boxShadow:
                      item.bg === "#002D62"
                        ? "none"
                        : "0px 2px 8px rgba(0, 0, 0, 0.05)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    fontFamily: isArabic ? "Cairo, sans-serif" : "Open Sans, sans-serif",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, fontSize: "1.5rem" }}
                  >
                    {item.value}
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", marginTop: 1 }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Lower Right - Text and Image Card */}
        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              height: "100%", // Ensure it stretches to match height
              flexGrow: 1,
              padding: "10px",
            }}
          >
            <CardContent sx={{ flex: 1, padding: "16px" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontFamily: isArabic ? "cairo, sans-serif" : "Open Sans, sans-serif",
                  marginBottom: 2,
                  fontSize: "1rem",
                  color: "#555",
                }}
              >
                {t("aboutUs")}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#E96E00",
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  "&:hover": {
                    backgroundColor: "#D85D00",
                  },
                  minWidth: "140px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                onClick={scrollToContact}
              >
                <span>{t("heroBtn1")}</span>
                <span style={{ transform: "rotate(45deg)", display: "flex" }}>
                  ➔
                </span>
              </Button>
            </CardContent>
            <Box sx={{ flex: 1, height: "300px" }}>
              <img
                src={heroImage}
                alt="Real Estate Property"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                  padding: "0px"
                }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
