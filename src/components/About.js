import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box sx={{ mt: "15rem" }} id="about">
      <Heading sx={{ mb: "1rem" }}>ABOUT</Heading>
      <Text sx={{ mb: "0.5rem" }}>Hey there! I’m Susanna</Text>
      <Text>
        I‘m an Admin coordinator turned Software Engineer. With a love of
        learning and wanting to do something more creative and different. I've
        started my career into tech.
      </Text>
      <Text>
        When I’m not coding, you will find me hiking, watching tv shows or
        cooking up a storm in the kitchen. P.S the kitchen has never caught on
        🔥
      </Text>
      <Text sx={{ mt: "0.5rem" }}>
        Check out some of the projects I’ve created below!
      </Text>
    </Box>
  );
};

export default About;
