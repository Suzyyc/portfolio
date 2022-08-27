import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Link: { baseStyle: { color: "blue.300" } },
  },
  fonts: {
    heading: `'Bubbler One', sans-serif;`,
    body: `'Nunito', sans-serif;`,
  },
});

export default theme;
