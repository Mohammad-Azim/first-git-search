import React from 'react';
import Box from '@mui/material/Box';
import UserCard from './UserCard';

interface UserListProps {
    users: Array<{
        id: number,
        login: string;
        avatar_url: string;
        html_url: string;
    }>;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </Box>
    );
};

export default UserList;
