import { useMemo, useCallback } from "react";
import data from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { addChoice, removeChoice } from "../features/choiceSlice";

const useItems = () => {
  const items = useMemo(() => data, []);
  const userChoice = useSelector((state) => state.choice.value);
  const dispatch = useDispatch();

  const handleChoice = useCallback(
    (id) => {
      const existingId = userChoice.find((el) => el.id === id);
      if (existingId === undefined) {
        dispatch(addChoice(id));
      } else {
        dispatch(removeChoice(id));
      }
    },
    [userChoice, dispatch]
  );
  return {
    items,
    userChoice,
    handleChoice,
  };
};

export default useItems;
