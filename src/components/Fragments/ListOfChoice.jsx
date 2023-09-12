/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Gap from '../Elements/Gap';
import Title from '../Elements/Title';
import { PaperPic, RockPic, ScissorPic } from '../../assets';
import Image from '../Elements/Image';

function ListOfChoice(props) {
  const { choiceResponse, titleNameProp, handleChange } = props;
  return (
    <div className="w-1/2 flex flex-col items-center justify-center">
      <Title titleName={titleNameProp} />
      <Gap height={30} />
      <div
        className={
          choiceResponse === 'batu'
            ? 'scale-[1.3] bg-[#8d4b28] rounded-lg p-[10px]'
            : 'bg-[#feecbc]'
        }
      >
        <Image imageProp={RockPic} alt="batu" handleChange={handleChange} />
      </div>
      <Gap height={30} />
      <div
        className={
          choiceResponse === 'gunting'
            ? 'scale-[1.3] bg-[#8d4b28] rounded-lg p-[10px]'
            : 'bg-[#feecbc]'
        }
      >
        <Image imageProp={ScissorPic} alt="gunting" handleChange={handleChange} />
      </div>
      <Gap height={30} />
      <div
        className={
          choiceResponse === 'kertas'
            ? 'scale-[1.3] bg-[#8d4b28] rounded-lg p-[10px]'
            : 'bg-[#feecbc]'
        }
      >
        <Image
          className="w-[70px] hover:scale-[1.3] hover:cursor-pointer"
          imageProp={PaperPic}
          alt="kertas"
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

ListOfChoice.propTypes = {
  choiceResponse: PropTypes.string,
  titleNameProp: PropTypes.string,
  handleChange: PropTypes.func,
};

ListOfChoice.defaultProps = {
  choiceResponse: '',
  handleChange: () => {},
  titleNameProp: 'playerName',
};

export default ListOfChoice;
