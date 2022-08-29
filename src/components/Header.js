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
    <Box
      sx={{
        display: "flex",
        mb: "14rem",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Link href="/Susanna _Cho.pdf" isExternal>
          Curriculum Vitae
        </Link>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Text onClick={() => handleScroll("#about")} sx={{ mr: "1rem" }}>
          about
        </Text>
        <Text onClick={() => handleScroll("#projects")} sx={{ mr: "1rem" }}>
          projects
        </Text>
        <Text onClick={() => handleScroll("#contact")}>contact</Text>
      </Box>
    </Box>
  );
};

export default Header;
