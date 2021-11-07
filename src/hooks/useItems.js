import { useMemo, useCallback } from "react";
import useLocalStorage from "./useLocalStorage";
import data from "../utils/data";

const useItems = () => {
  const items = useMemo(() => data, []);
  const [checkedItems, setCheckedItems] = useLocalStorage("checkedItems", []);

  const handleChoice = useCallback(
    (id) => {
      const existingId = checkedItems.find((el) => el.id === id);
      if (existingId === undefined) {
        setCheckedItems([...checkedItems, { id: id }]);
      } else {
        setCheckedItems(checkedItems.filter((item) => item.id !== id));
      }
    },
    [checkedItems, setCheckedItems]
  );
  return {
    items,
    checkedItems,
    handleChoice,
  };
};

export default useItems;
