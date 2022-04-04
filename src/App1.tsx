import { Route, Routes } from 'react-router-dom';
import './App1.scss';
import { Main1 } from './components/v1/Main';
import { Projects1 } from './components/v1/Projects';

export function App1() {
  return (
    <>
      <Routes>
          <Route path="/v1" element={<Main1 />} />
          <Route path="/v1/projects" element={<Projects1 />} />
      </Routes>
    </>
  )
}