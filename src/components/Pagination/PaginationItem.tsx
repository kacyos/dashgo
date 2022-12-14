import { Button } from "@chakra-ui/react";
import React from "react";

interface IPaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export default function PaginationItem({
  isCurrent = false,
  number,
}: IPaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ backgroundColor: "pink.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      backgroundColor="gray.700"
      _hover={{ backgroundColor: "gray.500" }}
    >
      {number}
    </Button>
  );
}
