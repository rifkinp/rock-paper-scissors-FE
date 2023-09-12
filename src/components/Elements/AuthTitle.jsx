import React from 'react';
import { PropTypes } from 'prop-types';

function AuthTitle({ title }) {
  return (
    <p className="flex justify-center items-center text-[45px] font-['Cherry_Bomb_One'] text-white cursor-default">
      {title}
    </p>
  );
}

AuthTitle.propTypes = {
  title: PropTypes.string,
};

AuthTitle.defaultProps = {
  title: 'Title',
};
export default AuthTitle;
