import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';

describe('UserList', () => {
  const mockUsers = [
    { id: '1', login: 'user1', avatar_url: 'http://example.com/avatar1.png', html_url: 'http://example.com/profile1' },
    { id: '2', login: 'user2', avatar_url: 'http://example.com/avatar2.png', html_url: 'http://example.com/profile2' },
  ];

  it('renders a list of UserCard components for each user', () => {
    render(<UserList users={mockUsers} />);

    mockUsers.forEach((user) => {
      expect(screen.getByText(user.login)).toBeInTheDocument();
      expect(screen.getByAltText(user.login)).toBeInTheDocument();
    });

    const userCards = screen.getAllByRole('link', { name: 'Visit Profile' });
    expect(userCards.length).toBe(mockUsers.length);
  });
});
