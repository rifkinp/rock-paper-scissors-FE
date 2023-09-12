/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Background from '../Components/Elements/Background';
import GameNavbar from '../Components/Fragments/GameNavbar';
import TitleHistProf from '../Components/Elements/TitleHistProf';
import FormBoxProfile from '../Components/Fragments/FormBoxProfile';
import { RectangleHorz } from '../assets';
import Button from '../Components/Elements/Button/Button';

function GameHistory() {
  const [histories, setHistories] = useState([]);
  useEffect(() => {
    const fetchGameHistory = async () => {
      const token = localStorage.getItem('accessToken');
      const hasilGameHistory = await axios.get(
        'https://chapter-platinum-team-2-koet.vercel.app/user/pvphistory',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setHistories(hasilGameHistory.data);
    };
    fetchGameHistory();
  }, []);

  const handleOpenPdf = async () => {
    //  generate pdf then open it
    const token = localStorage.getItem('accessToken');
    const response = await axios.get(
      'https://chapter-platinum-team-2-koet.vercel.app/user/generate-pdf',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const pdfGeneratedUrl = response.data.pdfUrl;
    // // Open the PDF in a new tab
    window.open(pdfGeneratedUrl, '_blank');
  };

  return (
    <Background>
      <div className="relative w-full h-[20px] flex">
        <div className="absolute w-full h-full top-[15px] left-[20px] flex justify-center items-center">
          <GameNavbar />
        </div>
      </div>
      <div className="w-full h-full flex flex-row">
        <div className="w-2/5 flex justify-center items-center">
          <FormBoxProfile />
        </div>

        <div className="w-3/5 flex justify-center items-center">
          <div className="relative h-full w-full bg-center bg-contain bg-no-repeat flex flex-col justify-center items-center">
            <img className="relative h-5/6 w-auto" src={RectangleHorz} alt="box" />
            <div className="absolute top-[30px]">
              <TitleHistProf labelBoxTitle="Game History" />
            </div>
            <div className="absolute overflow-auto h-3/5">
              {histories.map((item, index) => (
                <div className="w-[600px] flex" key={index.id}>
                  <div className="m-[5px] text-[30px] bg-[#9e5022] font-['Chicle'] rounded-[10px] flex justify-center items-center w-[250px] cursor-default">
                    {item.roomName}
                  </div>
                  <div className="m-[5px] text-[30px] bg-[#b67444] font-['Chicle'] rounded-[10px] flex justify-center items-center w-[450px] cursor-default">
                    {item.updatedAt}
                  </div>
                  <div className="m-[5px] text-[30px] bg-[#9e5022] font-['Chicle'] rounded-[10px] flex justify-center items-center w-[150px] cursor-default">
                    {item.hasilPlayer}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-[23px]">
              <Button
                variant="bg-[#9e5022]"
                title="history in pdf"
                onClick={handleOpenPdf}
              />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default GameHistory;
