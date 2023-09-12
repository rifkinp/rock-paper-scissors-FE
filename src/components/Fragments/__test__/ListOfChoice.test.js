import React from 'react';
import ListOfChoice from '../ListOfChoice';
import { render, screen, fireEvent } from '@testing-library/react';

test('should render ListOfChoice default', () => {
  render(<ListOfChoice />);

  expect(screen.getByText('playerName')).toBeInTheDocument();
  expect(screen.getByAltText('batu')).toBeInTheDocument();
  expect(screen.getByAltText('gunting')).toBeInTheDocument();
  expect(screen.getByAltText('kertas')).toBeInTheDocument();
});

test('testing handleChange function on rock', () => {
  const handleChange = jest.fn();
  render(<ListOfChoice choiceResponse="" handleChange={handleChange} />);

  fireEvent.click(screen.getByAltText('batu'));
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test('testing handleChange function on scissors', () => {
  const handleChange = jest.fn();
  render(<ListOfChoice choiceResponse="" handleChange={handleChange} />);

  fireEvent.click(screen.getByAltText('gunting'));
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test('testing handleChange function on paper', () => {
  const handleChange = jest.fn();
  render(<ListOfChoice choiceResponse="" handleChange={handleChange} />);

  fireEvent.click(screen.getByAltText('kertas'));
  expect(handleChange).toHaveBeenCalledTimes(1);
});
