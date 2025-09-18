import styled from "styled-components";

export const LinkButton = styled.a<{
  $bgColor?: string;
  $textColor?: string;
  $borderColor?: string;
}>`
  background-color: ${({ $bgColor, theme }) =>
    $bgColor || theme.color.primaryDark};
  color: ${({ $textColor, theme }) => $textColor || theme.color.primaryLight};
  border-color: ${({ $borderColor, theme }) =>
    $borderColor || theme.color.primaryDark};

  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  font-family: ${({ theme }) => theme.font.family.button};
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  text-decoration: none;
  padding: 12px 37px;

  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 6px 12px ${({ theme }) => theme.color.darkHover};
    opacity: 95%;
  }
`;
