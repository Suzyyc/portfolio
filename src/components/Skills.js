import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Box sx={{ mt: "10rem", mb: "8rem" }}>
      <Heading sx={{ fontSize: "50px", mb: "1rem" }}>Tech Stack</Heading>
      <Box sx={{ display: "flex" }}>
        <Box>
          <UnorderedList>
            <Heading sx={{ mb: "1rem" }}>Frontend</Heading>
            <ListItem>Javascript</ListItem>
            <ListItem>React</ListItem>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList sx={{ ml: "2rem" }}>
            <Heading sx={{ mb: "1rem" }}>Backend</Heading>
            <ListItem>Python</ListItem>
            <ListItem>NodeJS</ListItem>
            <ListItem>Express</ListItem>
            <ListItem>MongoDB</ListItem>
            <ListItem>PostgreSQL</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
