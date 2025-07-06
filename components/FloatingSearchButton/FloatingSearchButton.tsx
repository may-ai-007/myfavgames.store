'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './FloatingSearchButton.module.css';
import { games } from '../../data/games';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

function FloatingSearchButton() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setQuery('');
  };

  const handleSelect = (id: string) => {
    router.push(`/game/${id}`);
    handleClose();
  };

  const filtered = games.filter(g =>
    g.title.toLowerCase().includes(query.toLowerCase()) ||
    g.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <button className={styles.fab} onClick={handleOpen} aria-label={t('search_placeholder')}>
        <FaSearch size={22} />
      </button>
      {open && (
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <input
              ref={inputRef}
              className={styles.input}
              type="text"
              placeholder={t('search_placeholder')}
              value={query}
              onChange={e => setQuery(e.target.value)}
              maxLength={32}
            />
            <div className={styles.results}>
              {filtered.length === 0 && (
                <div className={styles.noResult}>{t('not_found')}</div>
              )}
              {filtered.slice(0, 8).map(game => (
                <div
                  key={game.id}
                  className={styles.resultItem}
                  onClick={() => handleSelect(game.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={game.title}
                >
                  <img src={game.cover} alt={game.title} className={styles.resultCover} />
                  <span className={styles.resultTitle}>{game.title}</span>
                </div>
              ))}
            </div>
            <button className={styles.closeBtn} onClick={handleClose} aria-label="关闭搜索">×</button>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingSearchButton;