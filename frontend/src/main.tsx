import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Anime from "./components/Anime";
import SingleAnime from "./components/SingleAnime";
import AnimeProvider from "./hooks/anime-provider";
import AddAnime from "./components/AddAnime";
import { ThemeProvider } from "./hooks/theme-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/anime",
        element: <Anime />,
      },
      {
        path: "/anime/:id",
        element: <SingleAnime />,
      },
      {
        path: "/add-anime",
        element: <AddAnime />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <AnimeProvider>
        <RouterProvider router={router} />
      </AnimeProvider>
    </ThemeProvider>
  </StrictMode>
);
