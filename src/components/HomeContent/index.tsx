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
      <Box boxSize="300px" borderRadius="8px" bg="pink.700" position="relative">
        <Image
          src="assets/perfil.jpeg"
          alt="perfil"
          boxSize="300px"
          objectFit="cover"
          borderRadius="8px"
          position="absolute"
          top="-10px"
          left="-10px"
        />
      </Box>

      <Flex
        flexDirection="column"
        maxW="32rem"
        p="10px"
        justifyContent="space-between"
        h="300px"
      >
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

        <HStack pt={5} spacing={5}>
          {socialMediaItens.map((item) => {
            return (
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
            );
          })}
        </HStack>
      </Flex>
    </HStack>
  );
}
