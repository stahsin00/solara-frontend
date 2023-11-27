import React from 'react';

function CharacterCard(props) {
    const { _id, name, description, atk, def, hp, spe, art, face, price } = props;

  return (
    <div className="character-card">
        <img src={`http://localhost:3500/${face}`} alt='image of a character'></img>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
    </div>
  );
}

export default CharacterCard;