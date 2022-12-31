import styled from "styled-components";

export const StyledContainerHome = styled.main`
  width: 100%;
  max-width: 1024px;
  height: fit-content;

  margin: 0 auto;

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

  div:nth-child(2) {
    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 25px;

      overflow-x: auto;

      margin-top: 40px;
    }
  }
`;

export const StyledSkills = styled.section`
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
      width: 60%;
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

    figure {
      display: none;
      width: 40%;
      max-width: 350px;
      height: 280px;
      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
    ul {
      width: 100%;
      max-width: 590px;
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

      li {
        min-width: 170px;
        max-width: 200px;
        height: fit-content;

        border: 1px solid var(--color-gray-1);

        div:nth-child(1) {
          width: 100%;
          height: 35px;

          border-bottom: 1px solid var(--color-gray-1);
          padding: 8px;

          h3 {
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;

            color: var(--color-gray-0);
          }
        }
        div:nth-child(2) {
          width: 100%;
          height: fit-content;

          padding: 8px;
          h4 {
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;

            color: var(--color-gray-1);
          }
        }
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
      figure {
        display: block;
      }

      ul {
        width: 55%;
        max-width: 590px;

        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-end;

        li:nth-child(1) {
          margin-left: 0;
        }
        li:nth-child(2) {
          margin-right: 0;
        }
        li:nth-child(3) {
          margin-left: 0;
        }
        li:nth-child(4) {
          margin-right: 0;
        }
      }
    }
  }
`;
