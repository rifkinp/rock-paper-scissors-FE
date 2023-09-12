import React from 'react';
import { render, screen } from '@testing-library/react';
import FormGameHistory from '../FormGameHistory'; 

describe('FormGameHistory Component', () => {
  test('renders the Game History title', () => {
    render(<FormGameHistory />);

    expect(screen.getByText('Game History')).toBeInTheDocument();
  });

});