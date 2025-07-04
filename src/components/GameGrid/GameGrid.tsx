import React from 'react';
import Masonry from 'react-masonry-css';
import styles from './GameGrid.module.css';
import type { Game } from '../../data/games';
import GameCard from '../GameCard/GameCard';

interface GameGridProps {
  games: Game[];
}

const breakpointColumnsObj = {
  default: 6,
  1400: 5,
  1100: 4,
  900: 3,
  600: 2
};

const GameGrid: React.FC<GameGridProps> = ({ games }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.grid}
      columnClassName={styles.gridColumn}
    >
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </Masonry>
  );
};

export default GameGrid;