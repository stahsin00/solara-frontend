import React from 'react';

function UserCharacterCard(props) {
    const { _id, name, description, atk, spe, art, face, level, exp, maxExp, setSelectedCharacter } = props;

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
          level:level,
          exp: exp,
          maxExp: maxExp
        }
      )
  }

  return (
    <div className="character-card" onClick={handleClick}>
        <img src={`http://localhost:3500/${face}`} alt='a character'></img>
        <div>{name}</div>
        <div>Level {level}</div>
    </div>
  );
}

export default UserCharacterCard;