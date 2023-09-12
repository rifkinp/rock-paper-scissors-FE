import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import NavbarButton from '../Elements/NavbarButton';
import { BoxRoomName, LogoutIcon, SmallLogo, UserProfileIcon } from '../../Assets';
import Gap from '../Elements/Gap';
// import { useSelector } from "react-redux";

const handleClick = () => {
  localStorage.clear();
};

function DashboardNavbar() {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      const decodedJWT = jwtDecode(token);
      setDataUser(decodedJWT.email);
    }
  }, []);

  return (
    <div className='absolute w-full h-full flex'>
      <div className="absolute w-full h-full flex pt-[10px] pl-3 font-['Cherry_Bomb_One'] text-[40px] text-[#5e2a11]">
        <img className='relative h-[50px] pt-1' src={SmallLogo} alt='logo' />
        <Gap width={10} />
        <span>RPS Game</span>
      </div>
      <div className='absolute w-[300px] h-[30px] right-[200px] flex items-center justify-center'>
        <img className='absolute top-[20px] h-[50px]' src={BoxRoomName} alt='' />
        <p className="absolute w-[150px] top-[33px] font-['Chicle'] text-md text-center text-[#5e2a11]  whitespace-nowrap scrollbar-thin   scrollbar-thumb-black/50">
          {dataUser}
        </p>
      </div>
      <div className='absolute w-[150px] h-full flex pt-[20px] right-[70px]'>
        <NavbarButton
          textNvbrBtnProp='Profile'
          iconNvbrBtnProp={UserProfileIcon}
          linkProp='/dashboard/game-history'
        />
      </div>
      <div className='absolute w-[150px] h-full flex pt-[20px] right-[0px]'>
        <NavbarButton
          textNvbrBtnProp='Logout'
          iconNvbrBtnProp={LogoutIcon}
          linkProp='/'
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default DashboardNavbar;
