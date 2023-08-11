import "./App.css";
import Logo from "./Components/Logo";
import HeaderComponent from "./Components/HeaderComponent";
import FormComponent from "./Components/FormComponent";
import PackingList from "./Components/PackingList";
import { useState } from "react";
import Item from "./Components/Item";
import "./Styles/queries.css";

function App() {
  const [itemList, setItemList] = useState([]);
  function handleAddItems(item) {
    setItemList([...itemList, item]);
  }

  const setDeleteItems = (item) => {
    setItemList(itemList.filter((element) => element.item != item));
  };

  return (
    <div className="App">
      <header>
        <HeaderComponent></HeaderComponent>
        <h2> Plan your trip as you wish ⛷️ </h2>
      </header>
      <FormComponent onAddItems={handleAddItems}></FormComponent>

      <PackingList
        itemsList={itemList}
        handleSetItems={setDeleteItems}
      ></PackingList>
      <footer>
        <h2>Happy Journey! 🚴‍♂️</h2>
      </footer>
    </div>
  );
}

export default App;
