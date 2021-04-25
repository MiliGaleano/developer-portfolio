import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import {GlobalStyles} from './globalStyles'
import {LangContextProvider} from './context/languageContext'
import ScrollToTop from './components/scrollToTop'

function App() {
  return (
    <LangContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <GlobalStyles />
        <Route path='/' exact>
          <Home></Home>
        </Route>
        <Route path='/projects/:id' exact>
          <Projects></Projects>
        </Route>
      </BrowserRouter>
    </LangContextProvider>
  );
}

export default App;
