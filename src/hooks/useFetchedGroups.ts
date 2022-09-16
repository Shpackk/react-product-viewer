import { useEffect, useState } from 'react';
import { fetchProductGroups } from '../services/fetchData';

const useFetchedGroups = () => {
  const [groups, setGroups] = useState<string[]>();

  useEffect(() => {
    const data = fetchProductGroups();
    setGroups(data);
  }, []);

  return { groups };
};

export { useFetchedGroups };
