/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import PropTypes from 'prop-types';
import Gap from '../Elements/Gap';
import { PaperPic, RockPic, ScissorPic } from '../../Assets';
import TextOnCreateRoom from '../Elements/TextOnCreateRoom';

function ChoiceRoom(props) {
  const { choiceResponse, handleClick } = props;
  return (
    <div>
      <TextOnCreateRoom text='Please pick your choice' />
      <Gap height={100} />
      <div className='w-full h-[50px] flex items-center justify-center'>
        <div
          className={
            choiceResponse === 'batu'
              ? 'bg-[#8d4b28] rounded-lg p-[10px]'
              : 'bg-[#feecbc]'
          }
        >
          <img
            className='w-[150px] hover:scale-[1.3] hover:cursor-pointer'
            src={RockPic}
            alt='batu'
            onClick={handleClick}
          />
        </div>
        <Gap width={100} />
        <div
          className={
            choiceResponse === 'gunting'
              ? 'scale-[1.3] bg-[#8d4b28] rounded-lg hover:scale-1 p-[10px]'
              : 'bg-[#feecbc]'
          }
        >
          <img
            className='w-[130px] hover:scale-[1.3] hover:cursor-pointer'
            src={ScissorPic}
            alt='gunting'
            onClick={handleClick}
          />
        </div>
        <Gap width={100} />
        <div
          className={
            choiceResponse === 'kertas'
              ? 'scale-[1.3] bg-[#8d4b28] rounded-lg hover:scale-1 p-[10px]'
              : 'bg-[#feecbc]'
          }
        >
          <img
            className='w-[115px] hover:scale-[1.3] hover:cursor-pointer'
            src={PaperPic}
            alt='kertas'
            onClick={handleClick}
          />
        </div>
        <Gap height={100} />
      </div>
    </div>
  );
}

ChoiceRoom.propTypes = {
  handleClick: PropTypes.func,
  choiceResponse: PropTypes.string.isRequired,
};

ChoiceRoom.defaultProps = {
  handleClick: () => {},
};

export default ChoiceRoom;
