import React, {useState} from 'react';
import {Button, TextField, InputAdornment} from '@material-ui/core';
import {Search} from "@material-ui/icons";
import './SearchBar.css';

interface ISearchBarProps{
    SetUserQuery: (a: string) => void;
}

function SearchBar(props: ISearchBarProps) {

    // Handle search
    const [SearchQuery, setSearchQuery] = useState<string | null>("")
    const handleSearchQueryChange = (s: string | null) => {
        setSearchQuery(s);
    }
    const [HasFocus, setHasFocus] = useState<boolean>(false);
    // Handle submission
    const handleSubmit =  () => {
        if(SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== ""){
            let userInput:string = SearchQuery;
            props.SetUserQuery(userInput);
        }else{
            setHasFocus(true);
        }
    }
    return (
        <div className="SearchBarContainer">
            <TextField
                className="SearchTextField"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search/>
                        </InputAdornment>
                    )
                 }}
                required
                id="outlined-required"
                label="Search book title: eg. The Hunger Games"
                variant="outlined"
                error={HasFocus && SearchQuery === ""}
                onClick={() => setHasFocus(true)}
                value={SearchQuery}
                onChange={e => handleSearchQueryChange(e.target.value)}
            />
            <Button className="SearchButton" variant="contained" onClick={handleSubmit}>Search</Button>
        </div>
    )
}

export default SearchBar