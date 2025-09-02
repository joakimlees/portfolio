import styled from "styled-components";

export const ProjectCard = styled.a`
  display: flex;
  padding: 15px;
  gap: 20px;
  width: 800px;
  border: solid;

  .project__card__image {
    width: 300px;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
    border-style: solid;
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
