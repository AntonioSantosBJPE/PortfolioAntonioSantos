import styled from "styled-components";
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

    a {
      width: 200px;
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
