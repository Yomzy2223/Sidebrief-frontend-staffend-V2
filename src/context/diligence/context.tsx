import { ReactNode, createContext, useState } from "react";

type diligenceContextType = {};

export const DiligenceContext = createContext({
  searchValue: "",
  setSearchValue: (value: string) => {},
});

export const DiligenceProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <DiligenceContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </DiligenceContext.Provider>
  );
};
