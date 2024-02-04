import React from 'react';

import Box from '@mui/material/Box';

import RepoCard from '@/components/repositories/RepoCard';

const RepoList: React.FC<any> = ({ repos }) => {
    return (
        <Box display="flex" flexWrap="wrap" justifyContent="center">
            {repos.map((repo: any) => (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </Box>
    );
};

export default RepoList;
