import { useMemo, useCallback } from "react";
import data from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { addChoice, removeChoice } from "../features/choiceSlice";

const useItems = () => {
  const items = useMemo(() => data, []);
  const { checkedItems } = useSelector((state) => state.choice);
  const dispatch = useDispatch();

  const handleChoice = useCallback(
    (id) => {
      const existingId = checkedItems.find((el) => el.id === id);
      if (existingId === undefined) {
        dispatch(addChoice(id));
      } else {
        dispatch(removeChoice(id));
      }
    },
    [checkedItems, dispatch]
  );
  return {
    items,
    handleChoice,
  };
};

export default useItems;
