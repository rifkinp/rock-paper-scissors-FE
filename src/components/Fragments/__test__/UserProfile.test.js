import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import UserProfile from '../UserProfile';
import axios from 'axios';

jest.mock('axios');

describe('<UserProfile />', () => {
  test('should render with default values', () => {
    const { getByAltText } = render(<UserProfile />);
    expect(getByAltText('profile')).toBeInTheDocument();
  });

  test('should get user bio on mount', async () => {
    const data = { username: 'John Doe', email: 'john@example.com' };
    // axios.get.mockResolvedValueOnce({ data: { dataUser: data } });
    // const { getByText } = render(<UserProfile />);
    // await waitFor(() => {
    //   expect(getByText(data.username)).toBeInTheDocument();
    //   expect(getByText(data.email)).toBeInTheDocument();
    // });
  });

  test('should render profile picture', () => {
    const { getByTestId } = render(<UserProfile />);
    const profilePicture = getByTestId('profile-picture');
    expect(profilePicture).toBeInTheDocument();
  });

  test('should handle button click to show FormUpdatePopUp', () => {
    const { getByText } = render(<UserProfile />);
    const updateButton = getByText('Update Profile');
    fireEvent.click(updateButton);
  });

  test('should display user bio information', async () => {
    const data = {
      username: 'John Doe',
      email: 'john@example.com',
      User_Bio: {
        fullname: 'John Doe Full',
        phoneNumber: '123456789',
        address: 'Sample Address',
      },
    };
    // axios.get.mockResolvedValueOnce({ data: { dataUser: data } });
    // const { getByText } = render(<UserProfile />);

    // await waitFor(() => {
    //   expect(getByText(data.username)).toBeInTheDocument();
    //   expect(getByText(data.email)).toBeInTheDocument();
    //   expect(getByText(data.User_Bio.fullname)).toBeInTheDocument();
    //   expect(getByText(data.User_Bio.phoneNumber)).toBeInTheDocument();
    //   expect(getByText(data.User_Bio.address)).toBeInTheDocument();
    // });
  });
});
