import { Flex, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import { Particle } from "../Particle";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <Flex w="100vw" h="100vh" bg="#232323" position="relative">
      <Particle qtd={15} />

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
      >
        {children}
      </Box>
    </Flex>
  );
}
