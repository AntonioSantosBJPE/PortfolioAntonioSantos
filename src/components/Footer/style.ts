import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1024px;
  height: 225px;

  margin: 0 auto;
  border-top: 1px solid var(--color-primary);
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  div:nth-child(1) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 425px) {
      align-items: baseline;
    }

    div:nth-child(1) {
      width: 100%;

      display: flex;
      flex-direction: column;

      img {
        width: 150px;
        height: 35px;
      }
      h4 {
        height: 35px;

        font-weight: 400;
        font-size: 16px;
        line-height: 21px;

        color: var(--color-gray-0);
      }
    }
    div:nth-child(2) {
      width: 120px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;

      h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;

        text-align: center;
        color: var(--color-gray-0);
      }

      div:nth-child(2) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }

    @media (min-width: 425px) {
      flex-direction: row;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: var(--color-gray-1);
  }
`;
