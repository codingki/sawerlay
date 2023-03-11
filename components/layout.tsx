import { Stack, Box } from "@chakra-ui/react";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Box w="full" minH="100vh" px={[4, 8]} pb="40">
    <Stack maxW="container.lg" mx="auto">
      {children}
    </Stack>
  </Box>
);
