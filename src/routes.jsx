import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/video";
import MovieProvider from "./contexts/MovieProvider";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route
          element={
            <MovieProvider>
              <Video></Video>
            </MovieProvider>
          }
          path="/video"
          exact
        />
        <Route
          element={
            <MovieProvider>
              <Video></Video>
            </MovieProvider>
          }
          path="/video/:id"
        />
      </Routes>
    </BrowserRouter>
  );
}
