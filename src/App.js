import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from './components/signup';
import SignIn from './components/signin';

function App() {
  return (
    <Router>
	<Routes>
    <Route path='/sign-in' exact element={<SignIn/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Routes>
  </Router>
  );
}

export default App;
