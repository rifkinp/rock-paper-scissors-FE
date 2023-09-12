import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Label from '../Input/Label';
import Input from '../Input/Input';
import InputData from '../Input/Index';

  test('renders label with children', () => {
    render(<Label htmlFor="username" children="Username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  test('renders input with type and placeholder', () => {
    render(
      <Input
        name="username"
        className="custom-class"
        type="text"
        placeholder="Enter Username"
        onChange={() => {}}
      />
    );
    expect(screen.getByPlaceholderText('Enter Username')).toBeInTheDocument();
  });

  test('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    render(
      <Input
        name="username"
        className="custom-class"
        type="text"
        placeholder="Enter Username"
        onChange={handleChange}
      />
    );
    const input = screen.getByPlaceholderText('Enter Username');
    fireEvent.change(input, { target: { value: 'new-value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });


  test('renders label and input', () => {
    render(
      <InputData
        name="username"
        type="text"
        placeholder="Enter Username"
        variant="text-white"
        className="custom-class"
        onChange={() => {}}
        label="Username"
      />
    );
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Username')).toBeInTheDocument();
  });