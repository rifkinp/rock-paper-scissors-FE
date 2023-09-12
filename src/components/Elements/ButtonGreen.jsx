import React from 'react';
import { PropTypes } from 'prop-types';
import { GreenBtnSha, GreenBtnTop } from '../../assets';

function ButtonGreen({ handleClick, labelBtnGrn, type }) {
  return (
    <div>
      <button
        className="group relative w-[130px] h-[40px] bg-transparent border-none outline-none"
        onClick={handleClick}
        type={type === 'submit' ? 'submit' : 'button'}
        data-testid="button-back"
      >
        <img
          className="absolute top-0 left-0 w-[130px] h-auto"
          src={GreenBtnSha}
          alt=""
        />
        <img
          className="absolute top-[1px] left-[4.5px] w-[120px] h-auto group-active:top-[5px]"
          src={GreenBtnTop}
          alt=""
        />
        <p className="relative flex justify-center top-[-5px] text-[30px] text-white font-['Cherry_Bomb_One'] group-hover:text-white group-active:top-[0px]">
          {labelBtnGrn}
        </p>
      </button>
    </div>
  );
}

ButtonGreen.propTypes = {
  handleClick: PropTypes.func,
  labelBtnGrn: PropTypes.string,
  type: PropTypes.string,
};

ButtonGreen.defaultProps = {
  handleClick: () => {},
  labelBtnGrn: 'Submit',
  type: 'button', //
};

export default ButtonGreen;
