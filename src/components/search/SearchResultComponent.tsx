"use client"

import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import InfiniteScroll from 'react-infinite-scroll-component';
import { toJS } from 'mobx';

import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import UserList from '@/components/users/UserList';
import RepoList from '@/components/repositories/RepoList';
import ItemsSkeletonComponent from '@/components/ItemsSkeletonComponent';
import { SearchResultMapType, SearchTypeEnum, searchStore } from '@/store/SearchStore';

const SearchResult = observer(() => {
  const items = getItems(searchStore.searchResultMap, searchStore.searchType);

  function getItems(result: SearchResultMapType, type: SearchTypeEnum) {
    return toJS(result[type])?.items;
  }
  
  const loadMoreItems = () => {
    if (!searchStore.loading) {
      searchStore.searchGitHub();
    }
  };

  useEffect(() => {
		searchStore.setSearchResultToDefault();
		searchStore.resetPageNumber();
	}, [searchStore, searchStore.query, searchStore.searchType]);

  return (
    <Container maxWidth="xl">
      <InfiniteScroll
        dataLength={items ? items.length : 0}
        next={loadMoreItems}
        hasMore={items && items.length < searchStore.itemsNumber}
        loader={<ItemsSkeletonComponent/>}
      >
        {searchStore.loading && !items?.length && <ItemsSkeletonComponent/>}
        {items?.length ? (
          <List>
            {searchStore.searchType === SearchTypeEnum.users ? (
              <UserList users={items} />
            ) : (
              <RepoList repos={items} />
            )}
          </List>
        ) : (
          (searchStore.query.length > 0 && !searchStore.loading && items?.length < 1) ?
          ( 
          <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Typography variant="h5">No Results Found</Typography>
          </Grid>
          ) :
          (
            searchStore.query.length === 0 &&
          <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Typography variant="h5">Write something to search</Typography>
          </Grid>
          )
        )}
      </InfiniteScroll>
    </Container>
  );
});

export default SearchResult;
