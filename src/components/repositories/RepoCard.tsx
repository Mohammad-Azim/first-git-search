import React from 'react';
import { Card, CardContent, Typography, Chip, Avatar, CardHeader, Box } from '@mui/material';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface RepoCardProps {
    repo: Repo;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
    return (
        <Card key={repo.id} sx={{ width: 300, margin: 2 }}>
            <CardHeader
                avatar={<Avatar src={repo.owner?.avatar_url} />}
                title={repo.owner?.login}
                titleTypographyProps={{ fontSize: '1rem' }}
                subheader={<a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>}
                subheaderTypographyProps={{ fontSize: '0.875rem' }}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {repo.description}
                </Typography>
                {repo.language && <Chip label={repo.language} size="small" sx={{ mt: 1 }} />}
            </CardContent>
        </Card>
    );
};

export default RepoCard;
