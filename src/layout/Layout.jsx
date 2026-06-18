import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

/** The shared layout for all pages of the app */
export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
