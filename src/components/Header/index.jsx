import { Link, Outlet } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Outlet />
    </>
  );
};