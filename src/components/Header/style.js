import styled from "styled-components";

export const StyledMenu = styled.header`
  width: 100%;
  max-width: 1024px;
  height: 10vh;
  max-height: 60px;

  margin: 0 auto;
  /* border: 1px solid white; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  img {
    padding-left: 16px;
    width: 200px;
    height: 35px;
  }

  div:nth-child(3) {
    margin-right: 6px;
    z-index: 300;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 90vh;
    background-color: var(--color-gray-2);

    position: absolute;
    top: 60px;
    z-index: 200;
    /* border: 1px solid white; */
    padding: 80px 16px;
    a {
      font-weight: 500;
      font-size: 32px;
      line-height: 42px;
      color: var(--color-gray-1);
      transition: all 1s ease-in-out;
      &:hover {
        color: var(--color-gray-0);
      }
      span {
        color: var(--color-primary);
      }
    }

    transition: all 0.8s ease-in-out;

    transform: ${({ isOpen }) => {
      if (isOpen) {
        return "translateY(0)";
      } else {
        return "translateY(-1000px)";
      }
    }};
  }

  @media (min-width: 768px) {
    gap: 100px;
    div:nth-child(3) {
      display: none;
    }
    nav {
      position: unset;
      transform: translateY(0);

      flex-direction: row;
      justify-content: flex-end;
      gap: 50px;

      height: 100%;
      padding: 0 16px;

      a {
        font-size: 18px;
      }
    }
  }
`;

export const StyledContainerOutlat = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 60px;
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 20px;
  /* border: 1px solid white; */
`;
