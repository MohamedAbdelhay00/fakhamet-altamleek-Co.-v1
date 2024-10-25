import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, TextField, Button, Card, CardMedia, CardContent, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import b1 from "../../../assets/imgs/b1.png";
import b2 from "../../../assets/imgs/b2.png";
import b3 from "../../../assets/imgs/b3.jpg";
import b4 from "../../../assets/imgs/b4.jpg";
import projects from "../../../data/projects";


const ProjectsPage = () => {
  const  [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    setProjectsData(projects);
    setFilteredProjects(projects);
  }, []);
  const [filter, setFilter] = useState({ search: "", location: "", priceRange: "" });
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const filtered = projectsData.filter((project) => {
      const matchesSearch = filter.search
        ? project.title.toLowerCase().includes(filter.search.toLowerCase())
        : true;
      const matchesLocation = filter.location
        ? project.location.toLowerCase().includes(filter.location.toLowerCase())
        : true;
      const matchesPriceRange = filter.priceRange
        ? parseInt(project.price.replace(/\D/g, ""), 10) <= parseInt(filter.priceRange.replace(/\D/g, ""), 10)
        : true;
      return matchesSearch && matchesLocation && matchesPriceRange;
    });
    setFilteredProjects(filtered);
  };

  return (
    <Box sx={{ padding: "10% 5%" }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", marginBottom: "4rem" }}>
        <Typography variant="h3" sx={{ fontWeight: 700, fontFamily: "Poppins, sans-serif", color: "#002D62" }}>
          Explore Our Real Estate Projects
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", marginTop: 2, fontFamily: "Open Sans, sans-serif" }}>
          Find the perfect property from our curated collection of luxurious real estate projects.
        </Typography>
      </Box>

      {/* Filter/Search Bar */}
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", marginBottom: "4rem" }}>
        <TextField
          label="Search Projects"
          variant="outlined"
          name="search"
          value={filter.search}
          onChange={handleFilterChange}
          InputProps={{ endAdornment: <SearchIcon /> }}
          sx={{ width: "300px" }}
        />
        <TextField
          select
          label="Location"
          variant="outlined"
          name="location"
          value={filter.location}
          onChange={handleFilterChange}
          sx={{ width: "200px" }}
        >
          <MenuItem value="Al Hamra">Al Hamra</MenuItem>
          <MenuItem value="Al Andalus">Al Andalus</MenuItem>
          <MenuItem value="Al Rawda">Al Rawda</MenuItem>
          <MenuItem value="Al Rehab">Al Rehab</MenuItem>
          <MenuItem value="Al Safa">Al Safa</MenuItem>
        </TextField>
        <TextField
          label="Max Price (USD)"
          variant="outlined"
          name="priceRange"
          value={filter.priceRange}
          onChange={handleFilterChange}
          sx={{ width: "200px" }}
        />
        <Button variant="contained" sx={{ backgroundColor: "#F36F21", color: "#FFFFFF" }} onClick={handleSearch}>
          Search
        </Button>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={4}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={3} key={project.id}>
              <Card sx={{ borderRadius: "16px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", overflow: "hidden", height: "100%" }}>
                <CardMedia component="img" image={project.image} alt={project.title} sx={{ height: 200 }} />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Poppins, sans-serif", color: "#002D62" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555", marginTop: 1, fontFamily: "Open Sans, sans-serif" }}>
                    {project.location}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#F36F21", marginTop: 1, fontFamily: "Open Sans, sans-serif" }}>
                    {project.price}
                  </Typography>
                  <Button
                    variant="outlined"
                    component={Link}
                    to={`/projects/${project.id}/apartments`}
                    sx={{ marginTop: 2, color: "#002D62", borderColor: "#002D62" }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ color: "#555", textAlign: "center", width: "100%" }}>
            No projects found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default ProjectsPage;
