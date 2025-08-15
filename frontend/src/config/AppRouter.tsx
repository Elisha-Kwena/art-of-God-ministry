import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { lazy, Suspense } from "react";
import Layout from "../components/ui/Layout";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const NotFoundPage = lazy(() => import('../pages/notFound/NotFound'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading page...</div>}>
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