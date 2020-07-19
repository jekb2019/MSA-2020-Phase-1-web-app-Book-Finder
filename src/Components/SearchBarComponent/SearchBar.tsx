import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
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
                style = {{width: 500}}
                required
                id="outlined-required"
                label="Search"
                variant="outlined"
                error={HasFocus && SearchQuery === ""}
                onClick={() => setHasFocus(true)}
                value={SearchQuery}
                onChange={e => handleSearchQueryChange(e.target.value)}
            />
            <Button style = {{width: 100, height: 55}} variant="contained" onClick={handleSubmit}>Search</Button>
        </div>
    )
}

export default SearchBar