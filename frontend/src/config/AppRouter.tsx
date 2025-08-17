import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { lazy, Suspense } from "react";
import Layout from "../components/ui/Layout";
import Loader from "../components/ui/Loader";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const NotFoundPage = lazy(() => import('../pages/notFound/NotFound'));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {/* Wrap routes in Layout */}
        <Route element={<Layout />}>
          {/* Public Routes */}
          <Route path={ROUTES.HOME} element={<HomePage />} />
          
          {/* 404 Handling */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;