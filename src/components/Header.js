import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box sx={{ display: "flex" }}>
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
