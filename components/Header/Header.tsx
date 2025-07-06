'use client';
import styles from './Header.module.css';
import Link from 'next/link';

const logoColors = [
  '#4285F4', // M
  '#EA4335', // y
  '#FBBC05', // F
  '#4285F4', // a
  '#34A853', // v
  '#EA4335', // G
  '#FBBC05', // a
  '#4285F4', // m
  '#34A853', // e
  '#EA4335', // s
];

const logoText = 'MyFavGames';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        {logoText.split('').map((char, i) => (
          <span key={i} style={{ color: logoColors[i % logoColors.length], fontWeight: 800 }}>
            {char}
          </span>
        ))}
      </Link>
    </header>
  );
}

export default Header;