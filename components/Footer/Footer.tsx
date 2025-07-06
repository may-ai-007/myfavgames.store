import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © 2025 MyFavGames. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;