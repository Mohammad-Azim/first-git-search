import React from 'react';

import Box from '@mui/material/Box';

import UserCard from '@/components/users/UserCard';

const UserList: React.FC<any> = ({ users }) => {
    return (
        <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
            {users.map((user: any) => (
                <UserCard key={user.id} user={user} />
            ))}
        </Box>
    );
};

export default UserList;
