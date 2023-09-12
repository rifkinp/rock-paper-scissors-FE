import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login.jsx';

jest.mock('axios');
test('Login Page should show this element', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );

  const loginTilte = screen.getByText('Log in');
  const usernameInput = screen.getByPlaceholderText('Username');
  const passwordInput = screen.getByPlaceholderText('Password');
  const registerButton = screen.getByTestId('submit-form-btn');

  expect(loginTilte).toBeInTheDocument();
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  expect(usernameInput.value).toBe('testuser');
  expect(passwordInput.value).toBe('testpassword');
});
