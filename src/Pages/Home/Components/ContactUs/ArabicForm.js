import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Set up the RTL theme
const theme = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function ArabicForm() {
  const { t } = useTranslation();

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "30px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              fontFamily: "Cairo, sans-serif",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontFamily: "Cairo, sans-serif",
                color: "#002D62",
                marginBottom: "20px",
              }}
            >
              {t("contactUsSection.form.title")}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t("contactUsSection.form.namePlaceholder")}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t("contactUsSection.form.emailPlaceholder")}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("contactUsSection.form.subjectPlaceholder")}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label={t("contactUsSection.form.messagePlaceholder")}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
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
                    fontFamily: "Cairo, sans-serif",
                  }}
                >
                  {t("contactUsSection.form.submit")}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
}
