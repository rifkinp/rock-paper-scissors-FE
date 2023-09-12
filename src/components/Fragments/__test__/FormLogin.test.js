import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import FormLogin from '../FormLogin';

test('tampilan username dan password di form', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <FormLogin />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
});

test('cek auth text register dibawah', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <FormLogin />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
  expect(screen.getByText('Register here')).toBeInTheDocument();
  expect(screen.getByText('Register here').closest('a')).toHaveAttribute(
    'href',
    '/register',
  );
});

test('cek label text dan tipenya di button', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <FormLogin />
      </BrowserRouter>
    </Provider>,
  );
  const loginButton = screen.getByTestId('submit-form-btn');
  expect(loginButton).toHaveAttribute('type', 'submit');
});
