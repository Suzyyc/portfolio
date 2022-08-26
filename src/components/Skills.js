import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <UnorderedList>
          <Heading>Frontend</Heading>
          <ListItem>Javascript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <UnorderedList sx={{ ml: "2rem" }}>
          <Heading>Backend</Heading>
          <ListItem>Python</ListItem>
          <ListItem>NodeJS</ListItem>
          <ListItem>Express</ListItem>
          <ListItem>MongoDB</ListItem>
          <ListItem>PostgreSQL</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Skills;
