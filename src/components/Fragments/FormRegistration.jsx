import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EmailIcon, PasswordIcon, UsernameIcon, HomeIcon } from '../../assets';
import AuthInput from '../Elements/AuthInput';
import Gap from '../Elements/Gap';
import ButtonYellow from '../Elements/ButtonYellow';
import AuthTitle from '../Elements/AuthTitle';
import AuthBox from '../Elements/AuthBox';
import AuthText from '../Elements/AuthText';
import BackButton from '../Elements/BackButton';
import { fetchRegister } from '../../redux/registerSlice';

function FormRegistration() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.register.isLoading);
  const error = useSelector((state) => state.register.error);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const { username, email, password } = e.target;
    const data = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    dispatch(fetchRegister(data));
  };

  useEffect(() => {
    if (!isLoading && !error) {
      navigate('/login');
    }
  }, [isLoading, error, navigate]);

  // if (!isLoading && !error) {
  //   navigate('/login');
  // }

  return (
    <AuthBox>
      <div className="flex flex-col justify-center items-center w-3/5">
        <div className="relative w-full h-[20px] flex">
          <div className="absolute w-full h-full top-[-30px] left-[-80px] flex justify-center items-center">
            <BackButton
              iconBckBtnProp={HomeIcon}
              textBckBtnProp="Back to Home"
              linkProp="/"
            />
          </div>
        </div>
        <AuthTitle title="Registration" />
        <Gap height={30} />

        {error && <div className="text-white font-semibold">{error}</div>}
        {isLoading && <div>Loading...</div>}

        <form onSubmit={handleRegister} data-testid="register-form">
          <AuthInput
            iconProp={UsernameIcon}
            placeHolderProp="Username"
            name="username"
            typeProp="text"
          />

          <Gap height={15} />
          <AuthInput
            iconProp={EmailIcon}
            placeHolderProp="Email"
            typeProp="email"
            name="email"
          />
          <Gap height={15} />
          <AuthInput
            iconProp={PasswordIcon}
            placeHolderProp="Password"
            typeProp="password"
            name="password"
          />
          <Gap height={40} />
          <ButtonYellow
            labelBtnYlw="Register"
            type="submit"
            disabled={isLoading}
          />
        </form>
        <Gap height={50} />
        <AuthText
          frontTextProp="Already have an account?"
          backTextProp="Login here"
          linkProp="/login"
        />
      </div>
    </AuthBox>
  );
}

export default FormRegistration;
