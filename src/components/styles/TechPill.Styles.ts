import styled from "styled-components";

export const TechPill = styled.div`
  font-size: ${({ theme }) => theme.font.size.xxSmall};
  display: flex;
  align-items: center;
  gap: 5px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  padding: 5px 20px 5px 5px;
`;
