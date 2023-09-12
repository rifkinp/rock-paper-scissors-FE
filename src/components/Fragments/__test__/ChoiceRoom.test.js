import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ChoiceRoom from '../ChoiceRoom';

test('menampilkan ChoiceRoom dengan pilihan default', () => {
  render(<ChoiceRoom choiceResponse="" />);

  expect(screen.getByText('Please pick your choice')).toBeInTheDocument();
  expect(screen.getByAltText('batu')).toBeInTheDocument();
  expect(screen.getByAltText('gunting')).toBeInTheDocument();
  expect(screen.getByAltText('kertas')).toBeInTheDocument();
});

test('memeriksa fungsi onClick saat batu diklik', () => {
  const handleClick = jest.fn();
  render(<ChoiceRoom choiceResponse="" handleClick={handleClick} />);

  fireEvent.click(screen.getByAltText('batu'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('memeriksa fungsi onClick saat gunting diklik', () => {
  const handleClick = jest.fn();
  render(<ChoiceRoom choiceResponse="" handleClick={handleClick} />);

  fireEvent.click(screen.getByAltText('gunting'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('memeriksa fungsi onClick saat kertas diklik', () => {
  const handleClick = jest.fn();
  render(<ChoiceRoom choiceResponse="" handleClick={handleClick} />);

  fireEvent.click(screen.getByAltText('kertas'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

