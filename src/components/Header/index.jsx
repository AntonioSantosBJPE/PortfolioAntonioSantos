import { Outlet } from "react-router-dom";
import { StyledMenu, StyledContainerOutlat } from "./style";
import { Sling } from "hamburger-react";
import logo from "../../assets/logo.svg";
import { useState, useEffect } from "react";
import { LinkNavigation } from "../LinkNavigation";

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
          <LinkNavigation
            to="/"
            variant="InternalNoBoardGrey1"
            onClick={closeMenu}
          >
            <span>#</span>Home
          </LinkNavigation>
          <LinkNavigation
            to="/projects"
            variant="InternalNoBoardGrey1"
            onClick={closeMenu}
          >
            <span>#</span>Projetos
          </LinkNavigation>
          <LinkNavigation
            to="/about"
            variant="InternalNoBoardGrey1"
            onClick={closeMenu}
          >
            <span>#</span>Sobre
          </LinkNavigation>
          <LinkNavigation
            to="/contact"
            variant="InternalNoBoardGrey1"
            onClick={closeMenu}
          >
            <span>#</span>Contato
          </LinkNavigation>
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
