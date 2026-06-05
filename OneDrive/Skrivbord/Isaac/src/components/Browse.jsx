import { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'

function Browse() {
  const [allCats, setAllCats] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const { addToCart } = useCart()
  const catsPerPage = 10

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds?limit=30")
      .then(res => res.json())
      .then(data => setAllCats(data))
  }, [])

  const filtered = allCats.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  )

  const start = (currentPage - 1) * catsPerPage
  const catsToShow = filtered.slice(start, start + catsPerPage)
  const totalPages = Math.ceil(filtered.length / catsPerPage)

  return (
    <Container className="mt-4"> {/* mt-4 adds margin on top */}
      <h1>Browse For YOUR Perfect Cat Companion</h1>
      <div className="d-flex gap-2 my-3">
      <Link to="/cart" className="btn btn-primary">
        View Cart
      </Link>

      <input
        type="text"
        id="searchBar"
        placeholder="Search for a cat breed..."
        value={search}
        onChange={e => { setSearch(e.target.value); setCurrentPage(1) }}
        className="form-control"
      />
      </div>
      <div className="catgrid">
        {catsToShow.map(cat => (
          <CatCard key={cat.id} cat={cat} addToCart={addToCart} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <a
            key={i}
            href="#"
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={e => { e.preventDefault(); setCurrentPage(i + 1) }}
          >
            {i + 1}
          </a>
        ))}
      </div>
    </Container>
  )
}

function CatCard({ cat, addToCart }) {
  const [visible, setVisible] = useState(true)
  const [showModal, setShowModal] = useState(false)

  if (!visible) return null

  return (
    <div>
      <h3>Breed: {cat.name}</h3>
      <p>Origin: {cat.origin}</p>
      <img
        src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
        alt={cat.name}
        onError={() => setVisible(false)}
      />
      <div className="d-flex gap-2 mt-2">
        <button onClick={() => addToCart(cat)}>Add to Cart</button>
        <button onClick={() => setShowModal(true)}>View Details</button>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{cat.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Breed:</strong> {cat.name}</p>
          <p><strong>Origin:</strong> {cat.origin}</p>
          <p><strong>Temperament:</strong> {cat.temperament}</p>
          <p><strong>Description:</strong> {cat.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={() => { addToCart(cat); setShowModal(false) }}>Add to Cart</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Browse