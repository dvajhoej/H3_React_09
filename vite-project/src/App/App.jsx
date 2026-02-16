import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import About from '../pages/About/About'
import Clicker from '../pages/Clicker/Clicker'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="clicker" element={<Clicker />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
