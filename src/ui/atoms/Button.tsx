"use client";

import styled, { css } from "styled-components";
import { AppLink, type AppLinkProps } from "./AppLink";
import { Icon } from "./Icon";
import type { IconName } from "@/models/content.model";

export type ButtonVariant = "primary" | "light" | "outline" | "outlineLight";
export type ButtonSize = "small" | "medium" | "large" | "header";

interface ButtonProps extends AppLinkProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  iconEnd?: IconName;
}

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    &:hover { background: ${({ theme }) => theme.colors.accentHover}; color: ${({ theme }) => theme.colors.white}; }
  `,
  light: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.titles};
    &:hover { background: ${({ theme }) => theme.colors.white}; color: ${({ theme }) => theme.colors.titles}; }
  `,
  outline: css`
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: transparent;
    &:hover { background: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.white}; }
  `,
  outlineLight: css`
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
    background: transparent;
    &:hover { background: ${({ theme }) => theme.colors.white}; color: ${({ theme }) => theme.colors.titles}; }
  `,
};

const sizes = {
  small: css`padding: .55rem 1.1rem; font-size: .88rem;`,
  medium: css``,
  large: css`padding: 1rem 1.6rem; font-size: 1.05rem;`,
  header: css`padding: .6rem 1.1rem; font-size: .92rem;`,
};

const StyledButton = styled(AppLink)<{ $variant: ButtonVariant; $size: ButtonSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .55rem;
  font: 600 .98rem ${({ theme }) => theme.fonts.titles};
  text-decoration: none;
  padding: .85rem 1.5rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 2px solid transparent;
  cursor: pointer;
  text-align: center;

  svg { width: 20px; height: 20px; flex: none; }

  ${({ $variant }) => variants[$variant]}
  ${({ $size }) => sizes[$size]}
`;

export const Button = ({ variant = "primary", size = "medium", icon, iconEnd, children, ...props }: ButtonProps) => (
  <StyledButton $variant={variant} $size={size} {...props}>
    {icon && <Icon name={icon} />}
    {children}
    {iconEnd && <Icon name={iconEnd} />}
  </StyledButton>
);

export default Button;
