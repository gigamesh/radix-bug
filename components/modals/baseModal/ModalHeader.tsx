import { styled } from '@stitches-config';

export const ModalHeader = ({
  title,
  goBack,
}: {
  title: string;
  goBack?: () => void;
}) => {
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  );
};

const Header = styled("div", {
  h1: {
    fontSize: "1rem",
    "@laptop": {
      fontSize: "1.125rem",
    },
  },
  position: "relative",
  textAlign: "center",
  padding: "1.5rem 0",
  fontSize: "1rem",
  fontWeight: "bold",
  fontFamily: "Druk Wide Cy",
  borderBottom: "1px solid #E5E6EB",
});
