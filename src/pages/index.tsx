import { Button, Flex, Stack } from "@chakra-ui/react";

import { Input } from "../components/Form/input";

export default function SignIn() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
