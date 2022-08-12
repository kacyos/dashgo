import { Avatar, Box, Text, Flex } from "@chakra-ui/react";

interface IProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: IProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Cacio de Castro</Text>
          <Text color="gray.300" fontSize="small">
            cacio.castro@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Cacio de Castro"
        src="https://github.com/kacyos.png"
      />
    </Flex>
  );
}
