import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomePageNotes from '../components/HomepageNotes';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
// arst
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      title={`Home`}
      description="What's even good, tho?">
      {/* <HomepageHeader /> */}
      <main>
        <HomePageNotes />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
