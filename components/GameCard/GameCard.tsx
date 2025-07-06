'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './GameCard.module.css';
import type { Game } from '../../data/games';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/game/${game.id}`);
  };

  return (
    <div
      className={`${styles.card} ${game.size === 'large' ? styles.large : ''}`}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={game.title}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.coverWrapper}>
        {game.hoverCover && hover ? (
          <video
            src={game.hoverCover}
            className={styles.cover}
            autoPlay
            loop
            muted
            playsInline
            poster={game.cover}
          />
        ) : (
          <img src={game.cover} alt={game.title} className={styles.cover} />
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{game.title}</h3>
        <div className={styles.tags}>
          {game.tags.map(tag => (
            <span className={styles.tag} key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameCard;