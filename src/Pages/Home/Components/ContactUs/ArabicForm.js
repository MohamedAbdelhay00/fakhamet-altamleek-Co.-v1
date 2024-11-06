import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Reset error on input change
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!/^[A-Za-z\s]{3,}$/.test(form.name)) {
      tempErrors.name = t("contactUsSectionForm.form.nameError");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = t("contactUsSectionForm.form.emailError");
    }
    if (form.subject.trim().length < 3) {
      tempErrors.subject = t("contactUsSectionForm.form.subjectError");
    }
    if (form.message.trim().length < 10) {
      tempErrors.message = t("contactUsSectionForm.form.messageError");
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          "service_gzuxog9", // Replace with your Email.js Service ID
          "template_o1uvg4i", // Replace with your Email.js Template ID
          {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
          },
          "SZaJDhfaCuwulqhPd" // Replace with your Email.js User ID
        )
        .then((response) => {
          toast.success(t("contactUsSectionForm.form.successMessage"));
          setForm({ name: "", email: "", subject: "", message: "" });
        })
        .catch((error) => {
          toast.error(t("contactUsSectionForm.form.errorMessage"));
        });
    } else {
      toast.error(t("contactUsSectionForm.form.validationErrorMessage"));
    }
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Grid item xs={12} md={6}>
          <form onSubmit={sendEmail}>
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
                {t("contactUsSection.title")}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="name"
                    label={t("contactUsSectionForm.form.namePlaceholder")}
                    variant="outlined"
                    value={form.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
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
                    name="email"
                    label={t("contactUsSectionForm.form.emailPlaceholder")}
                    variant="outlined"
                    value={form.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
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
                    name="subject"
                    label={t("contactUsSectionForm.form.subjectPlaceholder")}
                    variant="outlined"
                    value={form.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    required
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
                    name="message"
                    label={t("contactUsSectionForm.form.messagePlaceholder")}
                    variant="outlined"
                    value={form.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
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
                    {t("contactUsSectionForm.form.submit")}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
}
