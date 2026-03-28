import SplitText from "./SplitText";
import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubProfile({ theme = 'dark' }) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const username = 'siddhant766';
        
        // Fetch User Data
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        
        if (!userRes.ok) {
          if (userRes.status === 403 || userRes.status === 429) {
            console.warn("GitHub API rate limit exceeded. Using fallback data for preview.");
            setUser({
              login: username,
              name: 'Siddhant Patel',
              avatar_url: '/sid.jpeg', // Use the local hero image representing them
              bio: 'Full Stack Developer',
              public_repos: 12,
              followers: 8,
              html_url: `https://github.com/${username}`
            });
            setRepos([
              { id: 1, name: 'Portfolio', stargazers_count: 5, language: 'JavaScript', description: 'My personal portfolio website', html_url: `https://github.com/${username}` },
              { id: 2, name: 'Admin-Dashboard', stargazers_count: 2, language: 'React', description: 'Full stack admin panel', html_url: `https://github.com/${username}` },
              { id: 3, name: 'E-commerce-App', stargazers_count: 3, language: 'Node.js', description: 'Scalable backend API', html_url: `https://github.com/${username}` },
              { id: 4, name: 'Weather-App', stargazers_count: 1, language: 'HTML/CSS', description: 'Simple weather fetcher', html_url: `https://github.com/${username}` },
            ]);
            setLoading(false);
            return;
          }
          throw new Error('Failed to fetch user data');
        }
        
        const userData = await userRes.json();
        
        // Fetch Repos Data
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!reposRes.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposRes.json();

        setUser(userData);
        setRepos(reposData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Unable to load GitHub profile right now.');
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // Set up intersection observer for dynamically loaded content
  useEffect(() => {
    if (!loading && !error) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), i * 50);
          }
        });
      }, { threshold: 0.07 });

      const githubSection = document.getElementById('github');
      if (githubSection) {
        const elements = githubSection.querySelectorAll('.reveal');
        elements.forEach(el => obs.observe(el));
      }

      return () => obs.disconnect();
    }
  }, [loading, error, repos]);

  if (loading) {
    return (
      <section id="github">
        <div className="sec-head reveal">
          <span className="sec-num">03</span>
          <h2 className="sec-title">
          <SplitText
            text="GitHub Activity"
            className=""
            delay={20}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="left"
            tag="span"
          />
        </h2>
          <div className="sec-rule"></div>
        </div>
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--t3)', fontFamily: 'var(--mono)' }}>
          Loading repositories...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github">
        <div className="sec-head reveal">
          <span className="sec-num">03</span>
          <h2 className="sec-title">
          <SplitText
            text="GitHub Activity"
            className=""
            delay={20}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="left"
            tag="span"
          />
        </h2>
          <div className="sec-rule"></div>
        </div>
        <div style={{ textAlign: 'center', padding: '40px 0', color: '#f87171', fontFamily: 'var(--mono)' }}>
          {error}
          <br /><br />
          <a href="https://github.com/siddhant766" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ marginTop: '16px' }}>
            Visit GitHub Profile directly
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="github">
      <div className="sec-head reveal">
        <span className="sec-num">03</span>
        <h2 className="sec-title">
          <SplitText
            text="GitHub Activity"
            className=""
            delay={20}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="left"
            tag="span"
          />
        </h2>
        <div className="sec-rule"></div>
      </div>

      {/* Profile Card — matches LeetCode style */}
      <div className="github-profile reveal" style={{
        background: 'var(--bg1)',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid var(--line)',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
        marginBottom: '20px',
        color: 'var(--t1)',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Avatar + Name row */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }}
          />
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '2px' }}>
              {user.name || user.login}
            </h3>
            <p style={{ color: 'var(--t3)', fontSize: '0.9rem', marginBottom: '6px' }}>
              @{user.login}
            </p>
            {user.bio && (
              <p style={{ fontSize: '0.88rem', color: 'var(--t2)', lineHeight: 1.4 }}>
                {user.bio}
              </p>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--t2)', marginBottom: '16px' }}>
          <span><strong style={{ color: 'var(--t1)' }}>{user.public_repos}</strong> Repositories</span>
          <span><strong style={{ color: 'var(--t1)' }}>{user.followers}</strong> Followers</span>
        </div>

        {/* Follow button — full width like LeetCode's Edit Profile */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'block',
            textAlign: 'center',
            background: 'var(--bg2)',
            color: 'var(--ac)',
            padding: '8px 0',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
            marginBottom: '24px',
            border: '1px solid var(--line)'
          }}
        >
          Follow on GitHub
        </a>
      </div>

      {/* Contribution Calendar Card */}
      <div className="reveal" style={{
        background: 'var(--bg1)',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid var(--line)',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
        marginBottom: '20px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        <h4 style={{ fontSize: '1rem', color: 'var(--t2)', marginBottom: '16px', fontWeight: '500' }}>
          Contribution Activity
        </h4>
        <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '8px' }}>
          <GitHubCalendar
            username="siddhant766"
            colorScheme={theme}
            fontSize={14}
            blockSize={12}
            blockMargin={4}
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
          />
        </div>
      </div>

      {/* Repo Cards */}
      <div className="proj-grid">
        {repos.map((repo) => (
          <div className="proj-card reveal" key={repo.id}>
            <div className="proj-top">
              <h3 className="proj-name" style={{ wordBreak: 'break-word', paddingRight: '12px' }}>
                {repo.name}
              </h3>
              {repo.stargazers_count > 0 && (
                <span className="proj-date" style={{ color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  ★ {repo.stargazers_count}
                </span>
              )}
            </div>

            {repo.language && (
              <div className="atags" style={{ marginTop: '8px' }}>
                <span className="atag">{repo.language}</span>
              </div>
            )}

            <div className="bullets" style={{ marginTop: '12px', marginBottom: '16px' }}>
              <div className="bullet">
                {repo.description || 'No description available for this repository.'}
              </div>
            </div>

            <a href={repo.html_url} target="_blank" rel="noreferrer" className="proj-link" style={{ marginTop: 'auto' }}>
              View Repository{' '}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
