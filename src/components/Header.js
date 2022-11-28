import { Box, Button, Text, useMediaQuery } from "@chakra-ui/react";
import { mobileMedia } from "../utlis/media";
import theme from "../theme";

const Header = () => {
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (isMobile) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    } else {
      element.offsetParent.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        bgColor: "white",
        width: "50%",
        zIndex: 1,
        fontSize: "18px",
        py: 2.5,
        px: 3,
        alignItems: "center",
        borderBottom: "1px solid #f5f5f5",
        [mobileMedia]: { width: "100%" },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button
          as={"a"}
          href="/Susanna_Cho.pdf"
          variant={"outline"}
          size={"sm"}
          target="_blank"
        >
          Resume
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Text onClick={() => handleScroll("#about")} sx={{ mr: "1rem" }}>
          about
        </Text>
        <Text onClick={() => handleScroll("#projects")} sx={{ mr: "1rem" }}>
          projects
        </Text>
        <Text onClick={() => handleScroll("#experience")} sx={{ mr: "1rem" }}>
          experience
        </Text>
        <Text onClick={() => handleScroll("#contact")}>contact</Text>
      </Box>
    </Box>
  );
};

export default Header;
