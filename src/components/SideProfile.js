import { Box, Image } from "@chakra-ui/react";
import { mobileMedia } from "../utlis/media";

const SideProfile = () => {
  return (
    <Box
      sx={{
        bgColor: "teal.700",
        width: "50%",
        [mobileMedia]: { width: "100%", order: -1 },
      }}
    >
      <Box sx={{ p: "12rem", [mobileMedia]: { p: "4rem" } }}>
        <Image src="/img/Memc.jpg" />
      </Box>
    </Box>
  );
};

export default SideProfile;
