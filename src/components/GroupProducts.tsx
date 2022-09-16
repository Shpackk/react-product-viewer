import { useParams } from 'react-router-dom';
import { useSingleProduct } from '../hooks/useSingleProduct';
import { Product } from '../services/fetchData';

function GroupProducts() {
  const { group } = useParams<string>();
  const { product } = useSingleProduct(group!);

  return (
    <>
      {product.map(({ flavour, amount }: Product) => {
        return (
          <div key={flavour}>
            {flavour}, {amount}
          </div>
        );
      })}
    </>
  );
}

export { GroupProducts };
