// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Импортируйте компоненты
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage'; // Если этот файл не существует, создайте его позже
import AboutPage from './pages/AboutPage/AboutPage'; // Если этот файл не существует, создайте его позже
import ContactsPage from './pages/ContactsPage/ContactsPage'; // Если этот файл не существует, создайте его позже

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        {' '}
        {/* Устанавливаем минимальную высоту для основного содержимого */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          {/* Добавьте другие маршруты по мере создания страниц */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
