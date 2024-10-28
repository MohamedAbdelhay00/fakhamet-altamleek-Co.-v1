import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import projects from "../../../data/projects";
import i18n from "../../../i18n";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const rtlTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Cairo, sans-serif",
  },
});

const ltrTheme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const ProjectsPage = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [filter, setFilter] = useState({ search: "", location: "", priceRange: "" });
  const [filteredProjects, setFilteredProjects] = useState([]);
  const language = i18n.language;
  const isRtl = language === "ar";

  useEffect(() => {
    setProjectsData(projects);
    setFilteredProjects(projects);
  }, []);

  const uniqueLocations = [...new Set(projects.map((project) => project.location[language]))];

  const handleFilterChange = (e) => {
    const updatedFilter = { ...filter, [e.target.name]: e.target.value };
    setFilter(updatedFilter);
    applyFilters(updatedFilter);
  };

  const applyFilters = (filter) => {
    const filtered = projectsData.filter((project) => {
      const projectPrice =
        typeof project.price[language] === "string"
          ? parseInt(project.price[language].replace(/\D/g, ""), 10)
          : 0;

      const matchesSearch = filter.search
        ? project.title[language].toLowerCase().includes(filter.search.toLowerCase())
        : true;
      const matchesLocation = filter.location
        ? project.location[language].toLowerCase() === filter.location.toLowerCase()
        : true;
      const matchesPriceRange = filter.priceRange
        ? projectPrice <= parseInt(filter.priceRange.replace(/\D/g, ""), 10)
        : true;
      return matchesSearch && matchesLocation && matchesPriceRange;
    });
    setFilteredProjects(filtered);
  };

  const handleClearFilters = () => {
    setFilter({ search: "", location: "", priceRange: "" });
    setFilteredProjects(projectsData);
  };

  const content = (
    <Box
      sx={{
        padding: { xs: "25% 5%", md: "10% 5%" },
        width: "100%",
        overflow: "hidden",
        direction: isRtl ? "rtl" : "ltr",
        fontFamily: isRtl ? "Cairo, sans-serif" : "Poppins, sans-serif",
      }}
    >
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", marginBottom: "4rem" }}>
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#002D62" }}>
          {language === "en"
            ? "Explore Our Real Estate Projects"
            : "استكشف مشاريعنا العقارية"}
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", marginTop: 2 }}>
          {language === "en"
            ? "Find the perfect property from our curated collection of luxurious real estate projects."
            : "ابحث عن العقار المثالي من مجموعتنا المختارة من المشاريع العقارية الفاخرة."}
        </Typography>
      </Box>

      {/* Filter/Search Bar */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          marginBottom: "4rem",
          flexWrap: "wrap",
        }}
      >
        <TextField
          label={language === "en" ? "Search Projects" : "بحث عن مشاريع"}
          variant="outlined"
          name="search"
          value={filter.search}
          onChange={handleFilterChange}
          InputProps={{
            endAdornment: isRtl ? null : <SearchIcon />,
            startAdornment: isRtl ? <SearchIcon /> : null,
            inputProps: {
              style: { textAlign: isRtl ? "right" : "left" },
            },
          }}
          sx={{ width: { xs: "100%", sm: "300px" } }}
        />

        <TextField
          select
          label={language === "en" ? "Location" : "الموقع"}
          variant="outlined"
          name="location"
          value={filter.location}
          onChange={handleFilterChange}
          sx={{ width: { xs: "100%", sm: "200px" } }}
        >
          {uniqueLocations.map((location, index) => (
            <MenuItem key={index} value={location}>
              {location}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label={language === "en" ? "Max Price (USD)" : "الحد الأقصى للسعر"}
          variant="outlined"
          name="priceRange"
          value={filter.priceRange}
          onChange={handleFilterChange}
          sx={{ width: { xs: "100%", sm: "200px" } }}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F36F21",
            color: "#FFFFFF",
            minWidth: "100px",
            fontFamily: isRtl ? "Cairo, sans-serif" : "Poppins, sans-serif",
          }}
          onClick={handleClearFilters}
          startIcon={<ClearIcon />}
        >
          {language === "en" ? "Clear" : "مسح"}
        </Button>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={4}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={3} key={project.id}>
              <Card
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  height: "100%",
                  fontFamily: isRtl ? "Cairo, sans-serif" : "Poppins, sans-serif",
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title[language]}
                  sx={{ height: 200 }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#002D62" }}
                  >
                    {project.title[language]}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#555", marginTop: 1 }}
                  >
                    {project.location[language]}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#F36F21", marginTop: 1 }}
                  >
                    {project.price[language]}
                  </Typography>
                  <Button
                    variant="outlined"
                    component={Link}
                    to={`/projects/${project.id}/apartments`}
                    sx={{
                      marginTop: 2,
                      color: "#002D62",
                      borderColor: "#002D62",
                    }}
                  >
                    {language === "en" ? "View Details" : "عرض التفاصيل"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{ color: "#555", textAlign: "center", width: "100%" }}
          >
            {language === "en" ? "No projects found." : "لم يتم العثور على مشاريع."}
          </Typography>
        )}
      </Grid>
    </Box>
  );

  return isRtl ? (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>{content}</ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={ltrTheme}>{content}</ThemeProvider>
  );
};

export default ProjectsPage;
