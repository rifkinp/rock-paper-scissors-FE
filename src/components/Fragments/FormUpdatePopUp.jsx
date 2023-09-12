/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../Elements/Button/Button';
import Input from '../Elements/Input/Input';

function FormUpdatePopUp(props) {
  const {
    visible,
    onClose,
    onFormSubmit,
    username,
    fullname,
    address,
    phoneNumber,
    email,
  } = props;
  const token = localStorage.getItem('accessToken');

  if (!visible) return null;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const updatefullname = e.target[2].value || fullname;
    const updateAddress = e.target[4].value || address;
    const updatePhone = e.target[3].value || phoneNumber;
    try {
      await axios.put(
        'https://chapter-platinum-team-2-koet.vercel.app/user/updatebio',
        {
          fullname: updatefullname,
          address: updateAddress,
          phoneNumber: updatePhone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      onFormSubmit();
      onClose();
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Harap mengisi seluruh informasi');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <form
        className="w-full max-w-sm p-4 flex flex-col bg-stone-900 rounded-lg"
        onSubmit={handleFormSubmit}
      >
        <span className="text-sm text-[#fff5ca] font-['Chicle'] p-0 m-0">
          User ID :
        </span>
        <Input
          className="px-3 bg-[#fff5ca] text-xl text-black opacity-100 border-0 font-['Chicle'] enabled:opacity-80 mb-2"
          name="username"
          placeholder={username || ''}
          type="text"
          disabled="true"
        />
        <span className="text-sm text-[#fff5ca] font-['Chicle'] p-0 m-0">
          Email :
        </span>
        <Input
          className="px-3 bg-[#fff5ca] text-xl text-black opacity-100 border-0 font-['Chicle'] enabled:opacity-80 mb-2"
          name="email"
          placeholder={email || ''}
          disabled="true"
          type="email"
        />
        <span className="text-sm text-[#fff5ca] font-['Chicle'] p-0 m-0">
          Full Name :
        </span>
        <Input
          className="px-3 bg-[#fff5ca] text-xl text-black opacity-100 border-0 font-['Chicle'] enabled:opacity-80 mb-2"
          name="fullName"
          placeholder={fullname || ''}
          type="text"
        />
        <span className="text-sm text-[#fff5ca] font-['Chicle'] p-0 m-0">
          Phone Number :
        </span>
        <Input
          className="px-3 bg-[#fff5ca] text-xl text-black opacity-100 border-0 font-['Chicle'] enabled:opacity-80 mb-2"
          name="phoneNumber"
          placeholder={phoneNumber || ''}
          type="text"
        />
        <span className="text-sm text-[#fff5ca] font-['Chicle'] p-0 m-0">
          Address :
        </span>
        <Input
          className="px-3 bg-[#fff5ca] text-xl text-black opacity-100 border-0 font-['Chicle'] enabled:opacity-80 mb-2"
          name="address"
          placeholder={address || ''}
          type="text"
        />
        <div className="flex justify-center gap-4">
          <Button
            variant="bg-[#9e5022]"
            title="Submit"
            onClick={onFormSubmit}
          />
          <Button variant="bg-[#9e5022]" title="Cancel" onClick={onClose} />
        </div>
      </form>
    </div>
  );
}

FormUpdatePopUp.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onFormSubmit: PropTypes.func,
  username: PropTypes.string,
  fullname: PropTypes.string,
  address: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
};

FormUpdatePopUp.defaultProps = {
  visible: false,
  onClose: () => {},
  onFormSubmit: () => {},
  username: '',
  fullname: '',
  address: '',
  phoneNumber: '',
  email: '',
};

export default FormUpdatePopUp;
