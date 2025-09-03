import styled from "styled-components";

export const ProjectCard = styled.a`
  display: flex;
  padding: 15px;
  gap: 20px;
  width: 800px;
  border-width: 1px;
  text-decoration: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.primaryDark};
  box-shadow: 0 4px 6px ${({ theme }) => theme.color.primaryDark};

  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 6px 10px ${({ theme }) => theme.color.primaryTeal};
    transform: translateY(-2px);
  }

  .project__card__image {
    width: 300px;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.secondaryGray};
    border-width: 1px;

    img {
      display: block;
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;
    }
  }

  .project__card__content {
    h3 {
      font-family: ${({ theme }) => theme.font.family.heading};
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      color: ${({ theme }) => theme.color.secondaryGray};
    }

    .project__card__text {
      margin: 25px 0px;
    }

    .project__card__pills {
      display: flex;
      gap: 10px;
    }
  }
`;
