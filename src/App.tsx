import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPage from './test/test';
import MainPage from './main/MainPage';
import BoardGame from './boardGame/BoardGame';
import BoardCafe from './boardCafe/BoardCafe';
import EscapeRoom from './escapeRoom/EscapeRoom';
import Register from './main/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/boardGame" element={<BoardGame />} />
        <Route path="/boardCafe" element={<BoardCafe />} />
        <Route path="/escapeRoom" element={<EscapeRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;