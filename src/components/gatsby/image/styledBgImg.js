import styled from "@emotion/styled"
import Img from "gatsby-image"

export const BgImage = styled(Img)`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 100vw;
  width: 100%;
  height: ${({ height }) => (height ? height : "")};
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
    border: 4px solid red;
    overflow-x: hidden;
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
    padding-bottom: 3rem; /* adds padding to help maintain aspect ratio and height */
    & > img {
      object-fit: contain !important;
    }
  }
`
