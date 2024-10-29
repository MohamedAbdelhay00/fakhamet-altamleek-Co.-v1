import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import projectsData from "../../../data/projects";
import apartmentsData from "../../../data/apartments";
import i18n from "../../../i18n";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(projectId));
  const navigate = useNavigate();
  const language = i18n.language;
  const { t } = i18n;

  if (!project) {
    return (
      <Box sx={{ padding: "5%", textAlign: "center" }}>
        <Typography variant="h4">Project not found</Typography>
      </Box>
    );
  }

  // Filter apartments that belong to this project
  const relatedApartments = apartmentsData.filter(
    (apartment) => apartment.projectId === parseInt(projectId)
  );

  return (
    <Box sx={{ padding: { xs: "25% 5%", md: "10% 5%"}, width: "100%", overflow: "hidden" }}>
      <Typography
        className="dot-pattern"
        variant="h3"
        sx={{ fontWeight: 700, color: "#002D62", marginBottom: 2 }}
      >
        {project.title[language]}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        {project.description[language]}
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        {t("availableApartments")}
      </Typography>
      <Grid container spacing={4}>
        {relatedApartments.map((apartment) => (
          <Grid item xs={12} sm={6} md={4} key={apartment.id}>
            <Card
              sx={{ borderRadius: "16px", overflow: "hidden", height: "100%" }}
            >
              <CardMedia
                component="img"
                image={apartment.mainImage}
                alt={apartment.title[language]}
                sx={{ height: 200 }}
                loading="lazy"
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: "#002D62" }}>
                  {apartment.title[language]}
                </Typography>
                <Typography variant="body1" sx={{ color: "#666666" }}>
                  {apartment.size} {t("projectArea")} | {apartment.floors}{" "}
                  {t("floors")} | {apartment.beds} {t("projectBedrooms")} |{" "}
                  {apartment.baths} {t("projectBathrooms")}
                </Typography>
                <Typography variant="body2" sx={{ color: "#F36F21" }}>
                  {apartment.price[language]}
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
                  {t("viewApartment")}
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
