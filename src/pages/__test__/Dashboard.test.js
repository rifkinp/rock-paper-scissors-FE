import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../Dashboard';

// Mocking localStorage
const mockLocalStorage = {
  getItem: jest.fn((key) => key === 'accessToken' && 'test-access-token'),
  setItem: jest.fn(),
  clear: jest.fn(),
};

describe('Dashboard', () => {
  beforeAll(() => {
    // Replacing the localStorage object with our mock
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
    });
  });

  beforeEach(() => {
    localStorage.setItem('accessToken', 'test-access-token');
  });

  test('should render DashboardNavbar', () => {
    render(
      <Router>
        <Dashboard />
      </Router>
    );

    // Check for the existence of static elements
    expect(screen.getByText('PLAYER VS COMPUTER')).toBeInTheDocument();
    expect(screen.getByText('CREATE NEW ROOM')).toBeInTheDocument();
    expect(screen.getByText('Sort By:')).toBeInTheDocument();
  });
});
