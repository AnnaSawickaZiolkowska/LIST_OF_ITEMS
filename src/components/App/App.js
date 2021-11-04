import { useMemo } from "react";
import logo from "../../assets/DeSmart-logo-black-500px.png";
import data from "../../utils/data";
import "./App.css";
import Item from "./Item";

const App = () => {
  const items = useMemo(() => data, []);
  console.log(items);

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Please select multiple items:</p>
      </header>
      <div>
        {items.map(({ id, title, url }) => {
          return <Item key={id} title={title} url={url} />;
        })}
      </div>
    </div>
  );
};

export default App;
