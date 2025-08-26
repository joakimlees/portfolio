import styled from "styled-components";

export const Projects = styled.section`
  margin-top: 200px;

  h2 {
    font-family: ${({ theme }) => theme.font.family.heading};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    font-size: ${({ theme }) => theme.font.size.medium};
    color: ${({ theme }) => theme.color.secondaryGray};
    border-bottom: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.color.primaryDark};
    padding-bottom: 2px;
  }

  .projects__container {
    display: flex;
    gap: 30px;

    .project__card {
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

          .project__card__pill {
            font-size: ${({ theme }) => theme.font.size.xxSmall};
            display: flex;
            align-items: center;
            gap: 5px;
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            padding: 5px 20px 5px 5px;
          }
        }
      }
    }
  }
`;
