import { Box, Heading, Text } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Box sx ={{mt: "10rem", mb: "8rem"}}>
    <Heading sx={{ fontSize: "50px", mb: "1rem" }}>Experience</Heading>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px'}} id="experience">
   
      <Box>
      <Text sx={{ mb: "0.5rem" }}>IAG - Analyst, Data Engineer</Text>
      <Text >June 2023 - Current</Text>
      </Box>
      <Box><Text sx={{ mb: "0.5rem" }}>IAG - Tech & Ops Intern</Text>
      <Text>December 2022 - May 2023</Text>
      </Box>
      <Box><Text sx={{ mb: "0.5rem" }}>Helfie - Software Engineer Intern</Text>
      <Text>September 2022 - October 2022</Text>
      </Box>
    
    </Box>
    </Box>
  );
};

export default Experience;
