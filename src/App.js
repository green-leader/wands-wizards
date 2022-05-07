import spellFile from './spells-ww.json';
import './App.css';

function SpellCard(props) {
    return (
      <div className='Card'>
        <h2>{props.entry.name}</h2> - <span>{props.entry.description}</span>
        <div className='CardStats'>
          <div className='CardStatsItem'><p>Level: </p>{props.entry.level}</div>
          <div className='CardStatsItem'><p>Casting Time: </p>{props.entry.castingTime}</div>
          <div className='CardStatsItem'><p>Range/Area: </p>{props.entry.range}</div>
          <div className='CardStatsItem'><p>Duration: </p>{props.entry.duration}</div>
          <div className='CardStatsItem'><p>School: </p>{props.entry.school}</div>
          {props.entry.tags &&
            <div>Tags: {props.entry.tags}</div>
          }
        </div>
        <div>
          {props.entry.entry.map((line) => 
          <p>{line}</p>
          )}
          {props.entry.entryHigherLevel &&
          <div>
            <b>At Higher Levels:</b>
            <p>{props.entry.entryHigherLevel}</p>
          </div>
          }
            
        </div>
      </div>
    )
}

function App() {
  return (
    <div className="App">
      <ul>
        <div>
          {spellFile.map((entry) => 
            <SpellCard key={entry.name} entry={entry} />
          )}
        </div>
      </ul>
    </div>
  );
}

export default App;
