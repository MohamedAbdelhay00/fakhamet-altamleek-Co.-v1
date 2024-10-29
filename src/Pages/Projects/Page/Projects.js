import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  Slider,
  Collapse,
  IconButton,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import projects from "../../../data/projects";
import i18n from "../../../i18n";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './Project.css'
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
  const [filter, setFilter] = useState({ search: "", priceRange: [100000, 5000000], location: "" });
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const language = i18n.language;
  const filterRef = useRef(null);
  const isRtl = language === "ar";

  useEffect(() => {
    setProjectsData(projects);
    setFilteredProjects(projects);
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const uniqueLocations = [...new Set(projects.map((project) => project.location[language]))];

  const handleFilterChange = (e) => {
    const updatedFilter = { ...filter, [e.target.name]: e.target.value };
    setFilter(updatedFilter);
    applyFilters(updatedFilter);
  };

  const handlePriceChange = (event, newValue) => {
    const updatedFilter = { ...filter, priceRange: newValue };
    setFilter(updatedFilter);
    applyFilters(updatedFilter);
  };

  const applyFilters = (filter) => {
    const filtered = projectsData.filter((project) => {
      const matchesSearch = filter.search
        ? project.title[language].toLowerCase().includes(filter.search.toLowerCase())
        : true;

      const projectPrice = typeof project.price[language] === "string"
        ? parseInt(project.price[language].replace(/\D/g, ""), 10)
        : project.price;

      const matchesPriceRange =
        projectPrice >= filter.priceRange[0] && projectPrice <= filter.priceRange[1];

      const matchesLocation = filter.location
        ? project.location[language] === filter.location
        : true;

      return matchesSearch && matchesPriceRange && matchesLocation;
    });

    setFilteredProjects(filtered);
  };

  const handleClearFilters = () => {
    setFilter({ search: "", priceRange: [100000, 5000000], location: "" });
    setFilteredProjects(projectsData);
  };

  const toggleFilterVisibility = () => {
    setShowFilters(!showFilters);
  };

  const content = (
    <ThemeProvider theme={isRtl ? rtlTheme : ltrTheme}>
      <Box
        sx={{
          padding: { xs: "25% 5%", md: "10% 5%" },
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Header Section */}
        <Box className="dot-pattern" sx={{ textAlign: "center", marginBottom: "4rem" }}>
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

        {/* Search Input with Filter & Clear */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "400px" },
            margin: "0 auto",
          }}
        >
          <TextField
            fullWidth
            label={language === "en" ? "Search Projects" : "بحث عن مشاريع"}
            variant="outlined"
            name="search"
            value={filter.search}
            onChange={handleFilterChange}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: "#002D62", mr: 1 }} />,
              endAdornment: (
                <>
                  <IconButton onClick={toggleFilterVisibility}>
                    <FilterListIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={handleClearFilters}>
                    <ClearIcon color="error" />
                  </IconButton>
                </>
              ),
            }}
            inputProps={{
              style: { textAlign: language === "ar" ? "right" : "left" },
              dir: language === "ar" ? "rtl" : "ltr", // Ensure placeholder is aligned in RTL
            }}
            sx={{ width: "100%" }}
          />

          {/* Filter Dropdown */}
          <Collapse
            in={showFilters}
            timeout="auto"
            unmountOnExit
            sx={{ mt: 2 }}
            ref={filterRef}
          >
            <Box
              sx={{
                p: 2,
                border: "1px solid #ccc",
                borderRadius: 2,
                backgroundColor: "#f9f9f9",
              }}
            >
              {/* Price Range Slider */}
              <Typography sx={{ mb: 1 }}>
                {language === "en" ? "Price Range (SAR)" : "نطاق السعر (ر.س)"}
              </Typography>
              <Slider
                value={filter.priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={100000}
                max={5000000}
                sx={{ color: "#F36F21", mb: 2 }}
              />

              {/* Location Dropdown */}
              <TextField
                select
                label={language === "en" ? "Location" : "الموقع"}
                variant="outlined"
                name="location"
                value={filter.location}
                onChange={handleFilterChange}
                fullWidth
                sx={{ mt: 2 }}
              >
                <MenuItem value="">
                  {language === "en" ? "All Locations" : "كل المواقع"}
                </MenuItem>
                {uniqueLocations.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Collapse>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={3} key={project.id}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    height: "100%",
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
              {language === "en"
                ? "No projects found."
                : "لم يتم العثور على مشاريع."}
            </Typography>
          )}
        </Grid>
      </Box>
    </ThemeProvider>
  );

  return cacheRtl ? (
    <CacheProvider value={cacheRtl}>{content}</CacheProvider>
  ) : (
    content
  );
};

export default ProjectsPage;
