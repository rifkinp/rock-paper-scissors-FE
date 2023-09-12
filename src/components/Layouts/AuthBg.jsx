import React from 'react';
import { PropTypes } from 'prop-types';
import { MainBg } from '../../Assets';

function AuthBg({ children }) {
  return (
    <div
      className='w-full h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${MainBg})` }}
      data-testid='auth-bg'
    >
      {children}
    </div>
  );
}

AuthBg.propTypes = {
  // children: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

AuthBg.defaultProps = {
  children: 'AuthBg',
};
export default AuthBg;
