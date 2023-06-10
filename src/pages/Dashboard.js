import React, {useState} from "react";
import {DefaultProfile} from "../components/Elements/DefaultProfile";
import Button from "../components/Elements/Button";
import UserProfile from "../components/Fragments/UserProfile";
import RoomVersus from "../components/Fragments/RoomVersus";
import {Link} from "react-router-dom";

const Dashboard = () => {
  const [visible, setvisible] = useState(3);
  const [rooms, setRooms] = useState([
    {
      title: "Game One",
      winner: "Haji",
      status: "Waiting",
    },
    {
      title: "Game Two",
      winner: "Latunrung",
      status: "Waiting",
    },
    {
      title: "Game Three",
      winner: "Orawa",
      status: "Completed",
    },
    {
      title: "Game Four",
      winner: "Gorosei",
      status: "Completed",
    },
    {
      title: "Game Five",
      winner: "KimiHime",
      status: "Completed",
    },
    {
      title: "Game Six",
      winner: "Eiger",
      status: "Completed",
    },
  ]);
  return (
    <div className="w-full h-screen flex">
      <div className="w-2/3 h-full bg-gray-300 p-5">
        <span className="text-gray-900 text-2xl font-bold my-5 items-center flex justify-center ">
          Versus Computer Room
          <div className="items-center flex justify-center  text-xl">
            <Link to={"/rockpaperscissors"}>
              <Button title="Play Here" variant="bg-mandarin" />
            </Link>
          </div>
        </span>
        <div className="border-2 my-5"></div>
        <div className="items-center flex justify-center text-xl font-bold">
          <Link to={"/create-room"}>
            <Button title="Create Room Vs Player" variant="bg-mandarin" />
          </Link>
        </div>
        <div className="flex flex-row flex-wrap">
          {rooms.slice(0, visible).map(room => {
            return (
              <RoomVersus
                title={room.title}
                winner={room.winner}
                status={room.status}
              />
            );
          })}
        </div>
        <div className="justify-center gap-5 mt-2 flex">
          <Button
            title="Show More"
            variant="bg-mandarin"
            onClick={() => setvisible(visible + 1)}
          />
          <Button
            title="Show Less"
            variant="bg-mandarin"
            onClick={() => setvisible(visible - 1)}
          />
        </div>
      </div>
      <div className="w-1/3 h-full bg-gray-900 flex flex-col justify-center items-center">
        <div className="mt-5">
          <DefaultProfile />
        </div>
        <div></div>
        <UserProfile />
      </div>
    </div>
  );
};

export default Dashboard;
