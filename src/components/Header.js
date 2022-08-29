import { Box, Link, Text } from "@chakra-ui/react";

const Header = () => {
  const handleScroll = (id) => {
    const element = document.querySelector(id);
    element.offsetParent.scrollTo({
      top: element.offsetTop - 50,
      behavior: "smooth",
    });
  };
  return (
    <Box sx={{ display: "flex", mb: "14rem", justifyContent: "space-between" }}>
      <Box>
        <Link href="/Susanna _Cho.pdf" isExternal>
          Curriculum Vitae
        </Link>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
      >
        <Text onClick={() => handleScroll("#about")}>about</Text>
        <Text onClick={() => handleScroll("#projects")}>projects</Text>
        <Text onClick={() => handleScroll("#contact")}>contact</Text>
      </Box>
    </Box>
  );
};

export default Header;
