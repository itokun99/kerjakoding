import { injectGlobal } from "@emotion/css";

export function setupStyle() {
  injectGlobal`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

body {
  font-family: 'Fira Sans', sans-serif;
}

`;
}
