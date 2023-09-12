import React from 'react';
import { PropTypes } from 'prop-types';

function AuthBox({ children }) {
  return (
    <div
      className="relative w-[400px] h-[500px] rounded-[20px] border-solid border-2 border-white/50 backdrop-blur-sm flex flex-col justify-center items-center"
      data-testid="auth-box"
    >
      {children}
    </div>
  );
}

AuthBox.propTypes = {
  // children: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

AuthBox.defaultProps = {
  children: 'AuthBox',
};
export default AuthBox;
