import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./routes/homepage/Homepage.jsx";
import DashboardPage from "./routes/dashboardPage/DashboardPage.jsx";
import ChatPage from "./routes/chatPage/ChatPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";

import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";
import SignInPage from "./routes/sign-in/SignInPage.jsx";
import SignUpPage from "./routes/sign-up/SignUpPage.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
