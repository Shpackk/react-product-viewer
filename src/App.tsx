import './App.css';
import { Nav } from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import { useFetchedGroups } from './hooks/useFetchedGroups';
import { ProductGroupCard } from './components/ProductCardGroup';
import { GroupProducts } from './components/GroupProducts';

function App() {
  const { groups } = useFetchedGroups();

  if (!groups) return <div>Loading...</div>;

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/groups"
          element={
            <div className="groupParent" key={'groupParent'}>
              {groups?.map((group: string) => (
                <ProductGroupCard group={group} />
              ))}
            </div>
          }
        />
        <Route path="/groups/:group" element={<GroupProducts />} />
      </Routes>
    </>
  );
}

export default App;
