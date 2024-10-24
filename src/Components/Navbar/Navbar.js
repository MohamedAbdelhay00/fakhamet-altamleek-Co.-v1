import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { useDirection } from "../../context/DirectionContext";
import logo from "../../assets/imgs/cleaned_logo_smooth_high_quality.png";
import whiteLogo from "../../assets/imgs/transparent_logo.png";
import "./Navbar.module.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";
  const isProjectDetailsPage = /^\/projects\/[^/]+\/apartments$/.test(location.pathname);
const isApartmentDetailsPage = /^\/projects\/[^/]+\/apartments\/[^/]+$/.test(
  location.pathname
);
  const isNotFoundPage = location.pathname === "/not-found";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: isProjectsPage
      ? "rgba(255, 255, 255, 1)"
      : "rgba(255, 255, 255, 0)",
    boxShadow: "none",
    linkColor: isProjectsPage ? "#002D62" : "#fff",
  });

  const [logoSrc, setLogoSrc] = useState(logo);
  const { t, i18n } = useTranslation();
  const { setDirection } = useDirection();
  const isArabic = i18n.language === "ar";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    const newDirection = newLanguage === "ar" ? "rtl" : "ltr";
    setDirection(newDirection);
    document.documentElement.dir = newDirection;
    document.documentElement.lang = newLanguage;
  };

  const handleScroll = (id) => {
    setActiveLink(id);
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

  useEffect(() => {
    if (isProjectsPage || isProjectDetailsPage || isApartmentDetailsPage) {
      setNavbarStyle({
        backgroundColor: "rgba(255, 255, 255, 1)",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        linkColor: "#002D62",
      });
      setLogoSrc(whiteLogo);
    } else {
      const handleScrollEffect = () => {
        if (window.scrollY > 80) {
          setNavbarStyle({
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            linkColor: "#002D62",
          });
          setLogoSrc(whiteLogo);
        } else {
          setNavbarStyle({
            backgroundColor: "rgba(255, 255, 255, 0)",
            boxShadow: "none",
            linkColor: "#fff",
          });
          setLogoSrc(logo);
        }
      };

      window.addEventListener("scroll", handleScrollEffect);
      return () => {
        window.removeEventListener("scroll", handleScrollEffect);
      };
    }
  }, [isProjectsPage, isProjectDetailsPage, isApartmentDetailsPage]);

  useEffect(() => {
    const sections = [
      "home",
      "about-us",
      "projects",
      "services",
      "testimonials",
    ];
    const navbarHeight = document.querySelector("header")?.offsetHeight || 0;

    const observerOptions = {
      root: null,
      rootMargin: `-${navbarHeight}px 0px 0px 0px`,
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [i18n.language]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ padding: "16px", display: "flex", alignItems: "center" }}>
        <img
          src={whiteLogo}
          alt="Logo"
          style={{ width: "40px", marginRight: "10px" }}
        />
        <Typography variant="p" sx={{ color: "#002D62", margin: "0 5px" }}>
          {t("companyName")}
        </Typography>
      </Box>

      <List
        sx={{
          fontSize: "1rem",
          fontWeight: "500",
          color: "#002D62",
        }}
      >
        <ListItem
          disabled={isNotFoundPage}
          button
          onClick={() => handleScroll("home")}
        >
          <ListItemText primary={t("home")} />
        </ListItem>
        <Divider />
        <ListItem
          disabled={isNotFoundPage}
          button
          onClick={() => handleScroll("about-us")}
        >
          <ListItemText primary={t("about-us")} />
        </ListItem>
        <Divider />
        <ListItem
          disabled={isNotFoundPage}
          button
          onClick={() => handleScroll("projects")}
        >
          <ListItemText primary={t("projects")} />
        </ListItem>
        <Divider />
        <ListItem
          disabled={isNotFoundPage}
          button
          onClick={() => handleScroll("services")}
        >
          <ListItemText primary={t("services")} />
        </ListItem>
        <Divider />
        <ListItem
          disabled={isNotFoundPage}
          button
          onClick={() => handleScroll("testimonials")}
        >
          <ListItemText primary={t("testimonials")} />
        </ListItem>
        <Divider />
        <ListItem button onClick={changeLanguage}>
          <LanguageIcon />
          <ListItemText primary={i18n.language === "en" ? "AR" : "EN"} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <AppBar
        position="absolute"
        sx={{
          ...navbarStyle,
          transition: "0.3s ease",
          padding: { md: "0.5% 5%", xs: "3% 5%" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-start",
              width: { xs: "40px", md: "50px" },
              height: { xs: "40px", md: "50px" },
            }}
            onClick={() => handleScroll("home")}
          >
            <img
              src={logoSrc}
              alt="Fakhamet Altamleek Co."
              style={{
                cursor: "pointer",
                borderRadius: "8px",
                "@media (min-width: 600px)": {
                  width: "50px",
                  height: "50px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flex: 3,
              justifyContent: "center",
              gap: 2,
              color: navbarStyle.linkColor,
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "1rem",
            }}
          >
            {["home", "about-us", "projects", "services", "testimonials"].map(
              (key) => (
                <Button
                  key={key}
                  color="inherit"
                  onClick={() => handleScroll(key)}
                  sx={{
                    fontFamily: isArabic
                      ? "Cairo, sans-serif"
                      : "Poppins, sans-serif",
                    position: "relative",
                    color: navbarStyle.linkColor,
                    "&:hover:after": {
                      transform: isNotFoundPage ? "scaleX(0)" : "scaleX(1)",
                    },
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "2px",
                      bottom: "0",
                      left: "0",
                      backgroundColor: "#002D62",
                      transform:
                        activeLink === key && !isNotFoundPage
                          ? "scaleX(1)"
                          : "scaleX(0)",
                      transformOrigin: "bottom right",
                      transition: "transform 0.25s ease-out",
                    },
                  }}
                  disabled={isNotFoundPage}
                >
                  {t(key)}
                </Button>
              )
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1,
              flex: 1,
            }}
          >
            <Button
              onClick={changeLanguage}
              startIcon={<LanguageIcon sx={{ ml: 1 }} />}
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: isArabic
                  ? "Cairo, sans-serif"
                  : "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#002D62",
                minWidth: "80px",
                borderRadius: "50px",
                border: "2px solid #000",
                padding: "10px 20px",
              }}
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </Button>
            <Button
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: isArabic
                  ? "Cairo, sans-serif"
                  : "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                color: "#fff",
                minWidth: "100px",
                backgroundColor: "rgba(0, 45, 98, 0.2)",
                border: "2px solid rgba(0, 45, 98, 0.0)",
                borderRadius: "50px",
                padding: "10px 16px",
              }}
              onClick={() => handleScroll("contact-us")}
            >
              {t("contact-us")}
            </Button>
            <IconButton
              color={window.scrollY > 80 ? "primary" : "inherit"}
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                color: window.scrollY > 80 ? "#002D62" : "#fff",
                fontSize: "2rem",
              }}
            >
              <MenuIcon sx={{ fontSize: "2rem" }} />{" "}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              backgroundColor: "#f0f4f8",
              width: 300,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
