import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: IInputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        type="email"
        name={name}
        id={name}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          backgroundColor: "gray.900",
        }}
        {...rest}
      />
    </FormControl>
  );
}
