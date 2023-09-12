import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import DashboardNavbar from '../Components/Fragments/DashboardNavbar';
// import jwtDecode from "jwt-decode";
// import { useSelector } from "react-redux";

function Dashboard() {
  // const [visible, setvisible] = useState(3);
  const token = localStorage.getItem('accessToken');

  // const userRedux = useSelector((state) => state.user);

  const [rooms, setRooms] = useState([]);
  const [filterRoom, setFilterRoom] = useState('Available');

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const hasilDataRoom = await axios.get(
          'https://rock-paper-scissors-be.vercel.app/games/room',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setRooms(hasilDataRoom.data);
        // console.log(hasilDataRoom);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };
    fetchRooms();
  }, []);
  return (
    <div className='w-full h-full flex'>
      <div className='absolute w-full h-[20px] flex'>
        <div className='absolute w-full h-full top-[15px] left-[20px] flex justify-center items-center'>
          <DashboardNavbar />
        </div>
      </div>
      {/* <div className="relative">
        <DashboardNavbar />
      </div> */}
      <div className='absolute top-[80px] left-[50px]' />
      <div className='w-full h-full items-center justify-center bg-[#feecbc] p-5 pt-10'>
        <div className='flex items-center justify-evenly'>
          <Link
            to='/vs-com'
            className=" text-white  text-2xl border-2 font-['Patua_One'] my-5 px-2 py-2 rounded-xl bg-[#8d4b28] hover:transition duration-300 ease-in-out hover:bg-[#d09959]"
          >
            PLAYER VS COMPUTER
          </Link>
          <Link
            to='/dashboard/create-room'
            className="text-white text-2xl font-['Patua_One'] my-5 border-2 mx-5 px-2 py-2 rounded-xl bg-[#8d4b28] hover:transition duration-300 ease-in-out hover:bg-[#d09959]"
          >
            CREATE NEW ROOM
          </Link>
        </div>
        <div className='border-2 border-yellow-500 my-10' />

        <div className='flex justify-end'>
          <div className="w-40 py-3 px-4 rounded-xl text-sm font-medium font-['Patua_One'] leading-none bg-[#8d4b28] text-white cursor-pointer">
            <p>Sort By:</p>
            <select
              onClick={(e) => {
                setFilterRoom(e.target.value);
              }}
              aria-label='select'
              className='focus:text-white focus:outline-none bg-transparent ml-1'
            >
              <option className='text-sm text-gray-800'>Available</option>
              <option className='text-sm text-gray-800'>Finish</option>
            </select>
          </div>
        </div>
        <div className='flex flex-row flex-wrap mt-10 overflow-auto h-[500px]'>
          {rooms
            .filter(
              (room) => room.statusRoom === filterRoom && room.roomName !== 'VS COM',
            )
            .map((room) => (
              <div
                key={room.id}
                className=' w-1/4 border border-black rounded-xl m-3 bg-white hover:scale-110 hover:cursor-pointer transition-all'
              >
                <Link to={`/vs-play/${room.id}`}>
                  <div className="font-['Chicle'] tracking-wider text-[30px] mb-2 py-4 text-2xl overflow-hidden rounded-xl border-black text-center bg-[#d09959] text-white">
                    {room.roomName}
                  </div>
                  <div className="flex flex-col font-['Chicle'] tracking-wide text-[20px] text-[#5e2a11] px-3 text-md">
                    <div className='my-1'>{`Player : ${room.player1.username}`}</div>
                    <div className='my-1'>{`Room Name : ${room.roomName}`}</div>
                    <div className='my-1 pb-3'>{`Status Room : ${room.statusRoom}`}</div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
