import { useState } from 'react';
import SplitText from "./SplitText";
import MagicBento from './MagicBento';

const CERTS = [
  { 
    color: '#0a0a0a',
    title: 'Data Structures & Algorithms',
    description: 'neoColab',
    label: '🧩',
    href: '/DSA.pdf',
    span: 'col-span-2 row-span-2'
  },
  { color: '#0a0a0a', title: 'OOPs (Java)', description: 'neoColab', label: '🔷', href: '/OOPs.pdf', span: '' },
  { color: '#0a0a0a', title: 'C Programming', description: 'neoColab', label: '💻', href: '/c Programing.pdf', span: '' },
  { color: '#0a0a0a', title: 'Responsive Web Design', description: 'freeCodeCamp', label: '📱', href: '/freecodecamp.pdf', span: 'col-span-2' },
  { color: '#0a0a0a', title: 'Operating Systems', description: 'Coursera', label: '🖥️', href: '/Operating System.pdf', span: '' },
  { color: '#0a0a0a', title: 'Computer Networks', description: 'Coursera', label: '🌐', href: '/Bits and Byte Comp Networks.pdf', span: 'col-span-2' },
  { color: '#0a0a0a', title: 'Network Comms', description: 'Coursera', label: '📡', href: '/Network Communication.pdf', span: '' },
  { color: '#0a0a0a', title: 'TCP / IP', description: 'Coursera', label: '🔗', href: '/TCP  IP.pdf', span: '' },
  { color: '#0a0a0a', title: 'Digital Systems', description: 'NPTEL', label: '💡', href: '/Digital Systems.pdf', span: 'col-span-2' },
  { color: '#0a0a0a', title: 'Design Thinking', description: 'NPTEL', label: '🎯', href: '/Design and Thinking.pdf', span: '' },
  { color: '#0a0a0a', title: 'Excel Beginners', description: 'Simplilearn', label: '📊', href: '/excel simplylearn.pdf', span: '' },
  { color: '#0a0a0a', title: 'Binary Blitz', description: 'ISTE', label: '🏆', href: '/Binary Blitzpdf.pdf', span: 'col-span-2' },
];

const INITIAL_VISIBLE = 4;

const ChevronIcon = ({ expanded }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    style={{
      transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function Certifications() {
  const [expanded, setExpanded] = useState(false);

  const visibleCerts = expanded ? CERTS : CERTS.slice(0, INITIAL_VISIBLE);
  const hiddenCount = CERTS.length - INITIAL_VISIBLE;

  return (
    <section id="certifications">
      <div className="sec-head reveal">
        <span className="sec-num">05</span>
        <h2 className="sec-title">
          <SplitText
            text="Certifications"
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

      <div className="reveal" style={{ width: '100%' }}>
        <MagicBento
          items={visibleCerts}
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="226, 232, 240"
          disableAnimations={false}
        />
      </div>

      {/* View More / View Less toggle */}
      <div className="proj-toggle-wrap">
        <button
          className="proj-toggle-btn"
          onClick={() => {
            if (expanded) {
              const section = document.getElementById("certifications");
              if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
              setTimeout(() => setExpanded(false), 300);
            } else {
              setExpanded(true);
            }
          }}
          aria-expanded={expanded}
        >
          <span>
            {expanded ? "View Less" : `View ${hiddenCount} More Certificates`}
          </span>
          <ChevronIcon expanded={expanded} />
        </button>
      </div>
    </section>
  );
}
