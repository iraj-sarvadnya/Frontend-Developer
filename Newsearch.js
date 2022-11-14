import React, { useState, useEffect } from 'react';
import { Children } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchResults = () => {
    const [myOptions, setMyOptions] = useState([])

    const getDataFromAPI = () => {
        console.log("Options Fetched from API")

        fetch(
            "https://api.spacexdata.com/v3/capsules"
        )
            .then((res) => res.json())
            .then(
                async (result) => {

                    for (var i = 0; i < result.length; i++) {
                        myOptions.push(result[i].capsule_serial)

                    }
                    //console.warn(myOptions)
                    setMyOptions(myOptions)
                },
                (error) => {
                    <p>No Result Found...</p>
                }
            );

    }
    const [show, setShow] = useState(false)
    return (
        <div className='auto-search'>
            <button onClick={() => setShow(!show)} className='btn-search'>
                <FontAwesomeIcon icon={faSearch} />
            </button>

            {
                show ? <Autocomplete
                    style={{ width: 215 }}
                    className='search-control'
                    freeSolo
                    autoComplete
                    autoHighlight
                    options={myOptions}
                    renderInput={(params) => (

                        <TextField {...params}
                            onChange={getDataFromAPI}
                            variant="outlined"
                            label="Search Capsule Serial"
                        />
                    )}
                /> : null
            }

        </div>
    );
}


export default SearchResults;