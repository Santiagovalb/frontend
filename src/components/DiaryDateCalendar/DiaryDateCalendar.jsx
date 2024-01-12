import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { CalendarWrapper, IconCalendar } from './DiaryDateCalendar.styled';

import { formatISO } from 'date-fns';

import { DateInputStyled } from './DiaryDateCalendar.mui';

const MaterialUIPickers = () => {
  const dispatch = useDispatch();
  

  

  
};

export const DiaryDateCalendar = memo();
