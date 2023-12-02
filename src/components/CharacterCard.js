import React from 'react';

function CharacterCard(props) {
    const { _id, name, description, atk, spe, art, face, price, setSelectedCharacter } = props;

    function handleClick(e) {
      setSelectedCharacter(
        {
          _id:_id,
          name:name,
          description:description,
          atk:atk,
          spe:spe,
          art:art,
          face:face,
          price:price
        }
      )
  }

  return (
    <div className="character-card" onClick={handleClick}>
        <img src={`${process.env.REACT_APP_IMAGE_URL}/${face}`} alt='a character'></img>
        <div>{name}</div>
        <div><img src={require('../coin.png')} alt='a coin' /> {price}</div>
    </div>
  );
}

export default CharacterCard;