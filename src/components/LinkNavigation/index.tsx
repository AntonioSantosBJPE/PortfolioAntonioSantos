import { ReactNode } from "react";
import { StyledLinkExternal, StyledLinkInternal } from "./style";

interface iLinkNavigation {
  to: string;
  name?: string;
  variant:
    | "ExternalPrimary"
    | "ExternalGray1"
    | "ExternalIcon"
    | "ExternalPrimaryDownload"
    | "InternalPrimary"
    | "InternalNoBoardGrey0"
    | "InternalNoBoardGrey1";
  target?: any;
  children?: ReactNode;
  onClick?: any;
}

export const LinkNavigation = ({
  variant,
  name,
  to,
  target,
  children,
  onClick,
}: iLinkNavigation) => {
  switch (variant) {
    case "ExternalPrimary":
      return (
        <StyledLinkExternal href={to} variant={variant} target={target}>
          {name}
        </StyledLinkExternal>
      );
      break;

    case "ExternalGray1":
      return (
        <StyledLinkExternal href={to} variant={variant} target={target}>
          {name}
        </StyledLinkExternal>
      );
      break;

    case "ExternalIcon":
      return (
        <StyledLinkExternal href={to} variant={variant} target={target}>
          {children}
        </StyledLinkExternal>
      );
      break;

    case "ExternalPrimaryDownload":
      return (
        <StyledLinkExternal
          href={to}
          variant={variant}
          target={target}
          rel="noreferrer"
          download="curriculo.pdf"
        >
          {name}
        </StyledLinkExternal>
      );
      break;

    case "InternalPrimary":
      return (
        <StyledLinkInternal to={to} variant={variant}>
          {name}
        </StyledLinkInternal>
      );
      break;

    case "InternalNoBoardGrey0":
      return (
        <StyledLinkInternal to={to} variant={variant}>
          {name}
        </StyledLinkInternal>
      );
      break;

    case "InternalNoBoardGrey1":
      return (
        <StyledLinkInternal to={to} variant={variant} onClick={onClick}>
          {children}
        </StyledLinkInternal>
      );
      break;
  }
};
