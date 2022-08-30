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
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          sx={{ maxWidth: "250px", [mobileMedia]: { py: "4rem" } }}
          src="/img/Memc.jpg"
        />
      </Box>
    </Box>
  );
};

export default SideProfile;
