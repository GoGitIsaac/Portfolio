import { Link } from 'react-router-dom';
import MewStoreImage from "./assets/MewStoreImage.png";
import MewStoreCart from "./assets/MewStoreCart.png";


export default function MewStore() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: '#f5f0e8' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>

        <Link to="/" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
          ← Back
        </Link>

        <div style={{ marginTop: '3rem' }}>
          <p style={{ color: '#888', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Project</p>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>MewStore ✦</h1>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {['JavaScript', 'React', 'Node.js'].map(t => (
              <span key={t} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '4px', padding: '0.25rem 0.75rem', fontSize: '0.8rem', color: '#aaa' }}>{t}</span>
            ))}
          </div>
        </div>

        <div
          style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}
>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#f5f0e8' }}>About the project</h2>
            <p style={{ color: '#999', lineHeight: '1.8', fontSize: '0.95rem' }}>
              MewStore is an e-commerce style cat store where users can browse cats fetched live from an external API and add them to a shopping cart. It was my first real project combining a React frontend with a Node.js backend.
            </p>
            <p style={{ color: '#999', lineHeight: '1.8', fontSize: '0.95rem', marginTop: '1rem' }}>
              Building it taught me the fundamentals of component-based architecture, state management, and how to connect a frontend to a backend API.
            </p>
          </div>
          <div>
  <div
    style={{
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #1e1e1e',
      marginBottom: '1rem',
      background: '#111'
    }}
  >
    <img
      src={MewStoreImage}
      alt="MewStore screenshot"
      style={{
        width: '100%',
        maxWidth: '380px',
        display: 'block',
        margin: '0 auto'
      }}
    />
  </div>

  <div
    style={{
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #1e1e1e',
      background: '#111'
    }}
  >
    <img
      src={MewStoreCart}
      alt="MewStore cart"
      style={{
        width: '100%',
        maxWidth: '380px',
        display: 'block',
        margin: '0 auto'
      }}
    />
  </div>
</div>
        </div>

      </div>
    </div>
  );
}