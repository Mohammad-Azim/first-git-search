import { TextField, Box } from '@mui/material';

interface SearchBarProps {
  query: string;
  handleSearch: (query: string) => void;
  clearSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, handleSearch, clearSearch }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      clearSearch();
    }
  };

  return (
    <Box display="flex" gap={2}>
      <TextField
        variant="outlined"
        label="Search"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
      />
    </Box>
  );
};

export default SearchBar;