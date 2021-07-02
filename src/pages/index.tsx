import Head from "next/head";

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
import { SideBar } from "../components/SideBar";

import { Container } from "../components/Container";
import { HomeContent } from "../components/HomeContent";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Bluniz.dev | Home</title>
      </Head>

      <SideBar />
      <Flex as="main" flex="1" justifyContent="center">
        <HomeContent
          title="Lucas Rosa"
          subtitle="</ FrontEnd Developer >"
          description="Desenvolvedor Front-end, amante do Typescript e apaixonado por jogos
            e animes."
        />
      </Flex>
    </Container>
  );
}
