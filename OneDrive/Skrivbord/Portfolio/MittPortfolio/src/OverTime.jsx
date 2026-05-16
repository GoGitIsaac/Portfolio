import { Link } from 'react-router-dom';
import OverTimeImage from "./assets/OverTimeImage.png";

export default function OverTime() {
  return (
    <div
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        color: '#f5f0e8'
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}
      >
        <Link
          to="/"
          style={{
            color: '#888',
            textDecoration: 'none',
            fontSize: '0.9rem',
            letterSpacing: '0.05em'
          }}
        >
          ← Back
        </Link>

        <div style={{ marginTop: '3rem' }}>
          <p
            style={{
              color: '#888',
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}
          >
            Project
          </p>

          <h1
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}
          >
            OverTime ◈
          </h1>

          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem'
            }}
          >
            {['C#', 'Blazor', 'Asp.NET Core'].map(t => (
              <span
                key={t}
                style={{
                  background: '#1a1a1a',
                  border: '1px solid #2a2a2a',
                  borderRadius: '4px',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.8rem',
                  color: '#aaa'
                }}
              >
                {t}
              </span>
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
          {/* LEFT SIDE */}
          <div>
            <h2
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#f5f0e8'
              }}
            >
              About the project
            </h2>

            <p
              style={{
                color: '#999',
                lineHeight: '1.8',
                fontSize: '0.95rem'
              }}
            >
              OverTime is a sports forum built collaboratively with classmates.
              Users can post, discuss, and engage around sports topics. It was a
              full-stack school project built with C#, Blazor, and ASP.NET Core
              and deployed to Azure.
            </p>

            <p
              style={{
                color: '#999',
                lineHeight: '1.8',
                fontSize: '0.95rem',
                marginTop: '1rem'
              }}
            >
              Working in a team taught me a lot about dividing responsibilities,
              merging code, and building features that fit together cleanly.
            </p>

            <h2
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginTop: '2rem',
                marginBottom: '1rem',
                color: '#f5f0e8'
              }}
            >
              What I learned
            </h2>

            <ul
              style={{
                color: '#999',
                lineHeight: '2',
                fontSize: '0.95rem',
                paddingLeft: '1.2rem'
              }}
            >
              <li>Building with C# and Blazor</li>
              <li>Collaborative Git workflow</li>
              <li>ASP.NET Core backend architecture</li>
              <li>Deploying to Azure</li>
            </ul>

            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="https://overtime-forum-ghhyh8abe3ecdzev.swedencentral-01.azurewebsites.net/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#f5f0e8',
                  color: '#0a0a0a',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                Visit live site →
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div>
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #1e1e1e',
                background: '#111'
              }}
            >
              <img
                src={OverTimeImage}
                alt="OverTime screenshot"
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