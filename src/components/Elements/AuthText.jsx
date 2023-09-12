import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FormLogin({ frontTextProp, backTextProp, linkProp }) {
  return (
    <div className="font-['Patua_One'] text-[12px]">
      {frontTextProp}
      {' '}
      <span className="text-[#1a3459] underline">
        <Link to={linkProp}>{backTextProp}</Link>
      </span>
    </div>
  );
}

FormLogin.propTypes = {
  frontTextProp: PropTypes.string,
  backTextProp: PropTypes.string,
  linkProp: PropTypes.string,
};

FormLogin.defaultProps = {
  frontTextProp: 'Default Front Text',
  backTextProp: 'Default Back Text',
  linkProp: '/default-link',
};

export default FormLogin;
