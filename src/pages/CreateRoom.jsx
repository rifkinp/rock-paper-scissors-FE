/* eslint-disable no-alert */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Gap from '../Components/Elements/Gap';
import Background from '../Components/Layouts/Background';
import InputRoom from '../Components/Fragments/InputRoom';
import ChoiceRoom from '../Components/Fragments/ChoiceRoom';
import ButtonYellow from '../Components/Elements/ButtonYellow';

import GameNavbar from '../Components/Fragments/GameNavbar';

function CreateRoom() {
  const [roomName, setRoomName] = useState('');
  const [choice, setChoice] = useState('');
  const [isChoiceMade, setIsChoiceMade] = useState(false);
  const navigate = useNavigate();

  const handleChoiceClick = (event) => {
    if (!isChoiceMade) {
      setChoice(event.target.alt);
    }
  };

  const handleCreateRoom = async () => {
    const token = localStorage.getItem('accessToken');
    try {
      await axios.post(
        'https://rock-paper-scissors-be.vercel.app/games/createroom',
        { roomName, choicePlayer1: choice },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setIsChoiceMade(true);
      navigate('/dashboard');
      alert('Room berhasil ter-record');
    } catch (error) {
      alert('Tolong masukan Nama Room dan Pilihanmu');
    }
  };

  return (
    <Background>
      <div className='relative w-full h-[20px] flex'>
        <div className='absolute w-full h-full top-[-85px] left-[20px] flex justify-center items-center'>
          <GameNavbar />
        </div>
      </div>
      <InputRoom
        handleChange={(event) => {
          setRoomName(event.target.value);
        }}
      />
      <Gap height={80} />
      <ChoiceRoom handleClick={handleChoiceClick} choiceResponse={choice} />
      <Gap height={120} />
      <ButtonYellow labelBtnYlw='Create Room' handleClick={handleCreateRoom} />
    </Background>
  );
}

export default CreateRoom;
