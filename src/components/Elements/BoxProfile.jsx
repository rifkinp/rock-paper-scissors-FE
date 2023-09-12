import React from 'react';
import { PropTypes } from 'prop-types';
import { RectangleVert } from '../../Assets';

function BoxProfile({ children }) {
  return (
    <div>
      <img className='relative h-full w-full' src={RectangleVert} alt='box' />
      {children}
    </div>
  );
}

BoxProfile.propTypes = {
  children: PropTypes.node,
};

BoxProfile.defaultProps = {
  children: null,
};

export default BoxProfile;
