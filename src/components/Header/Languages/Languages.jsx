import LanguageIcon from '@mui/icons-material/Language';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { StyledSelect, StyledForm } from './Languages.styled';
import { useDispatch, useSelector } from 'react-redux';


import { useEffect } from 'react';
import { FlagUS } from './Flags/FlagUS';
import "./lenguaje.css"
// import { FlagUA } from './Flags/FlagUA';

export const Languages = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleChange = event => {
  
  };



  return (
    <div>
      <StyledForm
        size="small"
        sx={{
          ml: 3,
          p: 0,
          top: 6,
        }}
        
      >
        
        
        <StyledSelect
          sx={{
            '.MuiSelect-icon': {
              color: 'white',
            },
            ml: 3,
            p: 0,
            top: 5,
          }}
          IconComponent=""
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          label="Age"
          onChange={handleChange}
          variant="outlined"
        >
         <div className="flagUS"> <MenuItem value={'en'}>
            <FlagUS />
          </MenuItem></div>
        </StyledSelect>
      </StyledForm>
    </div>
  );
};
