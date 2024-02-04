import React, { useEffect, useState } from 'react';

import { Card, CardContent, Typography, Chip, Avatar, CardHeader } from '@mui/material';

import ForkedBy from '@/components/repositories/ForkedBy';

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
    full_name: string;
}

interface RepoCardProps {
    repo: Repo;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {

    const [open, setOpen] = useState(false);
    const [forkers, setForkers] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (open) {
            const fetchForkers = async () => {
                const url = `https://api.github.com/repos/${repo.full_name}/forks?per_page=3`;
                const response = await fetch(url);
                const data = await response.json();
                setForkers(data);
            };

            fetchForkers();
        }
    }, [open, repo.full_name]);

    return (
            <>
                <Card sx={{ width: 300, m: 1, cursor: 'pointer' }} onClick={handleOpen}>
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
                <ForkedBy open={open} handleClose={handleClose} forkers={forkers as []}  />
        </>
    );
};

export default RepoCard;