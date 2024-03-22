import React from 'react';

function CharacterCard(props) {
    const { shop, _id, name, description, atk, spe, art, face, price, setSelectedCharacter } = props;

    function handleClick(e) {
      if (shop) {
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
      } else {
        setSelectedCharacter(
          {
            _id:_id,
            name:name,
            description:description,
            atk:atk,
            spe:spe,
            art:art,
            face:face,
            level:props.level,
            exp: props.exp,
            maxExp: props.maxExp
          }
        )
      }
  }

  return (
    <div className="character-card" onClick={handleClick}>
        <img src={`${process.env.REACT_APP_IMAGE_URL}/${face}`} alt='a character'></img>
        <div>{name}</div>
        {shop ? <div><img src={require('../coin.png')} alt='a coin' /> {price}</div> : <div>Level {props.level}</div>}
    </div>
  );
}

export default CharacterCard;