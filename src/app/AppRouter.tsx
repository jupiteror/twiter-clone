import { ROUTES } from "@/config/routes.tsx";
import { Route, Routes } from "react-router";
import { Suspense } from "react";

const AppRouter = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, element, layout: Layout }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Suspense fallback={"Loading..."}>{element}</Suspense>
            </Layout>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
