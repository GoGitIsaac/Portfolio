import { Link } from 'react-router-dom';

export default function MyWeb() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: '#f5f0e8' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>

        <Link to="/" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
          ← Back
        </Link>

        <div style={{ marginTop: '3rem' }}>
          <p style={{ color: '#888', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Project</p>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>MyWeb ⬡</h1>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {['TypeScript', 'Angular'].map(t => (
              <span key={t} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '4px', padding: '0.25rem 0.75rem', fontSize: '0.8rem', color: '#aaa' }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e1e1e', marginBottom: '1rem', background: '#111' }}>
          <img

          />
        </div>

        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#f5f0e8' }}>About the project</h2>
            <p style={{ color: '#999', lineHeight: '1.8', fontSize: '0.95rem' }}>
              MyWeb is a personal reading log built with TypeScript and Angular. It lets you save books and favourite quotes so the ones that stay with you aren't forgotten.
            </p>
            <p style={{ color: '#999', lineHeight: '1.8', fontSize: '0.95rem', marginTop: '1rem' }}>
              It was a project to get hands-on with Angular and TypeScript outside of school, building something genuinely useful to me.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#f5f0e8' }}>What I learned</h2>
            <ul style={{ color: '#999', lineHeight: '2', fontSize: '0.95rem', paddingLeft: '1.2rem' }}>
              <li>Angular component architecture</li>
              <li>TypeScript types &amp; interfaces</li>
              <li>Managing app state in Angular</li>
              <li>Deploying to Azure</li>
            </ul>
          </div>
        </div>

        <a
          href="https://myweb-api-b7f2fagpbmaacvbm.swedencentral-01.azurewebsites.net"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'inline-block', marginTop: '2.5rem', background: '#f5f0e8', color: '#0a0a0a', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem' }}
        >
          Visit live site →
        </a>

      </div>
    </div>
  );
}