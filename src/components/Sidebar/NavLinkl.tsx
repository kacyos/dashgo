import {
  Icon,
  Text,
  Link,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface INavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export default function NavLink({ icon, children, ...rest }: INavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text marginLeft="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
