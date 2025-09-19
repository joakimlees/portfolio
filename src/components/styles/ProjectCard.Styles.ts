import styled from "styled-components";

export const ProjectCard = styled.a`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  gap: 20px;
  width: 800px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primaryDark};
  border: 1px solid ${({ theme }) => theme.color.primaryDark};
  border-radius: 5px;

  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 6px 12px ${({ theme }) => theme.color.darkHover};

    .project__card__content h3 {
      color: ${({ theme }) => theme.color.accentPink};

      span {
        transform: translate(3px, -6px);
      }
    }
  }

  .project__card__image {
    order: 2;
    width: 100%;
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

  @media (min-width: ${({ theme }) => theme.screen.small}) {
    flex-wrap: nowrap;

    .project__card__image {
      order: 2;
      width: 100%;

      img {
        object-position: 50% 50%;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.screen.medium}) {
    .project__card__image {
      order: 2;
      height: 100%;
      width: 350px;

      img {
        object-position: 50% 50%;
      }
    }
  }
`;
