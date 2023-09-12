import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import DashboardNavbar from '../DashboardNavbar';

jest.mock('jwt-decode');
const token = 'token.jwt.testing';

test('menampilkan DashboardNavbar dengan email pengguna yang benar', () => {
  const decodedJWT = { email: 'user@example.com' };
  jwtDecode.mockReturnValue(decodedJWT);
  localStorage.setItem('accessToken', token);

  render(
    <Router>
      <DashboardNavbar />
    </Router>
  );

  expect(screen.getByText('RPS Game')).toBeInTheDocument();
  expect(screen.getByText('user@example.com')).toBeInTheDocument();
  expect(screen.getByText('Profile')).toBeInTheDocument();
  expect(screen.getByText('Logout')).toBeInTheDocument();
});

test('memeriksa fungsionalitas tombol logout', () => {
  const decodedJWT = { email: 'user@example.com' };
  jwtDecode.mockReturnValue(decodedJWT);
  const token = 'fake-access-token';
  localStorage.setItem('accessToken', token);

  render(
    <Router>
      <DashboardNavbar />
    </Router>
  );

  fireEvent.click(screen.getByText('Logout'));

});

