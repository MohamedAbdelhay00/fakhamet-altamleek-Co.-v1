import React from "react";
import { Box, Grid, Typography, Card, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import user1 from "../../../../assets/imgs/c1.jpg"; // Replace with real images
import user2 from "../../../../assets/imgs/c2.jpg";
import user3 from "../../../../assets/imgs/c3.jpg";
import user4 from "../../../../assets/imgs/c4.jpg";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const testimonials = [
    {
      image: user3,
      rating: 5,
    },
    {
      image: user2,
      rating: 5,
    },
    {
      image: user4,
      rating: 4,
    },
    {
      image: user1,
      rating: 5,
    },
  ];

  return (
    <Box sx={{ padding: "7.5% 5%", backgroundColor: "#FFFFFF", width: "100%", overflow: "hidden" }}>
      {/* Title Section */}
      <Box textAlign="center" marginBottom={5}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontFamily: isArabic ? "Cairo, sans-serif" : "Poppins, sans-serif",
            color: "#002D62",
          }}
        >
          {t("testimonialsSection.title")}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            color: "#555",
            fontFamily: isArabic
              ? "Cairo, sans-serif"
              : "Open Sans, sans-serif",
            marginTop: 2,
          }}
        >
          {t("testimonialsSection.subTitle")}
        </Typography>
      </Box>

      {/* Testimonials Grid */}
      <Grid
        container
        spacing={{ xs: 7, md: 4 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {testimonials.map((testimonial, index) => (
          <Grid
            item
            xs={12}
            sm={index === 0 || index === 3 ? 6 : 4}
            key={index}
          >
            <Card
              sx={{
                minHeight: "320px", // Ensures all cards have equal height
                borderRadius: "16px",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "20px",
                position: "relative",
                backgroundColor: "#F7F7F7", // Light grey background for cards
                overflow: "visible",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 2,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: { xs: 70, md: 80 }, // Adjust width for responsiveness
                    height: { xs: 70, md: 80 },
                    position: "absolute",
                    top: { xs: "-50px", md: "-40px" }, // Adjust top for responsiveness
                    left: { xs: "calc(50% - 25px)", md: "20px" }, // Center on mobile, left-align on larger screens
                    border: "4px solid white", // White border to match the card's background
                    marginBottom: "20px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: isArabic
                    ? "Cairo, sans-serif"
                    : "Open Sans, sans-serif",
                  fontWeight: 400,
                  color: "#555",
                  marginBottom: 2,
                }}
              >
                {t(`testimonialsSection.testimonials.${index}.testimonial`)}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      fontFamily: isArabic
                        ? "Cairo, sans-serif"
                        : "Poppins, sans-serif",
                      color: "#002D62",
                    }}
                  >
                    {t(`testimonialsSection.testimonials.${index}.name`)}
                  </Typography>
                  {Array.from({
                    length: t(
                      `testimonialsSection.testimonials.${index}.rating`
                    ),
                  }).map((_, starIndex) => (
                    <StarIcon key={starIndex} sx={{ color: "#F36F21" }} />
                  ))}
                </Box>
                <FormatQuoteIcon
                  sx={{
                    fontSize: "7rem",
                    transform: "rotate(180deg)",
                    color: "#dedede",
                    opacity: 0.2,
                  }}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
