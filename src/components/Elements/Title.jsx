import React from 'react';
import { PropTypes } from 'prop-types';

function Title({ titleName }) {
  return (
    <div>
      <p className="text-center text-[#9e5022] text-[50px] font-['Cherry_Bomb_One'] tracking-[1px] cursor-default">
        {titleName}
      </p>
    </div>
  );
}

Title.propTypes = {
  titleName: PropTypes.string,
};

Title.defaultProps = {
  titleName: 'defaultTitleName',
};

export default Title;
