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

export const StyledABout = styled.section`
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

    @media (min-width: 768px) {
      flex-direction: row;
      figure {
        display: block;
      }

      div:nth-child(1) {
        width: 55%;
        max-width: 590px;
      }
    }
  }
`;

export const StyledContact = styled.section`
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
    display: flex;
    flex-direction: column;
    gap: 20px;

    div:nth-child(1) {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 20px;
      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;

        color: var(--color-gray-1);
      }
    }

    div:nth-child(2) {
      width: 100%;
      height: fit-content;

      display: flex;
      align-items: center;

      div:nth-child(1) {
        width: 240px;
        height: 140px;

        display: flex;
        flex-direction: column;
        gap: 15px;

        border: 1px solid var(--color-gray-1);
        padding: 10px;

        h4 {
          font-weight: 600;
          font-size: 16px;
          line-height: 21px;

          color: var(--color-gray-0);
        }

        span {
          width: 100%;
          height: 35px;

          display: flex;
          align-items: center;
          gap: 10px;

          background-color: transparent;

          h5 {
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;

            color: var(--color-gray-1);
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    div:nth-child(2) {
      flex-direction: row;

      div:nth-child(1) {
        width: 50%;
      }
      div:nth-child(2) {
        width: 50%;
        justify-content: flex-end;
        div:nth-child(1) {
        }
      }
    }
  }
`;
