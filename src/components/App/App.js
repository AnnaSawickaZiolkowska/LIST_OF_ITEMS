import { useCallback, useMemo } from "react";
import logo from "../../assets/DeSmart-logo-black-500px.png";
import useLocalStorage from "../../hooks/useLocalStorage";
import data from "../../utils/data";
import "./App.css";
import Item from "./Item";

const App = () => {
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

  console.log(checkedItems);
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Please select multiple items:</p>
      </header>
      <div>
        {items.map(({ id, title, url }) => {
          return (
            <Item
              className={`${
                checkedItems.find((item) => item.id === id) ? "checked" : ""
              }`}
              key={id}
              title={title}
              url={url}
              handleChoice={() => handleChoice(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
