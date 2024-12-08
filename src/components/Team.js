import './Team.css';
import React, {useEffect, useState} from 'react';
import { userTeam } from '../utils/character';


function Team() {
    const [team, setTeam] = useState([null, null, null, null]);
    useEffect(() => {
        getTeam();
      }, []);

      const getTeam = async () => {
        try {
            const result = await userTeam();
            setTeam([result.teamCharacter1, result.teamCharacter2, result.teamCharacter3, result.teamCharacter4]);
        } catch (error) {
            console.error("Unable to get team.");
        }
      }

  return (
    <div className='team-container'>
      <div className='team'>
        <div className='member'>
            {
                (team[0] != null) ? <img src={`${process.env.REACT_APP_IMAGE_URL}/${team[0].character.faceArt}`} alt='a character'></img> : <></>
            }
        </div>
        <div className='member'>
            {
                (team[1] != null) ? <img src={`${process.env.REACT_APP_IMAGE_URL}/${team[1].character.faceArt}`} alt='a character'></img> : <></>
            }
        </div>
        <div className='member'>
            {
                (team[2] != null) ? <img src={`${process.env.REACT_APP_IMAGE_URL}/${team[2].character.faceArt}`} alt='a character'></img> : <></>
            }
        </div>
        <div className='member'>
            {
                (team[3] != null) ? <img src={`${process.env.REACT_APP_IMAGE_URL}/${team[3].character.faceArt}`} alt='a character'></img> : <></>
            }
        </div>
      </div>
    </div>
  );
}

export default Team;
