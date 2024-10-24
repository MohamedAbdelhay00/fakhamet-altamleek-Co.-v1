import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import b1 from "../../../assets/imgs/b1.png";
import b2 from "../../../assets/imgs/b2.png";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Luxury Villa in Al Hamra",
    description: "A luxury villa with a swimming pool, garden, and modern amenities.",
    availableApartments: [
      { id: 1, title: "Apartment 1", description: "A luxury villa with a swimming pool, garden, and modern amenities.", price: "$1,500,000", image: b1 },
      { id: 2, title: "Apartment 2", description: "A luxury villa with a swimming pool, garden, and modern amenities.", price: "$1,600,000", image: b2 },
      { id: 3, title: "Apartment 3", description: "A luxury villa with a swimming pool, garden, and modern amenities.", price: "$1,600,000", image: b2 },
      { id: 4, title: "Apartment 4", description: "A luxury villa with a swimming pool, garden, and modern amenities.", price: "$1,600,000", image: b2 },
    ],
  },
  // Add more projects as needed
];

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(projectId));
  const navigate = useNavigate();
  if (!project) {
    return (
      <Box sx={{ padding: "5%", textAlign: "center" }}>
        <Typography variant="h4">Project not found</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ padding: "10% 5%" }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, color: "#002D62", marginBottom: 2 }}
      >
        {project.title}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        {project.description}
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Available Apartments:
      </Typography>
      <Grid container spacing={4}>
        {project.availableApartments.map((apartment, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: "16px", overflow: "hidden", height: "100%" }}>
              <CardMedia
                component="img"
                image={apartment.image}
                alt={apartment.title}
                sx={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: "#002D62" }}>
                  {apartment.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#666666" }}>
                  {apartment.description}
                </Typography>
                <Typography variant="body2" sx={{ color: "#F36F21" }}>
                  starts form {apartment.price}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() =>
                    navigate(
                      `/projects/${projectId}/apartments/${apartment.id}`
                    )
                  }
                  sx={{
                    marginTop: 2,
                    color: "#002D62",
                    borderColor: "#002D62",
                  }}
                >
                  View Apartment
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectDetailsPage;
