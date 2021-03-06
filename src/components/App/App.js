import "./App.css";
import logo from "../../assets/DeSmart-logo-black-500px.png";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import useItems from "../../hooks/useItems";
import Item from "./Item";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const App = () => {
  const { items, handleChoice } = useItems();
  const { checkedItems } = useSelector((state) => state.choice);

  const Row = useCallback(
    ({ index, style }) => {
      const { id, title, url } = items[index] || {};
      return (
        <div style={style}>
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
        </div>
      );
    },
    [items, checkedItems, handleChoice]
  );

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Please select multiple items:</p>
      </header>

      <div style={{ flex: "1 1 auto", height: "100vh", width: "700px" }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              itemSize={150}
              itemCount={items.length}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default App;
