import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLinkExternal = styled.a`
  height: 40px;
  padding: 8px 16px;

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  ${({ variant }) => {
    if (variant === "ExternalPrimary") {
      return `
            border: 1px solid var(--color-primary);
            color: var(--color-gray-0);

            &:hover {
                background-color: var(--color-primary-hover);
            }
          
          `;
    }

    if (variant === "ExternalGray1") {
      return `
            border: 1px solid var(--color-gray-1);
            color: var(--color-gray-1);

            &:hover {
                background-color: var(--color-gray-1-hover);
            }
          
          `;
    }

    if (variant === "ExternalIcon") {
      return `
            border: none;
            height: 40px;
            width: 40px;
            padding: 0;
            img,i{
              height: 100%;
              width: 100%;
            }
          `;
    }
  }}
`;

export const StyledLinkInternal = styled(Link)`
  height: 40px;
  padding: 8px 16px;

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  ${({ variant }) => {
    if (variant === "InternalPrimary") {
      return `
            border: 1px solid var(--color-primary);
            color: var(--color-gray-0);

            &:hover {
                background-color: var(--color-primary-hover);
            }
          
          `;
    }

    if (variant === "InternalNoBoardGrey0") {
      return `
            height: 21px;
            padding: 0;
            color: var(--color-gray-0);
        
            &:hover {
                color: var(--color-gray-1);
            }
          
          `;
    }

    if (variant === "InternalNoBoardGrey1") {
      return `
            height: 42px;
            padding: 0;
            font-weight: 500;
            font-size: 32px;
            line-height: 42px;
            color: var(--color-gray-1);
            transition: all 1s ease-in-out;
            &:hover {
                color: var(--color-gray-0);
            }
            span {
                color: var(--color-primary);
            }
          
          `;
    }
  }}
`;
