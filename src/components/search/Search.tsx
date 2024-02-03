"use client"

import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import SearchType from './SearchType';
import { API_ENDPOINTS, SearchingType } from '../../../env';
import RepoList from '../repositories/RepoList';
import UserList from '../users/UserList';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchingType>('repositories');
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQuery) {
        fetchData();
      }
    }, 500);

    const fetchUrl = `${API_ENDPOINTS[searchType]}?q=${encodeURIComponent(searchQuery)}&page=1&per_page=10`;
  
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const data: any = await response.json();
        setData(data);
        console.log(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    return () => {
        clearTimeout(handler);
    };
  }, [searchQuery, searchType]);

  function handleSearch(newQuery: string): void {
    setSearchQuery(newQuery);
  }

  function handleSearchTypeChange(newSearchType: SearchingType): void {
    setSearchType(newSearchType);
  }

  function clearSearch(): void {
    setSearchQuery('');
  }  


  return (
    <Box>
      <SearchType searchType={searchType} handleSearchTypeChange={handleSearchTypeChange} />
      <SearchBar query={searchQuery} handleSearch={handleSearch} clearSearch={clearSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          {/* Display your data here. The data structure will depend on the searchType */}
          {searchType === 'users' ? (
            <UserList users={data.items}/>
          ) : (
            <RepoList repos={data.items}/>
          )}
        </div>
      )}

    </Box>
  );
};

export default Search;