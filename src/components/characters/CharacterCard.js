import React from 'react';
import './CharacterCard.css';

function CharacterCard(props) {
  const { shop, character, setSelectedCharacter } = props;

  return (
    <div className="character-card" onClick={() => setSelectedCharacter(character)}>
        <img src={`${process.env.REACT_APP_IMAGE_URL}/${shop ? character.faceArt : character.character.faceArt}`} alt='a character'></img>
        <div>{character.name}</div>
        {shop ? <div><img src={require('../../assets/coin.png')} alt='a coin' /> {character.price}</div> : <div>Level {character.level}</div>}
    </div>
  );
}

export default CharacterCard;