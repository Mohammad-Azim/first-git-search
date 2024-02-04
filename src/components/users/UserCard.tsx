import React from 'react';

import { Card, CardContent, Typography, Avatar, CardHeader, Button } from '@mui/material';

interface User {
    login: string;
    avatar_url: string;
    html_url: string;
}

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <Card sx={{ width: 300, m: 1 }}>
            <CardHeader
                avatar={<Avatar src={user.avatar_url} alt={user.login} />}
                title={user.login}
                titleTypographyProps={{ fontSize: '1.1rem', fontWeight: 'bold' }}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" component="p" gutterBottom>
                    GitHub Profile:
                </Typography>
                <Button variant="outlined" color="primary" href={user.html_url} target="_blank">
                    Visit Profile
                </Button>
            </CardContent>
        </Card>
    );
};

export default UserCard;
