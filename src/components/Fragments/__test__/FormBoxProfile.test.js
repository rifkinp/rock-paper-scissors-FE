import React from 'react';
import { render, screen } from '@testing-library/react';
import FormBoxProfile from '../FormBoxProfile'; 

  test('box tampil dengan benar', () => {
    render(<FormBoxProfile />);

    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
