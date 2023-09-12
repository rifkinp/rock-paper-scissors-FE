import React from 'react';
import { render, screen } from '@testing-library/react';
import InputRoom from '../InputRoom';

test('should render text on create room page remark', () => {
  render(<InputRoom />);

  expect(screen.getByText('Please input the room name you want to create')).toBeInTheDocument();
  expect(screen.getByAltText('box')).toBeInTheDocument();
});
