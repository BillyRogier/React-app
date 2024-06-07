import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import TokenInfo from './routes/TokenInfo';
import Header from './components/Header';
import Contact from './routes/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/token/:id" element={<TokenInfo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
