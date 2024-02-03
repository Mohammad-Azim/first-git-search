import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { SearchingType } from '../../../env';

interface SearchTypeProps {
  searchType: string;
  handleSearchTypeChange: (type: SearchingType) => void;
}

const SearchType: React.FC<SearchTypeProps> = ({ searchType, handleSearchTypeChange }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="search-type"
        name="search-type"
        value={searchType}
        onChange={(e) => handleSearchTypeChange(e.target.value as SearchingType)}
      >
        <FormControlLabel value="repositories" control={<Radio />} label="Repositories" />
        <FormControlLabel value="users" control={<Radio />} label="Users" />
      </RadioGroup>
    </FormControl>
  );
};

export default SearchType;