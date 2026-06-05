import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || []
  })

  function addToCart(cat) {
    if (cart.some(c => c.id === cat.id)) {
      alert(cat.name + " is already in your cart!")
      return
    }
    const updated = [...cart, cat]
    setCart(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  function removeFromCart(id) {
    const updated = cart.filter(cat => cat.id !== id)
    setCart(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  function clearCart() {
    setCart([])
    localStorage.removeItem('cart')
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}