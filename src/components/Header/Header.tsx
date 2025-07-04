import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

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

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        {logoText.split('').map((char, i) => (
          <span key={i} style={{ color: logoColors[i % logoColors.length], fontWeight: 800 }}>
            {char}
          </span>
        ))}
      </Link>
    </header>
  );
};

export default Header;