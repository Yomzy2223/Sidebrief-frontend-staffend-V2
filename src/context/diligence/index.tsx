import { useContext } from "react";
import { DiligenceContext, DiligenceProvider } from "./context";

export const useDiligence = () => {
  const { searchValue, setSearchValue } = useContext(DiligenceContext);

  return { searchValue, setSearchValue: (value: string) => setSearchValue(value.toLowerCase()) };
};

export { DiligenceProvider };
