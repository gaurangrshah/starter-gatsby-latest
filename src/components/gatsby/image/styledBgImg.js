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
  }
`

// export const BGIMG = ({ height, children, ...rest }) => (
//   <Img
//     position="absolute"
//     top={0}
//     left={0}
//     width={"100%"}
//     height={"100%"}
//     zIndex={-1}
//     as={Image}
//     children={children}
//     // FIX: 🚧 unable to get the css to select the child image element:
//     styles={css`
//       img: {
//         object-fit: cover !important;
//         object-position: 0% 0% !important;
//         font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
//         border: "5px solid red";
//       }
//     `}
//     {...rest}
//   />
// )
