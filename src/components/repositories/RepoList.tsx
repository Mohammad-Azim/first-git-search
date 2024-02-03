import React from 'react';
import RepoCard from './RepoCard';
import Box from '@mui/material/Box';

interface RepoListProps {
    repos: Array<{
        id: number;
        name: string;
        description: string;
        html_url: string;
        language: string;
        owner: {
            login: string;
            avatar_url: string;
        };
    }>;
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
    return (
        <Box display="flex" flexWrap="wrap" justifyContent="center">
            {repos.map(repo => (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </Box>
    );
};

export default RepoList;
