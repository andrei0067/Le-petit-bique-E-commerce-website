import * as React from 'react';
import { OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props) {
    const {onSearchChange}=props;
    return (
              <div>
                  <OutlinedInput
                        onChange={onSearchChange}
                        placeholder="Cautare produs"
                        endAdornment={<SearchIcon/>}
                />
              </div>
            );

        }