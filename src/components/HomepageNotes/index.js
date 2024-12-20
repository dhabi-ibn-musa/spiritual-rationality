import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


export default function HomePageNotes() {
  return (
    <div className={styles["homepage-main"]}>
      <h1>Spiritual Rationality</h1>
      <img src="./img/lotus_compass.jpg"
     style={{
       width: "350px",
       height: "350px"
     }}  />
    <p>
      <i>groan...</i>
    </p>

    <p>
      This book is written in attempt to lay out what I see as systematic mistakes being made at the intersection of <i>"science"</i> and <i>"spirituality,"</i> and to describe what landmarks I can see in charting a path forward.
    </p>

    <p>
      Move on to the <Link to="/book/introduction">Introduction</Link> to read more.
    </p>

    </div>
  );
}
