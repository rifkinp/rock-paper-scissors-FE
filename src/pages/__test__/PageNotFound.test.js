import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ButtonYellow from '../../Components/Elements/ButtonYellow';

test('renders ButtonYellow component with custom props and handle click event', () => {
  const handleClick = jest.fn();
  render(<ButtonYellow labelBtnYlw='Go Back' handleClick={handleClick} type='Go Back' />);

  const buttonElement = screen.getByRole('button');
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalled();
});
