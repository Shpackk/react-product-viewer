import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav key={'nav'}>
      <Link to="/groups"> To Groups</Link>
    </nav>
  );
}

export { Nav };
