import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.copyright}>
      © 2025 MyFavGames. All rights reserved.
    </div>
  </footer>
);

export default Footer;