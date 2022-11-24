import { useState } from 'react';

// packages
import { Route, Routes } from 'react-router-dom';

// layout
import Layout from './layout';

// Screens
import Home from './screens/Home';
import { Users } from './screens/Users';

// styles
import './styles/globals.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
