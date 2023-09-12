import React from 'react';
import { PropTypes } from 'prop-types';
import { RectangleHorz } from '../../assets';

function BoxGameHistory({ children }) {
  return (
    <div>
      <img className="relative h-full w-full" src={RectangleHorz} alt="box" />
      {children}
    </div>
  );
}

BoxGameHistory.propTypes = {
  children: PropTypes.node,
};

BoxGameHistory.defaultProps = {
  children: null, 
};


export default BoxGameHistory;
