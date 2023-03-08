import { Container, Stack, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  const warna = {
    base: "red.200",
    md: "blue.500",
  };
  return (
    <Container maxWidth={"container.lg"}>
      <VStack spacing={10} bgColor={warna}>
        <Text>woy</Text>
        <Text>woy</Text>
        <Text>woy</Text>
      </VStack>
    </Container>
  );
}
