import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../Components/NotFound/NotFound";
import CustomLoader from '../Components/CustomLoader/CustomLoader';
// import Home from "../Pages/Home/Page/Home";
// import Projects from "../Pages/Projects/Page/Projects";
// import ProjectDetails from "../Pages/Projects/Page/ProjectDetails";
// import Apartment from "../Pages/Apartment/Page/Apartment";
const Home = lazy(() => import('../Pages/Home/Page/Home'))
const Projects = lazy(() => import('../Pages/Projects/Page/Projects'));
const ProjectDetails = lazy(() => import("../Pages/Projects/Page/ProjectDetails"));
const Apartment = lazy(() => import("../Pages/Apartment/Page/Apartment"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<CustomLoader message="Loading Home..." />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<CustomLoader message="Loading Home..." />}>
            <Home />
          </Suspense>
        }
      />

      <Route
        path="/projects"
        element={
          <Suspense fallback={<CustomLoader message="Loading Projects..." />}>
            <Projects />
          </Suspense>
        }
      />
      <Route
        path="/projects/:projectId/apartments"
        element={
          <Suspense fallback={<CustomLoader message="Loading Project Details..." />}>
            <ProjectDetails />
          </Suspense>
        }
      />
      <Route
        path="/projects/:projectId/apartments/:apartmentId"
        element={
          <Suspense fallback={<CustomLoader message="Loading Apartment Details...." />}>
            <Apartment />
          </Suspense>
        }
      />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

export default AppRoutes;