// import { createGlobalStyle } from 'styled-components';

// export default createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     outline: 0
//   }

//   body {
//     background: #FFFFFF;
//     /* color: #FFF; */
//     -webkit-font-smoothing: antialiased;
//     font-family: 'Roboto', serif;
//   }
  
//   border-style, input, button {
//     /* font-family: 'Roboto', serif; */
//     font-size: 16px;
//     font-weight: normal;
//   }
  
//   h1, h1, h3, h4, h5, h6 {
//     font-weight: 500;
//   }
  
//   button {
//     cursor: pointer;
//   }
// `;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  html, body, #root {
    margin: 0 auto;
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;