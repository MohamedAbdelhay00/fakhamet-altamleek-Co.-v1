import React, { memo, useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Divider, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const FooterSection = () => {
  const { t } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";
  const isProjectDetailsPage = /^\/projects\/[^/]+\/apartments$/.test(location.pathname);
const isApartmentDetailsPage = /^\/projects\/[^/]+\/apartments\/[^/]+$/.test(
  location.pathname
);
  const isNotFoundPage = location.pathname === "/not-found";
  const navigate = useNavigate();
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const navbar = document.querySelector("header");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (element) {
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const navigateToHome = () => {
    navigate('/');
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email submission
  const handleEmailSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError(t('footerSection.emailInvalid')); // Show error message
      toast.error(t('footerSection.emailInvalid'));
      return;
    }

    // Clear error if email is valid
    setEmailError('');

    emailjs
      .send(
        "service_gzuxog9", // Replace with your Email.js Service ID
        "template_2od20os", // Replace with the new Email.js Template ID for footer
        { email },
        "SZaJDhfaCuwulqhPd" // Replace with your Email.js User ID
      )
      .then((response) => {
        toast.success(t('footerSection.emailSuccessMessage'));
        setEmail(''); // Clear the input field after success
      })
      .catch((error) => {
        toast.error(t('footerSection.emailErrorMessage'));
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#002D62",
        color: "#FFFFFF",
        padding: "50px 5%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Upper Section with Title, Subtitle, and Button */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: isArabic
                ? "Cairo, sans-serif"
                : "Poppins, sans-serif",
              color: "#FFFFFF",
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {t("footerSection.upperTitle")}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              marginTop: 2,
              fontFamily: isArabic
                ? "Cairo, sans-serif"
                : "Open Sans, sans-serif",
              color: "#CCCCCC",
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {t("footerSection.upperSubtitle")}
          </Typography>
        </Grid>

        <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F36F21",
              color: "#FFFFFF",
              padding: "10px 30px",
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "#E96E00",
              },
              fontFamily: isArabic
                ? "Cairo, sans-serif"
                : "Poppins, sans-serif",
            }}
            onClick={() => {
              !isProjectsPage &&
              !isProjectDetailsPage &&
              !isApartmentDetailsPage &&
              !isNotFoundPage
                ? handleScroll("about-us")
                : navigateToHome();
            }}
          >
            {t("footerSection.links.aboutUs")}
          </Button>
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: "#CCCCCC", margin: "40px 0" }} />

      {/* Bottom Section with Logo, Email, and Lists */}
      <Grid container spacing={{ xs: 4, md: 20 }}>
        {/* Left Side - Logo, Description, and Email Input */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: isArabic
                ? "Cairo, sans-serif"
                : "Poppins, sans-serif",
              color: "#FFFFFF",
              marginBottom: "10px",
            }}
          >
            {t("companyName")}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: "#CCCCCC",
              marginBottom: "30px",
              fontFamily: isArabic
                ? "Cairo, sans-serif"
                : "Open Sans, sans-serif",
            }}
          >
            {t("footerSection.companyDescription")}
          </Typography>

          {/* Email Input */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              backgroundColor: "#F4F4F4",
              borderRadius: "8px",
              padding: "5px",
              width: "100%",
            }}
          >
            <TextField
              fullWidth
              placeholder={t("footerSection.emailPlaceholder")}
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  borderColor: "transparent",
                },
                input: { padding: "10px 15px" },
                "& .MuiFormHelperText-root": {
                  textAlign: isArabic ? "right" : "left", // Align helper text based on language
                },
              }}
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F36F21",
                color: "#FFFFFF",
                marginLeft: isArabic ? "0" : "10px",
                marginRight: isArabic ? "10px" : "0",
                padding: "10px 30px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#E96E00",
                },
              }}
              onClick={handleEmailSubmit}
            >
              {t("footerSection.emailSubmit")}
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            {/* Links Section */}
            <Grid item xs={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: isArabic
                    ? "Cairo, sans-serif"
                    : "Poppins, sans-serif",
                  color: "#FFFFFF",
                  marginBottom: "10px",
                }}
              >
                {t("footerSection.links.home")}
              </Typography>
              <Typography
                sx={{
                  color: "#CCCCCC",
                  marginTop: 1,
                  fontFamily: isArabic
                    ? "Cairo, sans-serif"
                    : "Open Sans, sans-serif",
                }}
              >
                {t("footerSection.links.aboutUs")}
              </Typography>
              <Typography
                sx={{
                  color: "#CCCCCC",
                  marginTop: 1,
                  fontFamily: isArabic
                    ? "Cairo, sans-serif"
                    : "Open Sans, sans-serif",
                }}
              >
                {t("footerSection.links.collection")}
              </Typography>
              <Typography
                sx={{
                  color: "#CCCCCC",
                  marginTop: 1,
                  fontFamily: isArabic
                    ? "Cairo, sans-serif"
                    : "Open Sans, sans-serif",
                }}
              >
                {t("footerSection.links.blogNews")}
              </Typography>
            </Grid>

            {/* Security Links */}
            <Grid item xs={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: isArabic
                    ? "Cairo, sans-serif"
                    : "Poppins, sans-serif",
                  color: "#FFFFFF",
                  marginBottom: "10px",
                }}
              >
                {t("footerSection.links.security.title")}
              </Typography>
              <Typography
                sx={{
                  color: "#CCCCCC",
                  marginTop: 1,
                  fontFamily: isArabic
                    ? "Cairo, sans-serif"
                    : "Open Sans, sans-serif",
                }}
              >
                {t("footerSection.links.security.privacyPolicy")}
              </Typography>
              <Typography
                sx={{
                  color: "#CCCCCC",
                  marginTop: 1,
                  fontFamily: isArabic
                    ? "Cairo, sans-serif"
                    : "Open Sans, sans-serif",
                }}
              >
                {t("footerSection.links.security.userAgreements")}
              </Typography>
              <Typography
                sx={{
                  color: "#CCCCCC",
                  marginTop: 1,
                  fontFamily: isArabic
                    ? "Cairo, sans-serif"
                    : "Open Sans, sans-serif",
                }}
              >
                {t("footerSection.links.security.copyright")}
              </Typography>
            </Grid>

            {/* Social Media Links */}
            <Grid item xs={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: isArabic
                    ? "Cairo, sans-serif"
                    : "Poppins, sans-serif",
                  color: "#FFFFFF",
                  marginBottom: "10px",
                }}
              >
                {t("footerSection.links.socialMedia.title")}
              </Typography>
              <IconButton sx={{ color: "#FFFFFF" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "#FFFFFF" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "#FFFFFF" }}>
                <TwitterIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(FooterSection);
