import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import FormRegistration from '../FormRegistration.jsx';

test('tampilan username, email dan password di form registration', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <FormRegistration />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
});

test('cek auth text login dibawah', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <FormRegistration />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText('Already have an account?')).toBeInTheDocument();
  expect(screen.getByText('Login here')).toBeInTheDocument();
  expect(screen.getByText('Login here').closest('a')).toHaveAttribute(
    'href',
    '/login'
  );
});

test('cek label text dan tipenya di button', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <FormRegistration />
      </BrowserRouter>
    </Provider>
  );
  const registrationButton = screen.getByTestId('submit-form-btn');
  expect(registrationButton).toHaveAttribute('type', 'submit');
});
