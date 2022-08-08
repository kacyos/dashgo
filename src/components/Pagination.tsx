import { Box, Button, Stack, Text } from "@chakra-ui/react";

export default function Pagination() {
  return (
    <Stack
      direction="row"
      marginTop="8"
      justifyContent="space-between"
      spacing="6"
    >
      <Box>
        <Text as="span">1</Text> - <Text as="span">10</Text> de{" "}
        <Text as="span">100</Text>
      </Box>

      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ backgroundColor: "pink.500", cursor: "default" }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          backgroundColor="gray.700"
          _hover={{ backgroundColor: "gray.500" }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          backgroundColor="gray.700"
          _hover={{ backgroundColor: "gray.500" }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          backgroundColor="gray.700"
          _hover={{ backgroundColor: "gray.500" }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  );
}
