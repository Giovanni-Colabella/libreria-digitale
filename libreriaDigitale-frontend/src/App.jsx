import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import API_URL from './config';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Catalogo from './pages/Catalogo';
import LibroPagina from './pages/LibroPagina';
import AggiungiLibroPagina from './pages/AggiungiLibroPagina';
import ModificaLibro from './pages/ModificaLibro';

function App() {

  const aggiungiLibro = async (nuovoLibro) => {
    const res = await fetch(`${API_URL}/catalogo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuovoLibro)
    });
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/catalogo/:id' element={<LibroPagina />} />
        <Route path='/aggiungi-libro' element={<AggiungiLibroPagina aggiungiLibroSubmit={aggiungiLibro} />} />
        <Route path='/modifica/:id' element={<ModificaLibro />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App
