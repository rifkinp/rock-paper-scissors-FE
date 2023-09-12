import React from 'react';
import BoxProfile from '../Elements/BoxProfile';
import TitleHistProf from '../Elements/TitleHistProf';
import UserProfile from './UserProfile';

function FormBoxProfile() {
  return (
    <div
      className="relative w-[450px] flex justify-center items-center"
    >
      <div className="absolute">
        <BoxProfile />
      </div>

      <div>
        <div className="relative w-full top-[-315px] flex justify-center">
          <TitleHistProf labelBoxTitle="Profile" />
        </div>
      </div>
      <div className="absolute">
        <UserProfile />
      </div>
    </div>
  );
}

export default FormBoxProfile;
