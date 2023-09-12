import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button/Button';

  test('renders with default properties', () => {
    render(<Button />);

    const defaultButton = screen.getByText('...');
    expect(defaultButton).toBeInTheDocument();
    expect(defaultButton).toHaveClass('bg-red-300');
  });

  test('renders with custom properties', () => {
    render(<Button variant="bg-blue-300" title="Click Me!" type="submit" />);

    const customButton = screen.getByText('Click Me!');
    expect(customButton).toBeInTheDocument();
    expect(customButton).toHaveClass('bg-blue-300');
    expect(customButton.type).toBe('submit');
  });

  test('triggers onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} title="Click Me!" />);

    const button = screen.getByText('Click Me!');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });