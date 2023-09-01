import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

//helpers
* {
    box-sizing: border-box;
}
        body {
            /* background-color: var(--body-color); */
            background-color: ${(props) => props.theme.colors.bgColor};
            color: var(--text-color);
            margin: 0;
            padding: 0;
           
        }

        .clear-fix {
            clear: both;
        }

        .mt-10 {
            margin-top: 10px;
        }
    `