import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { SearchTypeEnum, searchStore } from '@/store/SearchStore';
import { observer } from 'mobx-react-lite';

const SearchType: React.FC = observer(() => {

  function handleSearchTypeChange(newType: SearchTypeEnum): void {
    searchStore.setType(newType);
  }
  
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="search-type"
        name="search-type"
        value={searchStore.searchType}
        onChange={(e) => handleSearchTypeChange(e.target.value as SearchTypeEnum)}
      >
        <FormControlLabel value={SearchTypeEnum.repositories} control={<Radio/>} label="Repositories" />
        <FormControlLabel value={SearchTypeEnum.users} control={<Radio/>} label="Users" />
      </RadioGroup>
    </FormControl>
  );
});

export default SearchType;