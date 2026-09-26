* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-elevated: rgba(15, 23, 42, 0.8);
  --panel: rgba(15, 23, 42, 0.78);
  --panel-strong: #111827;
  --card: rgba(148, 163, 184, 0.06);
  --card-border: rgba(148, 163, 184, 0.12);
  --text: #e5e7eb;
  --muted: #a5b4cf;
  --primary: #7c3aed;
  --primary-2: #22c55e;
  --primary-soft: rgba(124, 58, 237, 0.14);
  --shadow: 0 20px 45px rgba(2, 6, 23, 0.45);
  --white: #ffffff;
  --button-text: #f8fafc;
  --hero-glow: rgba(124, 58, 237, 0.22);
}

body[data-theme="luxury"] {
  --bg: #120d09;
  --bg-elevated: rgba(30, 23, 16, 0.8);
  --panel: rgba(39, 28, 17, 0.78);
  --panel-strong: #1c140d;
  --card: rgba(255, 255, 255, 0.03);
  --card-border: rgba(212, 175, 55, 0.18);
  --text: #f9f5ef;
  --muted: #d7c7b1;
  --primary: #d4af37;
  --primary-2: #c084fc;
  --primary-soft: rgba(212, 175, 55, 0.12);
  --shadow: 0 20px 45px rgba(15, 10, 5, 0.45);
  --white: #fffdf8;
  --button-text: #20160d;
  --hero-glow: rgba(212, 175, 55, 0.2);
}

body[data-theme="startup"] {
  --bg: #071b1c;
  --bg-elevated: rgba(9, 26, 30, 0.8);
  --panel: rgba(11, 35, 38, 0.78);
  --panel-strong: #0d2a2d;
  --card: rgba(134, 239, 172, 0.04);
  --card-border: rgba(134, 239, 172, 0.18);
  --text: #edfdfd;
  --muted: #c4f0eb;
  --primary: #10b981;
  --primary-2: #38bdf8;
  --primary-soft: rgba(16, 185, 129, 0.1);
  --shadow: 0 20px 45px rgba(2, 14, 18, 0.45);
  --white: #f3fffc;
  --button-text: #041711;
  --hero-glow: rgba(16, 185, 129, 0.18);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, var(--hero-glow) 0%, transparent 25%),
    linear-gradient(180deg, var(--bg) 0%, #0b1222 100%);
  color: var(--text);
  font-family: "Inter", sans-serif;
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 90px 0;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: rgba(11, 16, 32, 0.4);
  border-bottom: 1px solid rgba(148, 163, 184, 0.08);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: var(--button-text);
  box-shadow: var(--shadow);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 26px;
  color: var(--muted);
  font-size: 0.95rem;
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--text);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.theme-switcher {
  display: inline-flex;
  align-items: center;
  padding: 5px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid var(--card-border);
}

.theme-btn {
  border: 0;
  background: transparent;
  color: var(--muted);
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.2s ease;
}

.theme-btn.active {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border-radius: 12px;
  border: 1px solid transparent;
  padding: 0.8rem 1.4rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: var(--button-text);
  box-shadow: var(--shadow);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-color: var(--card-border);
}

.small-btn {
  min-height: 42px;
  padding: 0.7rem 1.1rem;
}

.mobile-menu-toggle {
  display: none;
  border: 1px solid var(--card-border);
  background: rgba(255, 255, 255, 0.02);
  width: 46px;
  height: 46px;
  border-radius: 12px;
  cursor: pointer;
}

.mobile-menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  border-radius: 10px;
  background: var(--text);
}

.hero {
  padding-top: 70px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 44px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 18px;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: var(--primary-soft);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--text);
}

.hero h1,
.section-heading h2,
.panel h2,
.panel h3 {
  letter-spacing: -0.06em;
}

.hero h1 {
  margin: 0 0 18px;
  font-size: clamp(2.9rem, 5vw, 5rem);
  line-height: 1.02;
}

.lead {
  max-width: 620px;
  margin: 0 0 28px;
  color: var(--muted);
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 26px;
}

.quick-stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0;
  margin: 0;
}

