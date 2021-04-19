import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import {GlobalStyles} from './globalStyles'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <GlobalStyles />
      <Route path='/' exact>
        <Home></Home>
      </Route>
      <Route path='/projects/:id' exact>
        <Projects></Projects>
      </Route>
    </BrowserRouter>
  );
}

export default App;
