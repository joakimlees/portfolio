import * as Styled from "./styles/index";

type LinkButtonProps = {
  text: string;
  href: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export const LinkButton = ({
  text,
  href,
  bgColor,
  textColor,
  borderColor,
  onClick,
  target = "_blank",
  rel = "noopener noreferrer",
}: LinkButtonProps) => {
  return (
    <Styled.LinkButton
      href={href}
      $bgColor={bgColor}
      $textColor={textColor}
      $borderColor={borderColor}
      onClick={onClick}
      target={target}
      rel={rel}
    >
      {text}
    </Styled.LinkButton>
  );
};
