/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { PropTypes } from 'prop-types';

function Image({ imageProp, alt, handleChange }) {
  return (
    <img
      className='w-[80px] hover:scale-[1.3] hover:cursor-pointer'
      src={imageProp}
      alt={alt}
      onClick={handleChange}
      data-testid='image-element'
    />
  );
}

Image.propTypes = {
  imageProp: PropTypes.string,
  alt: PropTypes.string,
  handleChange: PropTypes.func,
};

Image.defaultProps = {
  imageProp: '../../Assets/batu.png',
  alt: 'defaultImageAlt',
  handleChange: () => {},
};

export default Image;
