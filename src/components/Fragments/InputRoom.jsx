/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Gap from '../Elements/Gap';
import { BoxRoomName } from '../../Assets';
import TextOnCreateRoom from '../Elements/TextOnCreateRoom';

function InputRoom(props) {
  const { handleChange } = props;
  return (
    <div>
      <TextOnCreateRoom text='Please input the room name you want to create' />
      <Gap height={20} />
      <div className='w-full h-[50px] bg-[#feecbc] flex items-center justify-center'>
        <img className='absolute w-[350px] h-[80px]' src={BoxRoomName} alt='box' />
        <input
          className="absolute w-[280px] bg-transparent border-none outline-none font-['Cherry_Bomb_One'] text-[35px] text-center text-[#5e2a11] font-[600]"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

InputRoom.propTypes = {
  handleChange: PropTypes.func,
};

export default InputRoom;
