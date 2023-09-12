import React from 'react';
import { render, screen } from '@testing-library/react';
import FormGameHistory from '../FormGameHistory';

  test('render judul form game history', () => {
    render(<FormGameHistory />);

    expect(screen.getByText('Game History')).toBeInTheDocument();
  });
