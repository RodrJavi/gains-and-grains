import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import {
  Landing,
  Login,
  Home,
  SignUp,
  SessionCreate,
  SessionView,
} from "@/pages";
import { supabase } from "@/supabaseClient";

import "@/assets/styles/index.css";

const authLoader = async () => {
  const { data } = await supabase.auth.getSession();
  if (!data.session) return redirect("/login");
  return data.session;
};

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
    element: <Home />,
    loader: authLoader,
  },
  {
    path: "/sessions",
    children: [
      {
        path: "/sessions/new",
        element: <SessionCreate />,
      },
      {
        path: "/sessions/:sessionId",
        element: <SessionView />,
      },
    ],
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
