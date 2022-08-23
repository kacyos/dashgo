import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface ISidebarDrawerProviderProps {
  children: ReactNode;
}

type sidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as sidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: ISidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSideBarDrawer = () => useContext(SidebarDrawerContext);
