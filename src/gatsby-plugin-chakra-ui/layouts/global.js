import React from "react"
import { Global as EmotionGlobal, css } from "@emotion/core"
import "focus-visible/dist/focus-visible"

export const Global = () => {
  return (
    <EmotionGlobal
      styles={css`
        /*
        This will hide the focus indicator if the element receives focus via the mouse,
        but it will still show up on keyboard focus.
        https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9
      */
        .js-focus-visible :focus:not([data-focus-visible-added]) {
          outline: none;
          box-shadow: none;
        }
        * {
          border: 0;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          & :before {
            box-sizing: border-box;
          }
        }

        input:focus {
          border: inherit;
        }
        input:focus:invalid {
          background: rgba(255, 224, 224, 1);
        }
        input:valid,
        input:focus:valid {
          background: rgba(226, 250, 219, 1);
        }
        a:active,
        a:focus,
        a:visited {
          outline: 0;
          border: none;
          outline-style: none;
          -moz-outline-style: none;
          text-decoration: none;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0) !important;
          -moz-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0) !important;
          -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0) !important;
        }
        a:hover {
          text-decoration: none;
        }
        a[aria-current="page"].nav-link {
          color: #1a5eef;
          background: #d9e4fd;
          border-radius: 5px;
          pointer-events: none;
        }
        a {
          color: inherit;
        }
        html,
        body {
          font-size: 16px;
          max-width: 100vw;
          height: 100%;
          box-sizing: border-box;
          scroll-behavior: smooth;
          font-family: "Encode Sans", sans-serif;
        }
        body {
          margin: 0;
          padding: 0;
          line-height: 1.35em;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-overflow-scrolling: touch;
          max-width: 100%;
          height: 100%;
        }
        #content-wrapper {
          display: flex;
          flex-direction: column;
          max-width: 100%;
          overflow-x: hidden;
          z-index: 0;
        }
        header,
        footer {
          position: fixed;
          width: 100%;
          z-index: 1500;
        }
        header {
          top: 0;
        }
        main {
          flex: 1 0 auto;
          overflow: auto;
          max-width: 100%;
        }
        footer {
          bottom: 0;
        }
      `}
    />
  )
}
