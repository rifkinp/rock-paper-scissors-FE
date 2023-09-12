import React from 'react';
import { render, screen } from '@testing-library/react';
import GameNavbar from '../GameNavbar';
import { BrowserRouter } from 'react-router-dom';

test('should render back button on every game room', () => {
  render(
    <BrowserRouter>
      <GameNavbar />
    </BrowserRouter>
  );

  const images = screen.getByTestId('img-element');
  expect(images).toBeInTheDocument();
});
