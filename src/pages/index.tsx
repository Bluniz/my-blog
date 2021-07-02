import { Box } from "@chakra-ui/react";
import { SideBar } from "../components/SideBar";

export default function Home() {
  return (
    <Box w="100vw" h="100vh" bg="blackAlpha.800">
      <SideBar />
    </Box>
  );
}
