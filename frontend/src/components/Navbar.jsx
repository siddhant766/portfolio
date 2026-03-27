import { useState, useEffect } from 'react';
import GooeyNav from './GooeyNav';
import logo from '../assets/logo.png';
import {
  FaCode, FaFolderOpen, FaGithub, FaTerminal,
  FaGraduationCap, FaBook, FaCertificate, FaEnvelope,
  FaSun, FaMoon, FaLock, FaTrophy
} from 'react-icons/fa';

const navItems = [
  { label: "Skills",        href: "#skills",          Icon: FaCode },
  { label: "Projects",      href: "#projects",        Icon: FaFolderOpen },
  { label: "GitHub",        href: "#github",          Icon: FaGithub },
  { label: "LeetCode",      href: "#leetcode",        Icon: FaTerminal },
  { label: "Training",      href: "#training",        Icon: FaBook },
  { label: "Education",     href: "#education",       Icon: FaGraduationCap },
  { label: "Certificates",  href: "#certifications",  Icon: FaCertificate },
  { label: "Contact",       href: "#contact",         Icon: FaEnvelope },
];

export default function Navbar({ toggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);       // desktop settings dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* ── DESKTOP NAV ── */}
        {!isMobile && (
          <>
            <GooeyNav
              items={navItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={300}
              initialActiveIndex={-1}
              animationTime={600}
              timeVariance={400}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />

            {/* Desktop Settings Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  background: 'transparent', border: '1px solid var(--line)',
                  cursor: 'pointer', fontSize: '1rem', color: 'var(--t2)',
                  padding: '4px 10px', borderRadius: '4px', display: 'flex',
                  alignItems: 'center', gap: '6px', fontFamily: 'var(--mono)',
                  letterSpacing: '.08em'
                }}
                aria-label="Settings menu"
              >
                ☰
              </button>

              {menuOpen && (
                <div style={{
                  position: 'absolute', right: 0, top: 'calc(100% + 8px)',
                  background: 'var(--bg1)', border: '1px solid var(--line)',
                  borderRadius: '6px', minWidth: '180px', zIndex: 300,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)', overflow: 'hidden'
                }}>
                  <button
                    onClick={() => { toggleTheme(); setMenuOpen(false); }}
                    style={{
                      width: '100%', padding: '12px 16px', background: 'transparent',
                      border: 'none', borderBottom: '1px solid var(--line)',
                      cursor: 'pointer', display: 'flex', alignItems: 'center',
                      gap: '10px', color: 'var(--t2)', fontSize: '0.9rem',
                      fontFamily: 'var(--mono)', textAlign: 'left'
                    }}
                  >
                    {theme === 'light' ? '🌙' : '☀️'}
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                  </button>
                  <a
                    href="https://portfolio-ubkv.vercel.app/admin"
                    target="_blank" rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '12px 16px', color: 'var(--t2)', fontSize: '0.9rem',
                      fontFamily: 'var(--mono)', textDecoration: 'none'
                    }}
                  >
                    🔒 Admin Panel
                  </a>
                </div>
              )}
            </div>
          </>
        )}

        {/* ── MOBILE HAMBURGER ── */}
        {isMobile && (
          <button
            className="qs-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* ── MOBILE QUICK-SETTINGS DRAWER ── */}
      {isMobile && mobileMenuOpen && (
        <div className="qs-overlay" onClick={closeMobileMenu}>
          <div className="qs-panel" onClick={e => e.stopPropagation()}>

            {/* Close pill */}
            <button className="qs-close" onClick={closeMobileMenu} aria-label="Close">✕</button>

            {/* Nav tiles grid */}
            <div className="qs-grid">
              {navItems.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="qs-tile"
                  onClick={closeMobileMenu}
                >
                  <span className="qs-tile-icon"><Icon /></span>
                  <span className="qs-tile-label">{label}</span>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="qs-divider" />

            {/* Action row */}
            <div className="qs-actions">
              <button
                className="qs-action-tile"
                onClick={() => { toggleTheme(); closeMobileMenu(); }}
              >
                <span className="qs-tile-icon">
                  {theme === 'light' ? <FaMoon /> : <FaSun />}
                </span>
                <span className="qs-tile-label">
                  {theme === 'light' ? 'Dark' : 'Light'}
                </span>
              </button>

              <a
                href="https://portfolio-ubkv.vercel.app/admin"
                target="_blank" rel="noreferrer"
                className="qs-action-tile"
                onClick={closeMobileMenu}
              >
                <span className="qs-tile-icon"><FaLock /></span>
                <span className="qs-tile-label">Admin</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
