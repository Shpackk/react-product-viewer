import { useEffect, useState } from 'react';
import { fetchSingleGroup, Product } from '../services/fetchData';

const useSingleProduct = (groupName: string) => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const rawData = fetchSingleGroup(groupName);
    setProduct(rawData);
  }, [groupName]);

  return { product };
};

export { useSingleProduct };
