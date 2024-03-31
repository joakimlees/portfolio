/*
import { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type MenuProviderProps = {
  children: ReactNode;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

*/
