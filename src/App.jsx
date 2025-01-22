import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailsMovie from './pages/DetailsMovie'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<DetailsMovie/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
