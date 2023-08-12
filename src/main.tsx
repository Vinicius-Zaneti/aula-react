import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
// import App from './App'
import './index.css'
import Home from './pages/Home'
import ListaDevs from './pages/ListaDevs'
import Servicos from './pages/ListaServicos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path = '/' element = {<Home />}/>
      <Route path = 'listaservicos' element = {<Servicos />}/>
      <Route path = 'listadevs'  element = {<ListaDevs />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
