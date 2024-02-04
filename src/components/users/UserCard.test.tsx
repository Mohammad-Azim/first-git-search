import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

const mockUser = {
    login: 'mockUserLogin',
    avatar_url: 'http://example.com/avatar.png',
    html_url: 'http://example.com/profile',
};

describe('UserCard', () => {
    it('renders user information correctly', () => {
        render(<UserCard user={mockUser} />);

        const avatarElement = screen.getByAltText(mockUser.login);
        expect(avatarElement).toHaveAttribute('src', mockUser.avatar_url);

        expect(screen.getByText(mockUser.login)).toBeInTheDocument();

        const buttonElement = screen.getByRole('link', { name: 'Visit Profile' });
        expect(buttonElement).toHaveAttribute('href', mockUser.html_url);
    });

    it('displays the GitHub profile text', () => {
        render(<UserCard user={mockUser} />);
        expect(screen.getByText('GitHub Profile:')).toBeInTheDocument();
    });
});
