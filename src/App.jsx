// import { usePage } from "./layout/PageContext";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./Error404.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  return (
    <Routes>
      {/* The master layout handles the navbar wrapper */}
      <Route path="/" element={<Layout />}>
        {/* 1. This makes the main "Fitness Tracker" landing view show up on the root URL (/) */}
        <Route
          index
          element={
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h1>Welcome to Fitness Tracker</h1>
              <p>
                Share your workouts and discover brand new training routines!
              </p>
            </div>
          }
        />

        {/* 2. Sub-pages render cleanly inside the <Outlet /> when navigating */}
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Catch-all route for any broken URLs */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
