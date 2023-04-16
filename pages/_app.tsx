import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "@/components/layout";
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
