import React from 'react';
import { useUser } from '../context/UserContext';

function CharacterCard(props) {
    const { setSelection } = useUser();
    const { shop, _id, name, description, atk, spe, art, face, price, setSelectedCharacter } = props;

    function handleClick(e) {
      if (shop) {
        setSelection(_id);
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
        setSelection(_id);
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
            team: props.team,
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