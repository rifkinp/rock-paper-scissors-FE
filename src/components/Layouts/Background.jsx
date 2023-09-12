import React from 'react';
import { PropTypes } from 'prop-types';

function Background({ children }) {
  return (
    <div
      className="w-full h-screen bg-[#feecbc] flex flex-col items-center justify-center"
      data-testid="bg-element"
    >
      {children}
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.node,
};

Background.defaultProps = {
  children: null,
};

export default Background;
