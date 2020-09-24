import React from 'react';
import './App.css';
import NewsApi from './components/NewsApi';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <NewsApi/>
    </div>
  );
}

export default App;
