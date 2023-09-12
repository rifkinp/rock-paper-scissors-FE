import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { IconShadow } from '../../assets';

function BackButton({
  iconBckBtnProp, textBckBtnProp, linkProp,
}) {
  return (
    <div className="fixed h-fit w-fit top-[15px] left-[15px]">
      <img
        className="relative top-[3px] w-[30px]  "
        src={IconShadow}
        alt=""
      />
      <Link to={linkProp}>
        <img
          className="absolute top-[0px] w-[30px] hover:cursor-pointer active:top-[2px]"
          src={iconBckBtnProp}
          alt=""
          data-testid="img-icon-element"
        />
      </Link>
      <p className="absolute top-[5px] left-[33px] w-[90px] px-[10px] h-[20px] flex justify-center items-center bg-[#faa61a] text-[#42210b] text-center text-[10px] font-['Patua_One'] border-2 border-[#42210b] rounded-lg hover:cursor-default">
        {textBckBtnProp}
      </p>
    </div>
  );
}

BackButton.propTypes = {
  iconBckBtnProp: PropTypes.string,
  textBckBtnProp: PropTypes.string,
  linkProp: PropTypes.string,
};

BackButton.defaultProps = {
  iconBckBtnProp: IconShadow,
  textBckBtnProp: 'Back',
  linkProp: '/',
};

export default BackButton;
