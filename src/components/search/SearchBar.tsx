import { TextField, Button, Box } from '@mui/material';

interface SearchBarProps {
  query: string;
  handleSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, handleSearch }) => {

  return (
    <Box display="flex" gap={2}>
      <TextField
        variant="outlined"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search..."
      />
    </Box>
  );
};

export default SearchBar;