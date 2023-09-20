import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {MangaPage} from './pages/MangaPage'
import {MangaFormPage} from './pages/MangaFormPage'
import {Navigation} from './components/Navigation'
import {Toaster} from "react-hot-toast"

function App(){
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/Mangas"/>}></Route>
        <Route path="/Mangas" element={<MangaPage/>}></Route>
        <Route path="/Mangas-Create" element={<MangaFormPage/>}></Route>
        <Route path="/Mangas/:id" element={<MangaFormPage/>}></Route>
      </Routes>
      <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App