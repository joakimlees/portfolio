import styled from "styled-components";

export const ProjectCard = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  gap: 20px;
  width: 800px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primaryDark};
  border: 1px solid ${({ theme }) => theme.color.primaryDark};
  border-radius: 5px;

  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 6px 12px ${({ theme }) => theme.color.accentPink};

    .project__card__content h3 span {
      transform: translate(3px, -6px);
    }
  }

  .project__card__image {
    order: 2;
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

    span {
      margin-left: 10px;
      display: inline-block;
      transition: transform 0.2s ease;
    }

    .project__card__text {
      margin: 25px 0px;
    }

    .project__card__pills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  }
`;
