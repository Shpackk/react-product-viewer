import { Link } from 'react-router-dom';
import '../App.css';

function ProductGroupCard(props: any) {
  const { group } = props;
  return (
    <Link key={group} className="child" to={`/groups/${group}`}>
      {group}
    </Link>
  );
}

export { ProductGroupCard };
