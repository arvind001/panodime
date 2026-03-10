import logo from './logo.svg';
import './App.css';
import Search from './pages/search/search';
import Chat from "./pages/chat/chat";
import GlobalStyles from './GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;
