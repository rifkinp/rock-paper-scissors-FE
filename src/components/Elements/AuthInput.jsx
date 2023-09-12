import React from 'react';
import PropTypes from 'prop-types';

function AuthInput({
  iconProp,
  typeProp,
  placeHolderProp,
  name,
  handleChange,
}) {
  return (
    <div className="group relative w-full h-[50px] border-b-[2px] border-[#64481a]">
      <span>
        <img
          className="absolute right-[8px] top-[13px] w-[20px] h-auto text-sm"
          src={iconProp}
          alt=""
          data-testid="icon-element"
        />
      </span>
      <input
        type={typeProp}
        placeholder={placeHolderProp}
        className="absolute w-4/5 top-[15px] text-[#64481a] font-['Chicle'] placeholder:text-[#64481a] placeholder:font-['Chicle'] tracking-[1px] bg-transparent focus:outline-none"
        name={name}
        onChange={handleChange}
      />
      <div className="absolute top-[52px] text-[#64481a] text-[12px] font-['Patua_One']" />
    </div>
  );
}

AuthInput.propTypes = {
  iconProp: PropTypes.string,
  typeProp: PropTypes.string,
  placeHolderProp: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
};

AuthInput.defaultProps = {
  iconProp: 'image.png',
  typeProp: 'text',
  placeHolderProp: 'Enter something',
  name: 'myInput',
  handleChange: () => {},
};

export default AuthInput;
