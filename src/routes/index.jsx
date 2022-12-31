import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../pages/home";
import { ProjectsPage } from "../pages/projects";
import { AboutPage } from "../pages/about";
import { ContactPage } from "../pages/contact";
import { Header } from "../components/Header";
export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
