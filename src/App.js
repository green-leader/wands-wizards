import spellFile from "./spells-ww.json";
import SpellListing from "./components/SpellCard";
import Search from "./components/Search";
import "./App.css";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([]);

  const handleChange = (e) => {
    setWord(e);
    let oldList = spellFile;

    if (word !== "") {
      let newList = [];

      newList = oldList.filter((spell) =>
        spell.name.toLowerCase().includes(word.toLowerCase())
      );

      setFilterDisplay(newList);
    } else {
      setFilterDisplay(oldList);
    }
  };

  return (
    <div className="App">
      <Search value={word} handleChange={(e) => handleChange(e.target.value)} />
      <SpellListing list={word.length < 1 ? spellFile : filterDisplay} />
    </div>
  );
}

export default App;
