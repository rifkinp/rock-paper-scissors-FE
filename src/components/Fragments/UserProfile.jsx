import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getDownloadURL, ref } from 'firebase/storage';
import Button from '../Elements/Button/Button';
import profileDefault from '../Assets/profile-default.svg';
import { storage } from '../../config/firebase.config';
import FormUpdatePopUp from './FormUpdatePopUp';

function UserProfile() {
  const token = localStorage.getItem('accessToken');

  const [showPopUp, setShowPopUp] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // displaying user bio
  const [dataUser, setDataUser] = useState([]);
  const [dataUserBio, setDataUserBio] = useState([]);

  // update user profile
  const [uploadPhoto, setUploadPhoto] = useState(null);
  const [uploadFirebase, setUploadFirebase] = useState(profileDefault);

  // GET USER BIO
  useEffect(() => {
    const fetchBios = async () => {
      try {
        const hasilDataBio = await axios.get(
          'https://chapter-platinum-team-2-koet.vercel.app/user/finduser',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const resultBio = hasilDataBio.data.dataUser;
        setDataUser(resultBio);
        const resultBioUser = hasilDataBio.data.dataUser.User_Bio;
        setDataUserBio(resultBioUser);
        const resultImageProfile = hasilDataBio?.data.dataUser.Profile_Picture?.link
        || profileDefault;
        setUploadFirebase(resultImageProfile);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };
    fetchBios();
  }, [token, formSubmitted]);

  const handleFormClose = () => {
    setShowPopUp(false);
    setFormSubmitted(false);
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="w-full items-center h-full flex flex-col justify-center">
      <div className="pt-2">
        <img
          src={uploadFirebase !== null ? uploadFirebase : profileDefault}
          className="w-20 h-20 mx-5"
          alt="profile"
          data-testid="profile-picture"
        />
      </div>

      <input
        type="file"
        data-testid="file-input"
        onChange={(e) => {
          setUploadPhoto(e.target.files[0]);
        }}
      />
      <button
        className="w-20 h-10"
        type="button"
        onClick={async () => {
          try {
            const imagePath = uploadPhoto.name;
            const imageRef = ref(storage, imagePath);

            // get the image link
            getDownloadURL(imageRef).then(async (res) => {
              const linkImages = await res;
              await axios.put(
                'https://chapter-platinum-team-2-koet.vercel.app/user/uploadprofile',
                {
                  link: linkImages,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                },
              );
              setUploadFirebase(linkImages);
            });
          } catch (error) {
            // eslint-disable-next-line no-alert
            alert('Tidak ada foto yang diupload');
          }
        }}
      >
        Submit
      </button>

      <div className="w-full h-full">
        <table className="w-full px-8 border-spacing-2 border-spacing-x-4 border-separate table-auto">
          <tbody>
            <tr className="break-all">
              <td>Username</td>
              <td>:</td>
              <td>{dataUser?.username || ''}</td>
            </tr>
            <tr className="break-all">
              <td>Fullname</td>
              <td>:</td>
              <td>{dataUserBio?.fullname || ''}</td>
            </tr>
            <tr className="break-all">
              <td>Email</td>
              <td>:</td>
              <td>{dataUser?.email || ''}</td>
            </tr>
            <tr className="break-all">
              <td>Phone</td>
              <td>:</td>
              <td>{dataUserBio?.phoneNumber || ''}</td>
            </tr>
            <tr className="break-all">
              <td>Address</td>
              <td>:</td>
              <td>{dataUserBio?.address || ''}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <FormUpdatePopUp
        visible={showPopUp}
        onClose={handleFormClose}
        onFormSubmit={handleFormSubmit}
        username={dataUser?.username}
        fullname={dataUserBio?.fullname}
        phoneNumber={dataUserBio?.phoneNumber}
        address={dataUserBio?.address}
        email={dataUser?.email}
      />
      <Button
        variant="bg-[#9e5022]"
        title="Update Profile"
        onClick={() => setShowPopUp(true)}
      />
    </div>
  );
}

export default UserProfile;
