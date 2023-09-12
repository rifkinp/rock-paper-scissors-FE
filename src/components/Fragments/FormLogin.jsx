import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HomeIcon, PasswordIcon, UsernameIcon } from '../../Assets';
import AuthInput from '../Elements/AuthInput';
import Gap from '../Elements/Gap';
import ButtonYellow from '../Elements/ButtonYellow';
import AuthTitle from '../Elements/AuthTitle';
import AuthBox from '../Elements/AuthBox';
import AuthText from '../Elements/AuthText';
import BackButton from '../Elements/BackButton';
import { fetchLogin } from '../../redux/loginSlice';

function FormLogin() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.login.isLoading);
  const error = useSelector((state) => state.login.error);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { username, password } = e.target;
    const data = {
      username: username.value,
      password: password.value,
    };
    dispatch(fetchLogin(data));
  };
  if (!isLoading && !error) {
    navigate('/dashboard');
  }

  return (
    <AuthBox>
      <div className='flex flex-col justify-center items-center w-3/5'>
        <div className='relative w-full h-[20px] flex'>
          <div className='absolute w-full h-full top-[-10px] left-[-10px] flex justify-center items-center'>
            <BackButton
              iconBckBtnProp={HomeIcon}
              textBckBtnProp='Back to Home'
              linkProp='/'
            />
          </div>
        </div>

        <AuthTitle title='Log in' />
        <Gap height={30} />
        {error && <div className='text-white font-semibold'>{error}</div>}
        {isLoading && <div>Loading...</div>}
        <form onSubmit={handleLogin}>
          <AuthInput
            iconProp={UsernameIcon}
            placeHolderProp='Username'
            name='username'
            typeProp='text'
          />
          <Gap height={15} />
          <AuthInput
            iconProp={PasswordIcon}
            placeHolderProp='Password'
            name='password'
            typeProp='password'
          />

          <Gap height={40} />
          <ButtonYellow
            labelBtnYlw='Login'
            // onSubmit={handleLogin}
            type='submit'
            disabled={isLoading}
          />
        </form>
        <Gap height={50} />
        <AuthText
          frontTextProp="Don't have an account?"
          backTextProp='Register here'
          linkProp='/register'
        />
      </div>
    </AuthBox>
  );
}

export default FormLogin;
