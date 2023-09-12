import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import TitleBoxGame from '../Components/Elements/TitleBoxGame';
import ButtonYellow from '../Components/Elements/ButtonYellow';
import ListOfChoice from '../Components/Fragments/ListOfChoice';
import Gap from '../Components/Elements/Gap';
import Image from '../Components/Elements/Image';
import { VersusAlert, WinNotif, LoseNotif, DrawNotif } from '../Assets';
import Background from '../Components/Layouts/Background';
import GameNavbar from '../Components/Fragments/GameNavbar';
import ButtonGreen from '../Components/Elements/ButtonGreen';

function VersusPlayer() {
  const { id } = useParams();
  const token = localStorage.getItem('accessToken');
  const decodedToken = jwtDecode(token);
  const [dataSingleRoom, setDataSingleRoom] = useState('');
  const [usernamePlayer1, setUsernamePlayer1] = useState('');
  const [usernamePlayer2, setUsernamePlayer2] = useState('');
  const [resultImage, setResultImage] = useState(VersusAlert);
  const [isActive, setIsActive] = useState(false);
  const [player1Choice, setPlayer1Choice] = useState('');
  const [player2Choice, setPlayer2Choice] = useState(dataSingleRoom.choicePlayer2);

  useEffect(() => {
    const fetchSingleRoom = async () => {
      const responseSingleRoom = await axios.get(
        `https://chapter-platinum-team-2-koet.vercel.app/user/singleRoom/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const dataRoom = responseSingleRoom.data;
      const player1Username = responseSingleRoom.data.player1?.username || 'KOSONG';
      const player2Username =
        responseSingleRoom.data.player2?.username || 'Wait Player 2';
      setDataSingleRoom(dataRoom);
      setUsernamePlayer1(player1Username);
      setUsernamePlayer2(player2Username);

      if (dataRoom.choicePlayer2 !== null) {
        setPlayer1Choice(dataRoom.choicePlayer1);
        setIsActive(true);
      }

      const resultGame = dataRoom.resultPlayer1;
      if (resultGame === 'win') {
        setResultImage(WinNotif);
      } else if (resultGame === 'lose') {
        setResultImage(LoseNotif);
      } else if (resultGame === 'draw') {
        setResultImage(DrawNotif);
      }
    };
    fetchSingleRoom();
  }, [isActive, id, token]);

  const handleChange = (e) => {
    if (!isActive) {
      setPlayer2Choice(e.target.alt);
    }
  };

  const handleClick = async () => {
    const usernameP2 = decodedToken.username;
    if (usernameP2 === usernamePlayer1) {
      // eslint-disable-next-line no-alert
      alert('Anda tidak diperkenankan berkelahi dengan diri sendiri');
    } else if (!player2Choice) {
      // eslint-disable-next-line no-alert
      alert('Player 2 harus memilih terlebih dahulu!');
      return;
    }

    try {
      await axios.put(
        `https://chapter-platinum-team-2-koet.vercel.app/user/joinRoom/${id}`,
        { choicePlayer2: player2Choice },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('anda harus memilih');
    }
    setIsActive(true);
  };

  return (
    <Background>
      <div className='relative w-full h-[20px] flex'>
        <div className='absolute w-full h-full top-[-65px] left-[20px] flex justify-center items-center'>
          <GameNavbar />
        </div>
      </div>
      <div className='absolute top-[0px] pt-[20px]'>
        <TitleBoxGame labelBoxTitle={dataSingleRoom.roomName} />
      </div>
      <div className='w-full pt-[80px] flex'>
        <ListOfChoice
          titleNameProp={usernamePlayer1 || '???'}
          choiceResponse={player1Choice}
        />
        <div className='w-1/4 flex flex-col items-center justify-center'>
          <Image className='w-[200px]' imageProp='' />
          <Gap width={15} />
          <Image className='w-[200px]' imageProp={resultImage} />
          <Gap width={15} />
          <Image className='w-[200px]' imageProp='' />
        </div>
        <ListOfChoice
          handleChange={handleChange}
          titleNameProp={usernamePlayer2 || '???'}
          choiceResponse={player2Choice || dataSingleRoom.choicePlayer2}
        />
      </div>
      <div style={{ display: resultImage !== VersusAlert ? 'none' : '' }}>
        <ButtonGreen labelBtnGrn='Play' handleClick={handleClick} />
      </div>
      <Link to='/dashboard'>
        <div style={{ display: resultImage === VersusAlert ? 'none' : '' }}>
          <ButtonYellow labelBtnYlw='PLAY AGAIN' />
        </div>
      </Link>
    </Background>
  );
}

export default VersusPlayer;