.quick-stats li {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.quick-stats strong {
  font-size: clamp(1.5rem, 2vw, 2rem);
}

.quick-stats span {
  color: var(--muted);
  font-size: 0.82rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.dashboard-card {
  width: min(100%, 510px);
  background: rgba(15, 23, 42, 0.74);
  border: 1px solid var(--card-border);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.dashboard-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--card-border);
  background: rgba(255, 255, 255, 0.01);
}

.dot {
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
}

.dot.red { background: #f87171; }
.dot.yellow { background: #fbbf24; }
.dot.green { background: #4ade80; }

.dashboard-body {
  padding: 22px;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  gap: 18px;
  margin-bottom: 18px;
}

.metric-box {
  border-radius: 18px;
  border: 1px solid var(--card-border);
  background: rgba(255, 255, 255, 0.02);
  padding: 18px 16px;
}

.metric-box small {
  color: var(--muted);
}

.metric-box strong {
  display: block;
  margin-top: 8px;
  font-size: 1.6rem;
}

.chart-wrap {
  height: 190px;
  border-radius: 18px;
  border: 1px solid var(--card-border);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.02));
  overflow: hidden;
}

.chart-wrap svg {
  width: 100%;
  height: 100%;
  display: block;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.section-heading h2,
.panel h2 {
  margin: 0;
  font-size: clamp(2.2rem, 3vw, 3.3rem);
}

.section-heading p,
.panel p,
.project-copy p,
.step-card p,
.info-card p,
.contact-item p,
.footer-brand-block p,
.about-grid p {
  color: var(--muted);
}

.section-heading > p {
  max-width: 620px;
  margin: 0;
}

.card-grid {
  display: grid;
  gap: 22px;
}

.three-up {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.four-up {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.info-card,
.step-card,
.project-card,
.panel,
.contact-item {
  border: 1px solid var(--card-border);
  background: var(--card);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.info-card,
.step-card {
  padding: 26px 22px;
}

.card-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
  border-radius: 14px;
  font-size: 1.55rem;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.18), rgba(34, 197, 94, 0.14));
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.info-card h3,
.step-card h3,
.project-copy h3,
.contact-item h4 {
  margin: 0 0 12px;
  font-size: 1.3rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 22px;
}

.panel {
  padding: 30px 28px;
}

.accent-panel {
  background: linear-gradient(135deg, var(--primary-soft), rgba(255, 255, 255, 0.02));
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
  display: grid;
  gap: 12px;
}

.check-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
}

.check-list li::before {
  content: "✓";
  width: 22px;
  height: 22px;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(34, 197, 94, 0.12);
  color: #7ef0af;
  font-weight: 800;
}

.mini-points {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 26px;
}

.mini-points div {
  padding: 18px 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--card-border);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mini-points strong {
  font-size: 1.1rem;
}

.mini-points span {
  color: var(--muted);
  font-size: 0.9rem;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 18px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: var(--button-text);
  font-weight: 800;
}

.projects-grid {
  margin-top: 8px;
}

.project-card {
  overflow: hidden;
}

.project-visual {
  height: 220px;
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  letter-spacing: 0.18em;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);
}

.visual-one {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(34, 197, 94, 0.28));
}

.visual-two {
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.7), rgba(124, 58, 237, 0.48));
}

.visual-three {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.7), rgba(59, 130, 246, 0.42));
}

.project-copy {
  padding: 22px 20px 28px;
}

.testimonial-section {
  padding-top: 10px;
}

.center-panel {
  text-align: center;
  padding: 36px 30px;
}

blockquote {
  margin: 0 auto 18px;
  max-width: 760px;
  font-size: clamp(1.25rem, 2vw, 1.8rem);
  line-height: 1.5;
  letter-spacing: -0.04em;
}

.testimonial-author {
  margin: 0;
  color: var(--muted);
  font-weight: 600;
}

.site-footer {
  border-top: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(255, 255, 255, 0.01);
  padding-top: 30px;
}

.footer-wrap {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 32px;
  align-items: start;
  padding-bottom: 20px;
}

.brand-footer {
  margin-bottom: 8px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.contact-item {
  padding: 20px 18px;
}

.contact-item a {
  color: var(--text);
}

.footer-bottom {
  border-top: 1px solid rgba(148, 163, 184, 0.12);
  padding: 20px 0 34px;
}

.footer-bottom-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  color: var(--muted);
}

@media (max-width: 960px) {
  .three-up,
  .four-up,
  .contact-grid,
  .about-grid,
  .hero-grid,
  .footer-wrap {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid,
  .about-grid,
  .footer-wrap {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: inline-block;
  }

  .nav-actions {
    margin-left: auto;
  }

  .theme-switcher {
    display: none;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 70px 0;
  }

  .three-up,
  .four-up,
  .contact-grid,
  .mini-points {
    grid-template-columns: 1fr;
  }

  .nav-actions .btn {
    display: none;
  }

  .hero h1 {
    font-size: 2.7rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .quick-stats {
    justify-content: space-between;
  }
}
