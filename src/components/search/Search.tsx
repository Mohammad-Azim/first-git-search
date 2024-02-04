"use client";

import { useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import debounce from 'lodash/debounce';

import { Box } from '@mui/material';

import { searchStore } from '@/store/SearchStore';
import SearchBar from '@/components/search/SearchBar';
import SearchType from '@/components/search/SearchType';

const Search = observer(() => {

    const debouncedSearch = useCallback(debounce(() => {
        if (searchStore.query) {
            searchStore.searchGitHub();
        }
    }, 350), [searchStore]);

    useEffect(() => {
        debouncedSearch();
        return () => debouncedSearch.cancel();
    }, [searchStore.query, debouncedSearch]);

    function handleSearch(newQuery: string): void {
        searchStore.setQuery(newQuery);
    }

    function clearSearch(): void {
        searchStore.setQuery('');
    }

    return (
        <Box>
            <SearchType/>
            <SearchBar query={searchStore.query} handleSearch={handleSearch} clearSearch={clearSearch} />
        </Box>
    );
});

export default Search;

