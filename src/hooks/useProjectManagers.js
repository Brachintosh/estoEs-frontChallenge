import { useEffect } from 'react';
import { AppContext, useAppContext } from '../context/appContext';
import getProjectManagers from '../services/getProjectManagers';

export default function useProductManagers() {
  const { setProjectManagers } = useAppContext(AppContext);

  useEffect(() => {
    getProjectManagers()
        .then(pm => {
          setProjectManagers(pm)
        });
  }, [setProjectManagers]);

  return useAppContext(AppContext);
};
