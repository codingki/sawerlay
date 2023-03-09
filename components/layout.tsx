import { Stack, Box } from "@chakra-ui/react";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Box w="full" minH="100vh" px={[4, 8]} pb="40">
    <Stack maxW="3xl" mx="auto" spacing={10} bgColor="blue.50">
      {children}
    </Stack>
  </Box>
);
