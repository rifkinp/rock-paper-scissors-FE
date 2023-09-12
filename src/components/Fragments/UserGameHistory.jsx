import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../Elements/Button/Button';

function UserGameHistory() {
  const [histories, setHistories] = useState([]);
  useEffect(() => {
    const fetchGameHistory = async () => {
      try {
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
        // console.log(hasilGameHistory);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGameHistory();
  }, []);

  return (
    <div className="w-full h-full flex flex-row">
      <div className="absolute overflow-auto h-[390px]">
        {histories.map(() => (
          <div className="absolute w-[500px] flex">
            <div className="absolute w-full flex justify-center items-center bg-black">
              Tes
            </div>
            <div className="m-[5px] text-[30px] bg-[#9e5022] font-['Chicle'] rounded-[10px] flex justify-center items-center w-[200px] cursor-default">
              {/* {item.roomName} */}
              {' '}
              Romm A
            </div>
            <div className="m-[5px] text-[30px] bg-[#b67444] font-['Chicle'] rounded-[10px] flex justify-center items-center w-[250px] cursor-default">
              {/* {item.updatedAt} */}
              {' '}
              06 Juni 1993
            </div>
            <div className="m-[5px] text-[30px] bg-black font-['Chicle'] rounded-[10px] flex justify-center items-center w-[100px] cursor-default">
              {/* {item.hasilPlayer} */}
              {' '}
              WON
            </div>
            <Button />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserGameHistory;
