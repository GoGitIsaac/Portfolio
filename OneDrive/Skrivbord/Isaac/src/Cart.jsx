import { useState } from 'react'
import { Container, Modal, Button } from 'react-bootstrap'
import { useCart } from './CartContext'

function Cart() {

  const { cart, removeFromCart, clearCart } = useCart()

  const [form, setForm] = useState({ name: '', email: '', address: '' })
  const [showCheckout, setShowCheckout] = useState(false)

  const handleRemove = (id) => {
    removeFromCart(id) // use context function instead of manually updating localStorage
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleOrder = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/

    if (!form.name || !form.email || !form.address) {
      alert('Please fill in all fields!')
      return
    }

    if (!emailRegex.test(form.email)) {
      alert('Please enter a valid email address (example@something.com)')
      return
    }

    const catList = cart.map(cat => cat.name).join(', ')

    alert(
      'Order Confirmed!\n\n' +
      'Name: ' + form.name + '\n' +
      'Email: ' + form.email + '\n' +
      'Delivery Address: ' + form.address + '\n\n' +
      'Cats ordered: ' + catList
    )

    clearCart() // use context instead of localStorage manually
    setForm({ name: '', email: '', address: '' })
    setShowCheckout(false)
  }

  return (
    <Container className="mt-4 mb-4">
      <h1>Your Cart</h1>

      {cart.length === 0 && (
        <p className="SmallText">Your cart is currently empty.</p>
      )}

      <div className="cartgrid">
        {cart.map(cat => (
          <div key={cat.id}>
            <h3>Breed: {cat.name}</h3>
            <p>Origin: {cat.origin}</p>
            <img
              src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
              alt={cat.name}
              onError={(e) => e.currentTarget.parentElement.remove()}
            />
            <button onClick={() => handleRemove(cat.id)}>Remove from Cart</button>
          </div>
        ))}
      </div>

      <Button variant="primary" className="mt-4" onClick={() => setShowCheckout(true)}>
        Checkout
      </Button>

      <Modal show={showCheckout} onHide={() => setShowCheckout(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column gap-2">
            <input type="text" id="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="form-control" />
            <input type="email" id="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="form-control" />
            <input type="text" id="address" placeholder="Delivery Address" value={form.address} onChange={handleChange} className="form-control" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCheckout(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleOrder}>Place Order</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Cart