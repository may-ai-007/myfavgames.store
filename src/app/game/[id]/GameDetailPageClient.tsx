'use client';
import styles from './GameDetail.module.css';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import GameCard from '../../../../components/GameCard/GameCard';
import { FaXTwitter, FaFacebook } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';

interface Game {
  id: string;
  title: string;
  description: string;
  cover: string;
  iframeUrl: string;
  tags: string[];
}

interface GameDetailPageClientProps {
  game: Game;
  related: Game[];
}

export default function GameDetailPageClient({ game, related }: GameDetailPageClientProps) {
  const shareUrl = `https://myfavgames.store/game/${game.id}`;
  const shareText = `🎮 ${game.title}: ${game.description} #${game.tags.join(' #')} Come and try it now!`;

  const handleShare = (platform: 'x' | 'facebook') => {
    let url = '';
    if (platform === 'x') {
      url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    } else if (platform === 'facebook') {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleFullscreen = () => {
    if (typeof window !== 'undefined') {
      const iframe = document.getElementById('game-iframe') as HTMLIFrameElement | null;
      if (iframe) {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        } else if ((iframe as any).webkitRequestFullscreen) {
          (iframe as any).webkitRequestFullscreen();
        }
      }
    }
  };

  return (
    <div className={styles.root}>
      <Header />
      {/* Home 按钮 */}
      <Link href="/" className={styles.fab} aria-label="Home" title="Home">
        <FaHome size={22} />
      </Link>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.iframeWrapper}>
              <iframe
                id="game-iframe"
                src={game.iframeUrl}
                title={game.title}
                className={styles.iframe}
                allowFullScreen
                frameBorder="0"
              />
            </div>
            <div className={styles.actions}>
              <button className={styles.actionBtn} onClick={handleFullscreen}>⛶ Fullscreen</button>
              <button
                className={styles.actionBtn}
                onClick={() => handleShare('x')}
                aria-label="Share to X"
                title="Share to X"
              >
                <FaXTwitter />
              </button>
              <button
                className={styles.actionBtn}
                onClick={() => handleShare('facebook')}
                aria-label="Share to Facebook"
                title="Share to Facebook"
              >
                <FaFacebook />
              </button>
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
                    <div key={rg.id} className={styles.relatedCard}>
                      <GameCard game={{ ...(rg as any), developer: (rg as any).developer ?? "" }} />
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
} 