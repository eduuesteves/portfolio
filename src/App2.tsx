import { useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import './App2.scss';
import { Route, Routes } from 'react-router-dom';

import { Home2 } from './components/v2/Home';
import { Project2 } from './components/v2/Project';

export const App2 = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
      <div className={darkMode ? 'wrapper light' : 'wrapper dark'}>
        <button className="darkMode" onClick={() => {setDarkMode(!darkMode)}}>
          {darkMode ? "Mode Dark" : "Mode Light"}
          <MdDarkMode size={30} color={darkMode ? 'white' : 'black'} />
        </button>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/v2/projects" element={<Project2 />} />
        </Routes>
      </div>
  )
}