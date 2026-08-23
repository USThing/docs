import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const heroImageUrl = useBaseUrl('/img/usthing-devices.png');

  return (
    <header className={styles.heroBanner}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroCopy}>
          <Heading as="h1" className={styles.heroTitle}>
            Make every day at <span>HKUST</span> simpler.
          </Heading>
          <p className={styles.heroSubtitle}>
            Find the guides, references, and answers you need to get more from
            USThing on mobile and the web.
          </p>
          <div className={styles.buttons}>
            <Link
              className={styles.primaryButton}
              to="/docs/dashboard/timetable-planner"
            >
              Explore the docs <span aria-hidden="true">→</span>
            </Link>
            <Link
              className={styles.secondaryButton}
              href="https://app.usthing.xyz">
              Open USThing
            </Link>
          </div>
          <p className={styles.heroNote}>
            Student-built <span aria-hidden="true">•</span> All-in-one{' '}
            <span aria-hidden="true">•</span> Made for HKUST
          </p>
        </div>
        <div className={styles.heroVisual}>
          <img
            className={styles.heroImage}
            src={heroImageUrl}
            alt="USThing dashboard and mobile app"
            fetchPriority="high"
          />
          <div className={styles.visualBadge}>
            <span className={styles.badgeIcon} aria-hidden="true">
              ✦
            </span>
            Built around student life
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation"
      description="Guides and resources for USThing, the student-driven all-in-one app for HKUST students.">
      <HomepageHeader />
    </Layout>
  );
}
