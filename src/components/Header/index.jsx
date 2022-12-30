import { Link, Outlet } from "react-router-dom";
import { StyledMenu, StyledContainerOutlat } from "./style";
import { Sling } from "hamburger-react";
import logo from "../../assets/logo.svg";
import { useState, useEffect } from "react";

export const Header = () => {
  const [menuBurgerIsOpen, setMenuBurgerIsOpen] = useState(false);

  const closeMenu = () => {
    setMenuBurgerIsOpen(false);
  };
  const resizeWindow = () => {
    closeMenu();
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return (
    <>
      <StyledMenu isOpen={menuBurgerIsOpen}>
        <img src={logo} alt="" />
        <nav>
          <Link to="/" onClick={closeMenu}>
            <span>#</span>Home
          </Link>
          <Link to="/projects" onClick={closeMenu}>
            <span>#</span>Projetos
          </Link>
          <Link to="/about" onClick={closeMenu}>
            <span>#</span>Sobre
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            <span>#</span>Contato
          </Link>
        </nav>
        <Sling
          label="Show menu"
          hideOutline={false}
          rounded
          color="#ABB2BF"
          toggled={menuBurgerIsOpen}
          toggle={setMenuBurgerIsOpen}
        />
      </StyledMenu>
      <StyledContainerOutlat>
        <Outlet />
      </StyledContainerOutlat>
    </>
  );
};
