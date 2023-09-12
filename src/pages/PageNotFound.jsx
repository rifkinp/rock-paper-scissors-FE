import React from 'react';
import { Link } from 'react-router-dom';
import { BgPageNotFound } from '../Assets';
import ButtonYellow from '../Components/Elements/ButtonYellow';
import Gap from '../Components/Elements/Gap';

function PageNotFound() {
  return (
    <div
      className='pb-[70px] w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center'
      style={{ backgroundImage: `url(${BgPageNotFound})` }}
    >
      <Gap height={700} />
      <Link to='/'>
        <ButtonYellow labelBtnYlw='Go Back' />
      </Link>
    </div>
  );
}

export default PageNotFound;
