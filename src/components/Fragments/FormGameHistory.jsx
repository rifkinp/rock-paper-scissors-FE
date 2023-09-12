import React from 'react';
import BoxGameHistory from '../Elements/BoxGameHistory';
import TitleHistProf from '../Elements/TitleHistProf';
import UserGameHistory from './UserGameHistory';

function FormGameHistory({ ...rest }) {
  return (
    <div
      className="relative w-[800px] flex justify-center items-center"
      {...rest}
    >
      <div className="absolute">
        <BoxGameHistory />
      </div>
      <div>
        <div className="relative w-full top-[-300px] flex justify-center">
          <TitleHistProf labelBoxTitle="Game History" />
        </div>
        <div className="absolute top-[-200px]">
          <UserGameHistory />
        </div>
      </div>
    </div>
  );
}

export default FormGameHistory;
