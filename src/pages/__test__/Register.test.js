import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import Register from '../Register.jsx';

jest.mock('axios');
test('Register Page should show this element', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>
  );

  const registrationTitle = screen.getByText('Registration');
  const usernameInput = screen.getByPlaceholderText('Username');
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const registerButton = screen.getByTestId('submit-form-btn');

  expect(registrationTitle).toBeInTheDocument();
  expect(usernameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  expect(usernameInput.value).toBe('testuser');
  expect(emailInput.value).toBe('test@example.com');
  expect(passwordInput.value).toBe('testpassword');
});
