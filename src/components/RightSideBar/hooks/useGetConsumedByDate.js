import { useSelector } from 'react-redux';

import { formatingDate } from './formatingDate';

export const useGetConsumedByDate = () => {
  const date = useSelector(state => state.calendar.activeDate);

  

  return {
    
    date: formatingDate.mmDdYy(date),
    
  };
};
