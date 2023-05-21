import { Outlet } from "react-router-dom";
import { StyledMenu, StyledContainerOutlat } from "./style";
import { Sling } from "hamburger-react";
import { useState, useEffect } from "react";
import { LinkNavigation } from "../LinkNavigation";
import { motion } from "framer-motion";

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
        <motion.img
          src="/logo.svg"
          alt="Logo"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ position: "relative" }}
        />

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
          {/* <LinkNavigation
            to="/contact"
            variant="InternalNoBoardGrey1"
            onClick={closeMenu}
          >
            <span>#</span>Contato
          </LinkNavigation> */}
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
