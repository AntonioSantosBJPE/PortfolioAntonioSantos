import styled from "styled-components";

export const StyledContainerAbout = styled.main`
  width: 100%;
  max-width: 1024px;
  height: fit-content;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const StyledAboutInfos = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 20px;

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
  }

  div:nth-child(2) {
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;

    div:nth-child(1) {
      width: 100%;
      max-width: 590px;
      height: fit-content;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      p {
        width: 100%;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;

        color: var(--color-gray-1);
      }
    }
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
        z-index: 100;
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

    @media (min-width: 768px) {
      flex-direction: row;

      figure {
        width: 40%;
      }
      div:nth-child(1) {
        width: 55%;
        max-width: 590px;
      }
    }
  }
`;

export const StyledAboutSkills = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 20px;

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
      width: 50%;
      height: 1px;
      background-color: var(--color-primary);

      @media (min-width: 500px) {
        display: block;
      }
    }
  }

  div:nth-child(2) {
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;

    ul {
      width: 100%;
      height: fit-content;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 15px;

      li:nth-child(1) {
        margin-left: 50px;
      }
      li:nth-child(2) {
        margin-right: 50px;
      }
      li:nth-child(3) {
        margin-left: 50px;
      }
      li:nth-child(4) {
        margin-right: 50px;
      }
    }

    @media (min-width: 850px) {
      flex-direction: row;

      ul {
        width: 100%;

        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;

        li:nth-child(1) {
          margin-left: 0;
          margin-top: 20px;
        }
        li:nth-child(2) {
          margin-right: 0;
          margin-top: 50px;
        }
        li:nth-child(3) {
          margin-left: 0;
          margin-top: 0;
        }
        li:nth-child(4) {
          margin-right: 0;
          margin-top: 60px;
        }
      }
    }
  }
`;
