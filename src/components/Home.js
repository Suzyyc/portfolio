import { Heading, Text, Box, Link } from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";
import { mobileMedia } from "../utlis/media";

const Home = () => {
  return (
    <Box sx={{ mb: "4rem" }}>
      <Heading sx={{ fontSize: "60px", [mobileMedia]: { fontSize: "40px" } }}>
        Susanna Cho
      </Heading>
      <Text sx={{ fontSize: "30px" }}>Software & Data Engineer</Text>
      <Box sx={{ mt: "8rem" }} id="contact">
        <Text>
          <b>Address</b> Melbourne, VIC
        </Text>

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
      <Box sx={{ display: "flex", alignItems: "center", mt: "6rem" }}>
        <Text>To find out more about me and see my projects</Text>
        <BsArrowDown />{" "}
      </Box>
    </Box>
  );
};
export default Home;
