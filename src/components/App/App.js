import logo from "../../assets/DeSmart-logo-black-500px.png";
import useItems from "../../hooks/useItems";
import "./App.css";
import Item from "./Item";

const App = () => {
  const { items, checkedItems, handleChoice } = useItems();

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
              id={id}
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
