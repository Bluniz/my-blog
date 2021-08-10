import {
  Flex,
  Image,
  Box,
  Heading,
  HStack,
  Text,
  IconButton,
  Link,
} from "@chakra-ui/react";

import { socialMediaItens } from "../../utils/socialMedia";
import { ScaleFade, SlideFade } from "@chakra-ui/react";
import React from "react";
interface HomeContentProps {
  title: string;
  subtitle: string;
  description: string;
}

export function HomeContent({
  title,
  subtitle,
  description,
}: HomeContentProps) {
  return (
    <HStack spacing={10}>
      <ScaleFade in initialScale={0.9}>
        <Box
          boxSize="300px"
          borderRadius="8px"
          bg="pink.700"
          position="relative"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/55213609?v=4"
            fallbackSrc="assets/perfil.jpeg"
            alt="perfil"
            boxSize="300px"
            objectFit="cover"
            borderRadius="8px"
            position="absolute"
            top="-10px"
            left="-10px"
          />
        </Box>
      </ScaleFade>
      <Flex
        flexDirection="column"
        maxW="32rem"
        p="10px"
        justifyContent="space-between"
        h="300px"
      >
        <ScaleFade initialScale={0.9} in>
          <Box>
            <Heading as="h1" size="2xl" color="pink.700">
              {title}
            </Heading>
            <Text fontSize="xl" color="pink.500" mb={3}>
              {subtitle}
            </Text>
            <Text fontSize="2xl" color="whiteAlpha.800">
              {description}
            </Text>
          </Box>
        </ScaleFade>
        <HStack pt={5} spacing={5}>
          {socialMediaItens.map((item) => {
            return (
              <SlideFade in offsetY="20px">
                <IconButton
                  key={item.id}
                  as={Link}
                  href={item.to}
                  colorScheme="pink"
                  fontSize="30px"
                  aria-label={item.name}
                  icon={<item.icon />}
                  variant="outline"
                  size="lg"
                  borderRadius="8px"
                  isExternal
                />
              </SlideFade>
            );
          })}
        </HStack>
      </Flex>
    </HStack>
  );
}
