import React from 'react';
import { PropTypes } from 'prop-types';
import { YellowBtnSha, YellowBtnTop } from '../../assets';

function ButtonYellow({ labelBtnYlw, handleClick, onSubmit, type }) {
  return (
    <div>
      <button
        className="group relative w-[180px] h-[40px] bg-transparent border-none outline-none"
        onClick={handleClick}
        type={type === 'submit' ? 'submit' : 'button'}
        onSubmit={onSubmit}
        data-testid="submit-form-btn"
      >
        <img
          className="absolute top-[0px] left-[0px] w-full h-[50px] group-active:h-[48px] group-active:top-[2.5px]"
          src={YellowBtnSha}
          alt=""
        />
        <img
          className="absolute top-[1px] left-[2px] w-[175px] h-[44px] group-active:top-[4px]"
          src={YellowBtnTop}
          alt=""
        />
        <p className="relative flex justify-center top-[0px] left-[-10px] w-[200px] text-[20px] text-[#f5f5f5] font-['Cherry_Bomb_One'] group-hover:text-black group-active:top-[3px]">
          {labelBtnYlw}
        </p>
      </button>
    </div>
  );
}

ButtonYellow.propTypes = {
  labelBtnYlw: PropTypes.string,
  handleClick: PropTypes.func,
  onSubmit: PropTypes.func,
  type: PropTypes.string,
};

ButtonYellow.defaultProps = {
  labelBtnYlw: 'Click Me',
  handleClick: () => {},
  onSubmit: () => {},
  type: 'button',
};

export default ButtonYellow;
