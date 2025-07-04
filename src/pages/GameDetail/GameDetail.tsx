import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './GameDetail.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { games } from '../../data/games';
import GameCard from '../../components/GameCard/GameCard';

const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const game = games.find(g => g.id === id);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const navigate = useNavigate();

  if (!game) {
    return (
      <div className={styles.root}>
        <Header />
        <main className={styles.main}>
          <div className={styles.notFound}>未找到该游戏</div>
        </main>
        <Footer />
      </div>
    );
  }

  // 推荐相关游戏
  const related = games.filter(g =>
    g.id !== game.id && g.tags.some(tag => game.tags.includes(tag))
  ).slice(0, 6);

  const handleFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if ((iframe as any).webkitRequestFullscreen) {
        (iframe as any).webkitRequestFullscreen();
      }
    }
  };

  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.iframeWrapper}>
              <iframe
                ref={iframeRef}
                src={game.iframeUrl}
                title={game.title}
                className={styles.iframe}
                allowFullScreen
                frameBorder="0"
              />
            </div>
            <div className={styles.actions}>
              <button className={styles.actionBtn} onClick={handleFullscreen}>⛶ Full Screen</button>
            </div>
            <div className={styles.title}>{game.title}</div>
            <div className={styles.tags}>
              {game.tags.map(tag => (
                <span className={styles.tag} key={tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.desc}>{game.description}</div>
          </div>
          <div className={styles.right}>
            {related.length > 0 && (
              <div className={styles.relatedSection}>
                <div className={styles.relatedTitle}>Related Games</div>
                <div className={styles.relatedGrid}>
                  {related.map(rg => (
                    <div key={rg.id} className={styles.relatedCard} onClick={() => navigate(`/game/${rg.id}`)}>
                      <GameCard game={rg} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GameDetail;