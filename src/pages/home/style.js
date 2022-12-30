import styled from "styled-components";

export const StyledContainerHome = styled.main`
  width: 100%;
  max-width: 1024px;
  height: fit-content;

  margin: 0 auto;
  /* border: 1px solid white; */

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const StyledInitialInfos = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  div:nth-child(1) {
    width: 100%;
    max-width: 450px;

    display: flex;
    flex-direction: column;
    gap: 25px;

    h1 {
      font-weight: 600;
      font-size: 32px;
      line-height: 42px;

      color: var(--color-gray-0);

      span {
        color: var(--color-primary);
      }
    }
    h3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;

      color: var(--color-gray-1);
    }
  }

  div:nth-child(2) {
    width: 100%;
    max-width: 450px;

    figure {
      width: 100%;
      height: 300px;

      position: relative;

      img:nth-child(1) {
        width: 100%;
        height: 100%;
        object-fit: contain;

        position: absolute;
        bottom: 0;
        z-index: 1000;
      }

      img:nth-child(2) {
        width: 30%;
        height: 30%;
        object-fit: contain;

        position: absolute;
        top: 10%;
        left: 7%;
      }

      img:nth-child(3) {
        width: 25%;
        height: 25%;
        object-fit: contain;

        position: absolute;
        bottom: 20%;
        right: 0%;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    div:nth-child(1) {
    }
    div:nth-child(2) {
    }
  }
`;

export const StyledProjects = styled.section`
  width: 100%;
  height: fit-content;

  /* border: 1px solid blue; */

  display: flex;
  flex-direction: column;

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 500;
      font-size: 32px;
      line-height: 42px;

      color: var(--color-gray-0);
      span {
        color: var(--color-primary);
      }
    }

    span:nth-child(2) {
      display: none;
      width: 40%;
      height: 1px;
      background-color: var(--color-primary);

      @media (min-width: 600px) {
        display: block;
      }
    }

    a {
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;

      color: var(--color-gray-0);
    }
  }
`;
