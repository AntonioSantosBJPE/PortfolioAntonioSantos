import styled from "styled-components";

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
