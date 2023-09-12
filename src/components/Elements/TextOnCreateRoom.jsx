import React from 'react';
import { PropTypes } from 'prop-types';

function TextOnCreateRoom({ text }) {
  return (
    <div>
      <p className="w-full flex justify-center items-center font-['Chicle'] text-[25px] cursor-default">
        {text}
      </p>
    </div>
  );
}

TextOnCreateRoom.propTypes = {
  text: PropTypes.string,
};

TextOnCreateRoom.defaultProps = {
  text: 'defaultText',
};

export default TextOnCreateRoom;
