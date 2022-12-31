import { StyledLinkExternal, StyledLinkInternal } from "./style";

export const LinkNavigation = ({
  variant,
  name,
  to,
  target,
  children,
  onClick,
}) => {
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
