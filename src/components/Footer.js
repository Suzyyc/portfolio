import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <Text>Dog lover to my adorable fluff ball ‘Moon Cake’!</Text>
      <Text>In my past life, I was also a skincare lover. 💅🏼🧖🏻‍♀️</Text>

      <Text>
        <b>Contact</b>
      </Text>
      <Text>
        <b>Address</b> Melbourne, VIC
      </Text>

      <Link href="https://www.linkedin.com/in/s-cho/" isExternal>
        <u>Linkedin </u>
      </Link>
    </Box>
  );
};

export default Footer;
