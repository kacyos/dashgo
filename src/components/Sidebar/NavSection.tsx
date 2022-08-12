import { Box, Text, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface INavSectionProps {
  title: string;
  children: ReactNode;
}

export default function NavSection({ title, children }: INavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" marginTop="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
