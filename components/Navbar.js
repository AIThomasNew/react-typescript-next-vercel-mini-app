import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Thomas Next</div>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/contacts">
          <a>Contacts</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
