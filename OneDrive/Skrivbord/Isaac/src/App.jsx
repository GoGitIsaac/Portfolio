import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarComp from './components/NavbarComp'
import Home from './components/Home'
import Browse from './components/Browse'
import Contact from './components/Contact'
import About from './components/About'
import Cart from './Cart'
import { CartProvider } from './CartContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Style.css'

function App() {
  return (
    <Router>
      <CartProvider>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <footer role="contentinfo">
        <p>&copy; 2026 MewStore. All rights reserved.</p>
      </footer>
      </CartProvider>
    </Router>
  )
}

export default App