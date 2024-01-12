import { isSameDay } from 'date-fns';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';


export const useShowForm = () => {
  const activeDate = useSelector(selectActiveDate);
  const isCurrentDate = useMemo(() => {
    const selectedDate = new Date(activeDate).getTime();
    const today = new Date().getTime();
    const isCurrentDate =
      selectedDate <= today || isSameDay(selectedDate, today);

    return isCurrentDate;
  }, [activeDate]);

  return isCurrentDate;
};
