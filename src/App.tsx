import './App.css';
import { Nav } from './components/Nav';
import { Routes, Route } from 'react-router-dom'
import { useFetchedGroups } from './hooks/useFetchedGroups'
import { ProductGroupCard } from './components/GroupCard'
import { GroupProducts } from './components/GroupProducts'

function App() {
  const {groups} = useFetchedGroups()

  if (!groups) return <div>Loading...</div>

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={
        <div className='groupParent'>
        {groups?.map((group: string) => <ProductGroupCard group={group}/>)}
        </div>
      }/>
      <Route path='/products/:group' element={<GroupProducts/>}/>
    </Routes>
    </>
  )
}

export default App;
