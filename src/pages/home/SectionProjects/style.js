import styled from "styled-components";

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
