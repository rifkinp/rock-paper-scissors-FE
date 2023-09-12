import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { IconShadow } from '../../assets';

function NavbarButton({
  iconNvbrBtnPropAlt,
  iconNvbrBtnProp,
  textNvbrBtnProp,
  linkProp,
}) {
  return (
    <div className="group absolute w-fit h-fit">
      <img
        className="relative top-[3px] w-[50px] hover:cursor-pointer "
        src={IconShadow}
        alt=""
      />
      <Link to={linkProp}>
        <img
          className="absolute top-[0px] w-[50px] hover:cursor-pointer active:top-[2px]"
          src={iconNvbrBtnProp}
          alt={iconNvbrBtnPropAlt}
          data-testid="img-element"
        />
      </Link>
      <p className="absolute w-[50px] h-[20px] top-[57px] flex items-center justify-center text-center bg-[#faa61a] text-[#42210b] text-[10px] font-['Patua_One'] border-2 border-[#42210b] rounded-lg">
        {textNvbrBtnProp}
      </p>
    </div>
  );
}

NavbarButton.propTypes = {
  iconNvbrBtnProp: PropTypes.string,
  iconNvbrBtnPropAlt: PropTypes.string,
  textNvbrBtnProp: PropTypes.string,
  linkProp: PropTypes.string,
};

NavbarButton.defaultProps = {
  iconNvbrBtnProp: '../../assets/profile-button.png',
  iconNvbrBtnPropAlt: 'defaultAlt',
  textNvbrBtnProp: 'Profile',
  linkProp: '/dashboard/game-history',
};

export default NavbarButton;
