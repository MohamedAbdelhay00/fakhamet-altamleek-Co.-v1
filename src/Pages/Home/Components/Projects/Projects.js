import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  Button,
  Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import property1 from "../../../../assets/imgs/b2.jpg";
import property2 from "../../../../assets/imgs/b3.jpg";
import property3 from "../../../../assets/imgs/b1.jpg";
import property4 from "../../../../assets/imgs/b4.jpg";
import i18n from "../../../../i18n";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/projects");
  };
  return (
    <Box
      sx={{
        padding: "7.5% 5%",
        backgroundColor: "#FFFFFF",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={2}>
        {/* Title and Description */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: isArabic
                ? "Cairo, sans-serif"
                : "Poppins, sans-serif",
              marginBottom: 2,
              color: "#002D62",
            }}
          >
            {t("projectsTitle")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontWeight: 400,
              color: "#555",
              maxWidth: "500px",
              fontFamily: isArabic
                ? "Cairo, sans-serif"
                : "Open Sans, sans-serif",
              marginBottom: 3,
            }}
          >
            {t("projectsSubTitle")}
          </Typography>
        </Grid>

        {/* Property Cards */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              height: { xs: "300px", md: "100%" }, // Adjust height for mobile view
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={property1}
              alt="Property"
              sx={{ objectFit: "cover" }}
              loading="lazy"
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "rgba(0, 45, 98, 0.7)", // Dark background for better contrast
                color: "#FFFFFF",
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "0 0 16px 16px",
              }}
            >
              <Box width="100%">
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: isArabic
                        ? "Cairo, sans-serif"
                        : "Poppins, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginBottom: "4px",
                      color: "#FFFFFF",
                    }}
                  >
                    {t("projectprice")}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F36F21",
                      color: "#FFFFFF",
                      borderRadius: "30px",
                      padding: "8px",
                      width: "200px",
                      height: "50px",
                      minWidth: "45px",
                      "&:hover": {
                        backgroundColor: "#D45F1E",
                      },
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    }}
                    onClick={handleNavigate}
                  >
                    {/* Conditionally render icon based on language */}
                    {isArabic ? (
                      <>
                        <ArrowForwardIcon
                          sx={{ fontSize: "1rem", marginRight: "8px" }}
                        />
                        {"شاهد أحدث مشاريعنا "}
                      </>
                    ) : (
                      <>
                        {"Latest Projects"}
                        <ArrowForwardIcon
                          sx={{ fontSize: "1rem", marginLeft: "8px" }}
                        />
                      </>
                    )}
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "16px",
                  }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#CCCCCC",
                        fontSize: "0.85rem",
                        width: "70%",
                      }}
                    >
                      {t("projectAddress")}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      fontSize: "0.85rem",
                      color: "#FFFFFF",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <Typography>201.5 {t("projectArea")}</Typography>
                    </Box>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ backgroundColor: "#CCCCCC" }}
                    />
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <Typography>6 {t("projectBedrooms")}</Typography>
                    </Box>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ backgroundColor: "#CCCCCC" }}
                    />
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <Typography>3 {t("projectBathrooms")}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Right Column with Three Images */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* Top Right Card */}
            <Grid item xs={12} md={12}>
              <Card
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  height: { xs: "200px", md: "100%" },
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={property2}
                  alt="Property"
                  sx={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </Card>
            </Grid>
            {/* Bottom Right Two Cards */}
            <Grid item xs={6} md={6}>
              <Card
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  height: { xs: "150px", md: "100%" },
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={property3}
                  alt="Property"
                  sx={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </Card>
            </Grid>
            <Grid item xs={6} md={6}>
              <Card
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  height: { xs: "150px", md: "100%" },
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={property4}
                  alt="Property"
                  sx={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
