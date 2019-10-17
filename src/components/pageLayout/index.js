import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PageLayoutDesk from "./pageLayoutDesk";
import PageLayoutMobile from "./pageLayoutMobile";
import Container from "@material-ui/core/Container";

const PageLayout = ({ page, imgSrc }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return matches ? (
    <PageLayoutMobile page={page} imgSrc={imgSrc} />
  ) : (
    <Container>
      <PageLayoutDesk page={page} imgSrc={imgSrc} />
    </Container>
  );
};

export default PageLayout;
