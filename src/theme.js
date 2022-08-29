import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Link: { baseStyle: { color: "black" } },
  },
  fonts: {
    heading: `'Bubbler One', sans-serif;`,
    body: `'Nunito', sans-serif;`,
  },
});

export default theme;
