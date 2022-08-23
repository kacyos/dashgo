import { Box, Stack, Text } from "@chakra-ui/react";

import PaginationItem from "./PaginationItem";

export default function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      marginTop="8"
      justifyContent="space-between"
      align="center"
    >
      <Box>
        <Text as="span">1</Text> - <Text as="span">10</Text> de{" "}
        <Text as="span">100</Text>
      </Box>

      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </Stack>
    </Stack>
  );
}
