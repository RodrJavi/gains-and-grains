import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthGuard } from "@/components/AuthGuard";
import { Landing, Login, Home, SignUp } from "@/pages";

import "@/assets/styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: (
      <AuthGuard>
        <Home />
      </AuthGuard>
    ),
  },
]);

document.addEventListener("DOMContentLoaded", () => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
});
