import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import bg from "../../../../assets/imgs/heroImg.jpg";
import { useTranslation } from "react-i18next";
import { keyframes } from "@mui/system";
import i18n from "../../../../i18n";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export default function Home() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/projects")
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
        animation: `${fadeIn} 2s ease-in-out`,
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${bg})`,
          width: "100%",
          objectFit: "cover",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          margin: "0 10px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "0 5%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: isArabic ? "Cairo, sans-serif" : "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3rem", sm: "2.5rem" },
            color: "#fff",
            width: { xs: "90%", md: "70%" },
            paddingTop: "5%",
            lineHeight: 1.3,
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {t("heroTitle")}
        </Typography>
        <Typography
          sx={{
            fontFamily: isArabic ? "Cairo, sans-serif" : "Open Sans, sans-serif",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#fff",
            width: { xs: "80%", md: isArabic ? "40%" : "50%" },
            paddingTop: "20px",
            fontSize: { xs: "1rem", md: "1.5rem" },
            marginBottom: "20px",
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {t("heroSubTitle")}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              fontFamily: isArabic ? "Cairo, sans-serif" : "Poppins, sans-serif",
              padding: { xs: "8px 16px", md: "10px 20px" },
              fontSize: { xs: "0.9rem", md: "1rem" },
              backgroundColor: "#002D62",
              color: "#FFFFFF",
              borderRadius: "8px",
              minWidth: "120px",
              textTransform: "uppercase",
            }}
            onClick={scrollToContact}
          >
            {t("heroBtn1")}
          </Button>

          <Button
            variant="contained"
            sx={{
              fontFamily: isArabic ? "Cairo, sans-serif" : "Poppins, sans-serif",
              padding: { xs: "8px 16px", md: "10px 20px" },
              fontSize: { xs: "0.9rem", md: "1rem" },
              backgroundColor: "#3DA9FC",
              color: "#FFFFFF",
              borderRadius: "8px",
              minWidth: "150px",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#2A91D9",
              },
            }}
            onClick={handleNavigate}
          >
            {t("heroBtn2")}
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
