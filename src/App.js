import MovieList from './components/MovieList';
import PostMovie from './components/PostMovie';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './components/Login/Login';

import './App.css';



function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    // <div>
    //   <h1>Movies</h1>
    //   <MovieList />
    //   <PostMovie />
    // </div>
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
        <Routes>
          <Route path="/preferences" element={<Preferences />}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
