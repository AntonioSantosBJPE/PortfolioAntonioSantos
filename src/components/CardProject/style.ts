import styled from "styled-components";

export const StyleCard = styled.li`
  width: 100%;
  min-width: 240px;
  max-width: 280px;
  height: fit-content;

  border: 1px solid var(--color-gray-1);

  display: flex;
  flex-direction: column;

  @media (min-width: 350px) {
    width: 100%;
    min-width: 280px;
    max-width: 330px;
  }

  &:hover {
    border: 1px solid var(--color-primary);

    div:nth-child(2) {
      border-top: 1px solid var(--color-primary);
      border-bottom: 1px solid var(--color-primary);
    }

    div:nth-child(3) {
      h4 {
        text-decoration: underline;
        text-decoration-color: var(--color-primary);
      }
    }
  }

  figure {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  div:nth-child(2) {
    width: 100%;
    min-height: 40px;
    padding: 8px;

    border-top: 1px solid var(--color-gray-1);
    border-bottom: 1px solid var(--color-gray-1);

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;

      color: var(--color-gray-1);
    }
  }

  div:nth-child(3) {
    width: 100%;
    height: fit-content;

    padding: 15px;

    display: flex;
    flex-direction: column;
    gap: 15px;
    h4 {
      font-weight: 500;
      font-size: 24px;
      line-height: 31px;

      color: var(--color-gray-0);
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;

      color: var(--color-gray-1);
    }
  }

  div:nth-child(4) {
    width: 100%;
    height: fit-content;

    padding: 0 15px 15px 15px;

    display: flex;
    gap: 15px;
  }
`;
