import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const useMobileModal = () => {
  const showMobileModal = useSelector(selectShowMobileModal);
  const dispatch = useDispatch();

  const openMobileModal = useCallback(
    () => dispatch(displayMobileModal()),
    [dispatch]
  );

  const hideMobileModal = useCallback(
    () => dispatch(closeMobileModal()),
    [dispatch]
  );

  return useMemo(
    () => [showMobileModal, openMobileModal, hideMobileModal],
    [showMobileModal, openMobileModal, hideMobileModal]
  );
};
