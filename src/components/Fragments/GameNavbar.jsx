import React from 'react';
import NavbarButton from '../Elements/NavbarButton';
import { DashboardIcon } from '../../assets';

function GameNavbar() {
  return (
    <div className="absolute w-full h-full flex">
      <div className="absolute flex h-full w-full ">
        <NavbarButton
          textNvbrBtnProp="Back"
          iconNvbrBtnProp={DashboardIcon}
          linkProp="/dashboard"
        />
      </div>
    </div>
  );
}

export default GameNavbar;
