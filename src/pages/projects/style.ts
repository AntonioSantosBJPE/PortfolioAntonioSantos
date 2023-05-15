import styled from "styled-components";

export const StyledContainerProjects = styled.main`
  width: 100%;
  max-width: 1024px;
  height: fit-content;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const StyledPageProjects = styled.section`
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
  }

  div:nth-child(2) {
    ul {
      width: 100%;
      display: flex;

      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 25px;

      margin-top: 40px;

      & > li {
        min-width: 280px;
        max-width: 280px;
      }

      @media (min-width: 768px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        & > li {
          min-width: 300px;
          max-width: 300px;
        }
      }
    }
  }
`;
