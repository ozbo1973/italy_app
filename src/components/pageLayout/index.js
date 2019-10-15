import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PageLayoutDesk from "./pageLayoutDesk";
import PageLayoutMobile from "./pageLayoutMobile";

const PageLayout = ({ page, imgSrc }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return matches ? (
    <PageLayoutMobile page={page} imgSrc={imgSrc} />
  ) : (
    <PageLayoutDesk page={page} imgSrc={imgSrc} />
  );
};

export default PageLayout;
