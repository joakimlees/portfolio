import styled from "styled-components";

export const ProjectCard = styled.a`
  display: flex;
  padding: 15px;
  gap: 20px;
  width: 800px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primaryDark};

  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 3px 6px ${({ theme }) => theme.color.primaryDark};
    transform: translateX(100px);
    border-bottom: none;
    border-radius: 5px;
  }

  .project__card__image {
    width: 300px;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.secondaryGray};

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
