import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";


import App from './App.jsx'
import ProductPage from './route/ProductPage.jsx'
import Layout from './route/Layout.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<App/>}/>
    <Route path='/products/:productId' element={<ProductPage/>}/>
    </Route>
  </Routes>
</BrowserRouter>,
)
