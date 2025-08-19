import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { lazy, Suspense } from "react";
import Layout from "../components/ui/Layout";
import Loader from "../components/ui/Loader";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const AboutPage = lazy(() => import("../pages/About/About"));
const ContactPage = lazy(() => import("../pages/contact/Contact"));
const GalleryPage = lazy(() => import('../pages/Gallery/Gallery'))
const NotFoundPage = lazy(() => import('../pages/notFound/NotFound'));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {/* Wrap routes in Layout */}
        <Route element={<Layout />}>
          {/* Public Routes */}
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage/>} />
          <Route path={ROUTES.GALLERY} element={<GalleryPage/>} />
          
          {/* 404 Handling */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;