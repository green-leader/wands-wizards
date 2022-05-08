import spellFile from './spells-ww.json';
import SpellListing from './components/SpellCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <div>
          {
            <SpellListing list={spellFile} />
          }
        </div>
      </ul>
    </div>
  );
}

export default App;
