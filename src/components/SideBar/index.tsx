import { Flex, VStack, IconButton, Tooltip } from "@chakra-ui/react";

import { sideBarItens } from "../../utils/sideBarItens";

export function SideBar() {
  return (
    <Flex h="100%">
      <VStack as="aside" h="100%" justifyContent="center" p={3} spacing={5}>
        {sideBarItens.map((item) => {
          return (
            <Tooltip
              hasArrow
              label={item.title}
              bg="pink.700"
              placement="right"
              key={item.id}
            >
              <IconButton
                colorScheme="pink"
                fontSize="35px"
                aria-label={item.title}
                icon={<item.icon />}
                variant="ghost"
                size="lg"
                borderRadius="8px"
              />
            </Tooltip>
          );
        })}
      </VStack>
    </Flex>
  );
}
