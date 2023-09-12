import React, { useState } from 'react';
import axios from 'axios';
import Gap from '../Components/Elements/Gap';
import ButtonGreen from '../Components/Elements/ButtonGreen';
import { VersusAlert, WinNotif, LoseNotif, DrawNotif } from '../Assets';
import Background from '../Components/Layouts/Background';
import Image from '../Components/Elements/Image';
import ListOfChoice from '../Components/Fragments/ListOfChoice';
import GameNavbar from '../Components/Fragments/GameNavbar';
import ButtonYellow from '../Components/Elements/ButtonYellow';

function VersusComputer() {
  const [choiceUser, setChoiceUser] = useState('');
  const [resultImage, setResultImage] = useState(VersusAlert);
  const [isChoiceMade, setIsChoiceMade] = useState(false);
  const [comChoice, setComChoice] = useState('');

  const handleChange = (e) => {
    if (!isChoiceMade) {
      setChoiceUser(e.target.alt);
    }
  };

  const handleClick = async () => {
    const token = localStorage.getItem('accessToken');
    try {
      const hitApiVersusCom = await axios.post(
        'https://chapter-platinum-team-2-koet.vercel.app/user/vscom',
        { choicePlayer1: choiceUser },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setIsChoiceMade(true);

      const comChoices = hitApiVersusCom.data['pilihan-computer'];
      setComChoice(comChoices);

      const resultGame = hitApiVersusCom.data['hasil-pilihanmu'];

      if (resultGame === 'win') {
        setResultImage(WinNotif);
      } else if (resultGame === 'lose') {
        setResultImage(LoseNotif);
      } else if (resultGame === 'draw') {
        setResultImage(DrawNotif);
      }
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('tekan pilihanmu sebelum bermain');
    }
  };

  const handleRefresh = () => {
    setIsChoiceMade(false);
    setComChoice('');
    setChoiceUser('');
    setResultImage(VersusAlert);
  };

  return (
    <Background>
      <div className='relative w-full h-[20px] flex'>
        <div className='absolute w-full h-full top-[-100px] left-[20px] flex justify-center items-center'>
          <GameNavbar />
        </div>
      </div>
      <div className='w-full flex'>
        <ListOfChoice
          titleNameProp='Player 1'
          choiceResponse={choiceUser}
          handleChange={handleChange}
        />
        <div className='flex items-center justify-center w-1/10 h-auto'>
          <Gap width={15} />
          <Image className='w-[200px]' imageProp={resultImage} />
          <Gap width={15} />
        </div>

        <ListOfChoice titleNameProp='Computer' choiceResponse={comChoice} />
      </div>
      <Gap height={10} />
      <div
        className='block'
        style={{ display: resultImage !== VersusAlert ? 'none' : '' }}
      >
        <ButtonGreen labelBtnGrn='Play' handleClick={handleClick} />
      </div>
      <div style={{ display: resultImage === VersusAlert ? 'none' : '' }}>
        <ButtonYellow labelBtnYlw='PLAY AGAIN' handleClick={handleRefresh} />
      </div>
    </Background>
  );
}

export default VersusComputer;
