import Search from "@/components/search/Search";
import SearchResult from "@/components/search/SearchResultComponent";
import { Grid } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
 return (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    sx={{ minHeight: '100vh', marginTop: 10 }}
  >
    <Search/>
    <SearchResult/>
  </Grid>
 );
}