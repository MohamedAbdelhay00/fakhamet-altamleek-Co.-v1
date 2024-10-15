import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../Components/NotFound/NotFound";
import Home from "../Pages/Home/Page/Home";
import Projects from "../Pages/Projects/Page/Projects";
import ProjectDetails from "../Pages/Projects/Page/ProjectDetails";
import Apartments from "../Pages/Apartments/Page/Apartments";
import Apartment from "../Pages/Apartment/Page/Apartment";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
      <Route path="/projects/:projectId/apartments" element={<Apartments />} />
      <Route path="/projects/:projectId/apartments/:apartmentId" element={<Apartment />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

export default AppRoutes;