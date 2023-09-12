import React from 'react';
import { PropTypes } from 'prop-types';
import { BoxRoomName } from '../../Assets';

function TitleBoxGame({ labelBoxTitle }) {
  return (
    <div className='relative w-[300px] h-[30px] flex items-center justify-center'>
      <img className='absolute top-[0px] w-[300px] h-[60px]' src={BoxRoomName} alt='' />
      <p className="absolute w-[280px] top-[1px] font-['Cherry_Bomb_One'] text-[35px] text-center text-[#5e2a11] font-[600] cursor-default">
        {labelBoxTitle}
      </p>
    </div>
  );
}

TitleBoxGame.propTypes = {
  labelBoxTitle: PropTypes.string,
};

TitleBoxGame.defaultProps = {
  labelBoxTitle: 'defaultLabelBoxTitle',
};

export default TitleBoxGame;
