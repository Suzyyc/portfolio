import { Box, Link, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box sx={{ display: "flex", mb: "14rem" }}>
      <Link
        href="/Users/susannacho/Desktop/Suzy/portfolio/public/Susanna _Cho.pdf"
        isExternal
      >
        Curriculum Vitae
      </Link>
      <Text>Curriculum Vitae</Text>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Text>about</Text>
        <Text>projects</Text>
        <Text>contact</Text>
      </Box>
    </Box>
  );
};

export default Header;
