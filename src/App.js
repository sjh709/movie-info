import 'react-range-slider-input/dist/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundpage/NotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path='movies'>
            <Route index element={<MoviePage />} />
            <Route path=':id' element={<MovieDetailPage />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
