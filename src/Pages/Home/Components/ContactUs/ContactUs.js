import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
import ArabicForm from "./ArabicForm";
import EnglishForm from "./EnglishForm";

export default function ContactUsSection() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  // Company contact details
  const companyAddress = "21.574454991332264,39.21170631096999";
  const companyPhone = "+1234567890";
  const companyEmail = "info@company.com";

  // Google Maps URL for the address
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    companyAddress
  )}`;

  return (
    <Box
      sx={{
        padding: "7.5% 5%",
        backgroundColor: "#F4F4F4",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={4}>
        {/* Contact Information Section */}
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
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {t("contactUsSection.title")}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: "#555",
              fontFamily: isArabic
                ? "Cairo, sans-serif"
                : "Open Sans, sans-serif",
              marginBottom: 3,
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {t("contactUsSection.subTitle")}
          </Typography>

          <Box sx={{ marginTop: 4 }}>
            {/* Address */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{
                    backgroundColor: "#F36F21",
                    color: "#FFFFFF",
                    marginRight: isArabic ? "0px" : "15px",
                    marginLeft: isArabic ? "15px" : "0px",
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
              </Link>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: isArabic
                      ? "Cairo, sans-serif"
                      : "Open Sans, sans-serif",
                    fontWeight: 700,
                    color: "#002D62",
                  }}
                >
                  {t("contactUsSection.office.label")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555" }}
                >
                  {t("contactUsSection.office.address")}
                </Typography>
              </Box>
            </Box>

            {/* Phone */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Link href={`tel:${companyPhone}`}>
                <IconButton
                  sx={{
                    backgroundColor: "#F36F21",
                    color: "#FFFFFF",
                    marginRight: isArabic ? "0px" : "15px",
                    marginLeft: isArabic ? "15px" : "0px",
                  }}
                >
                  <PhoneIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
              </Link>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 700,
                    color: "#002D62",
                  }}
                >
                  {t("contactUsSection.phone.label")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    direction: isArabic ? "ltr" : "ltr",
                  }}
                >
                  {t("contactUsSection.phone.number")}
                </Typography>
              </Box>
            </Box>

            {/* Email */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Link href={`mailto:${companyEmail}`}>
                <IconButton
                  sx={{
                    backgroundColor: "#F36F21",
                    color: "#FFFFFF",
                    marginRight: isArabic ? "0px" : "15px",
                    marginLeft: isArabic ? "15px" : "0px",
                  }}
                >
                  <EmailIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
              </Link>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 700,
                    color: "#002D62",
                  }}
                >
                  {t("contactUsSection.email.label")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555" }}
                >
                  {t("contactUsSection.email.address")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Contact Form Section */}
        {isArabic ? <ArabicForm /> : <EnglishForm />}
      </Grid>
    </Box>
  );
}
