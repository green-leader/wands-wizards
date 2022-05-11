import React, { useState } from "react";

function SpellCard(spell) {
  return (
    <div className="Card">
      <h2>{spell.spell.name}</h2> - <span>{spell.spell.description}</span>
      <div className="CardStats">
        <div className="CardStatsItem">
          <p>Level: </p>
          {spell.spell.level}
        </div>
        <div className="CardStatsItem">
          <p>Casting Time: </p>
          {spell.spell.castingTime}
        </div>
        <div className="CardStatsItem">
          <p>Range/Area: </p>
          {spell.spell.range}
        </div>
        <div className="CardStatsItem">
          <p>Duration: </p>
          {spell.spell.duration}
        </div>
        <div className="CardStatsItem">
          <p>School: </p>
          {spell.spell.school}
        </div>
        {spell.spell.tags && <div>Tags: {spell.spell.tags}</div>}
      </div>
      <div>
        {spell.spell.entry.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        {spell.spell.entryHigherLevel && (
          <div>
            <b>At Higher Levels:</b>
            {spell.spell.entryHigherLevel.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const SpellListing = ({ list }) => {
  return (
    <div>
      <h1>Spells</h1>
      {list.map((spell, i) => (
        <div key={i}>
          <ul>
            <SpellCard spell={spell} />
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SpellListing;
