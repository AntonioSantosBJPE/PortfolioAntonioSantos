import styled from "styled-components";

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
