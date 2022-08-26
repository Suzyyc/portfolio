import { Heading, Text, Box, Link } from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";

const Home = () => {
  return (
    <Box>
      <Heading>Susanna Cho</Heading>
      <Text>Software Engineer</Text>
      <Text>
        <b>Address</b> Melbourne, VIC
      </Text>
      <Box>
        <Link href="https://www.linkedin.com/in/s-cho/" isExternal>
          <u>Linkedin </u>
        </Link>

        <Link href="https://github.com/Suzyyc" isExternal>
          • <u> GitHub </u>•
        </Link>
        <Link
          href="https://www.quora.com/profile/Susanna-Cho
"
          isExternal
        >
          <u> Quora</u>
        </Link>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Text>To find out more about me and see my projects</Text>
        <BsArrowDown />{" "}
      </Box>
    </Box>
  );
};
export default Home;
