import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import FloatingSearchButton from '../../components/FloatingSearchButton/FloatingSearchButton';
import GameGrid from '../../components/GameGrid/GameGrid';
import Footer from '../../components/Footer/Footer';
import { games } from '../../data/games';

export default function Home() {
  return (
    <div className={styles.root}>
      <Header />
      <FloatingSearchButton />
      <main className={styles.main}>
        <GameGrid games={games} />
      </main>
      <Footer />
    </div>
  );
}