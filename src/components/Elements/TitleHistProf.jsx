import React from 'react';
import { PropTypes } from 'prop-types';
import { Ribbon } from '../../assets';

function TitleHistProf({ labelBoxTitle }) {
  return (
    <div className="relative w-[300px] h-[30px] flex items-center justify-center">
      <img className="absolute top-[0px] w-[300px] h-[90px]" src={Ribbon} alt="" />
      <p className="absolute w-[280px] top-[10px] font-['Cherry_Bomb_One'] text-[30px] text-center text-white cursor-default">
        {labelBoxTitle}
      </p>
    </div>
  );
}

TitleHistProf.propTypes = {
  labelBoxTitle: PropTypes.string,
};

TitleHistProf.defaultProps = {
  labelBoxTitle: 'defaultBoxTitle',
};

export default TitleHistProf;
