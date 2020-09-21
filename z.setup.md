Prerequisites:

- [x] `node -v `
- [x] `npm -v `
- [x] `yarn add gatsby-cli`

dependencies:

- [x] gatsby
- [x] gatsby-image
- [x] gatsby-background-image -- custom implementation
- [x] gatsby-plugin-manifest
- [x] gatsby-plugin-offline
- [x] gatsby-plugin-web-font-loader
- [x] gatsby-plugin-react-helmet
- [x] react-helmet
- [x] gatsby-plugin-sharp
- [x] gatsby-transformer-sharp
- [ ] gatsby-plugin-typescript -- automatically included -- not needed unless `.tsconfig` needs changes
- [x] gatsby-source-filesystem
- [x] prop-types
- [ ] gatsby-source-strapi
- [x] gatsby-plugin-sass
- [x] node-sass
- [x] focus-visible
- [x] gatsby-plugin-chakra-ui
- [x] chakra-ui
- [x] emotion
- [x] emotion-theming
- [x] emotion/styled
- [x] Framer-motion
- [x] popmotion/popcorn
- [x] react-cool-inview - opted for {viewportspy} from beautiful-react-hooks
- [x] gh-pages
- [ ] gatsby-plugin-crisp-chat
- [ ] gatsby-plugin-google-analytics
- [x] beautiful-react-hooks

1. Install Gatsby Starter:

   ```shell
   gatsby new site https://github.com/gatsbyjs/gatsby-starter-default
   ```

2. Install node-sass: https://www.gatsbyjs.com/docs/sass/

   ```shell
   npm install --save node-sass gatsby-plugin-sass
   ```

   ```js
   //gatsby-config.js

   plugins: [{
         resolve: `gatsby-plugin-sass`,
         options: {
           precision: 6,
         },
       }],
   ```

   sass-scaffold:

   ```shell
   src
   └── styles
       ├── base.scss
       ├── global
       │   ├── _variables.scss
       │   └── mixins.scss
       ├── main.scss
       ├── pages
       │   └── index.scss
       └── theme.scss
   ```

   import main style sheet into index (or layout):

   ```js
   // index.js

   import "../styles/main.scss"
   ```

   ❗️Remember to test the implementation ❗️

3. Install Chakra-UI [gatsby setup](https://www.gatsbyjs.com/plugins/gatsby-plugin-chakra-ui/) [chakra getting started](https://chakra-ui.com/getting-started)

   ```shell
   yarn add gatsby-plugin-chakra-ui @chakra-ui/core @emotion/core @emotion/styled emotion-theming
   ```

   ```js
   //gatsby-config.js

   plugins: [
     {
       resolve: "gatsby-plugin-chakra-ui",
       options: {
         isResettingCSS: true,
         isUsingColorMode: false,
       },
     },
   ]
   ```

   ```shell
   src
   └── gatsby-plugin-chakra-ui
    		│ ├── index.js
    		│ └── theme.js  *contains all theme related settings
    		│ └── layouts
   			 		│ └── index.js
    					│ └── default.js
    					│ └── global.js
   ```

4. Add `.js-focus-visible` polyfill to remove focus borders on all chakra elements:

   [medium article](https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9)

   ```shell
   yarn add focus-visible
   ```

   ```js
   // src/gatsby-plugin-chakra-ui/layouts/global

   import "focus-visible/dist/focus-visible"
   // *adds import statement high-up in the root of application tree.
   ```

   - use emotion to create a css class that handles the `.focus-visible` handling:

   ```css
   import { Global, css } from '@emotion/core'
   const GlobalStyles = css`
     /*
       This will hide the focus indicator if the element receives focus    via the mouse,
       but it will still show up on keyboard focus.
     */
     .js-focus-visible :focus:not([data-focus-visible-added]) {
        outline: none;
        box-shadow: none;
      }
   `;

   ```

5. Add google font support

   ```shell
   yarn add gatsby-plugin-web-font-loader
   ```

   ```js
   // gatsby-config.js

   plugins: [
     {
       resolve: `gatsby-plugin-web-font-loader`,
       options: {
         google: {
           // families: ["Encode+Sans:400,500,600,700"],
           families: ['"Encode+Sans":300,700'],
         },
       },
     },
   ]
   ```

   - add to chakra theme:

   ```js
   // theme.js

   fonts: {
       ...baseTheme.fonts,
       body: `"Encode Sans", sans-serif`,
     },
   ```

   - if there are issues, wrap application content and set font-family directly in parent:

   ```jsx
   // index.js

   <DefaultLayout>
     <Box fontFamily="body">{children}</Box>
   </DefaultLayout>
   ```

6. Install framer-motion

   ```shell
   yarn add framer-motion
   ```

7. Install popmotion

   ```shell
   yarn add @popmotion/popcorn
   ```

- Install Git Hub Pages

  ```shell
  yarn add gh-pages
  ```

  ```js
  // gatsby-config.js

  module.exports = {
    pathPrefix: "/my_project",
  }

  // package.json

  scripts: {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public",
  }
  ```

  ```shell
  yarn deploy
  ```

included hooks:

- [ ] use-body-scrolllock
- [ ] use-input-autofill
- [ ] use-site-metadata
- [ ] use-window-scroll

included utils:

- [ ] shortId
- [ ] isBoolean
- [ ] makeArray
- [ ] isExternal
- [ ] doesInclude
- [ ] formatNumber
- [ ] randomNumGenerator
- [ ] randomConditional
- [ ] isSSR
