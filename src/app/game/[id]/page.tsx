import styles from './GameDetail.module.css';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import { games } from '../../../../data/games';
import GameCard from '../../../../components/GameCard/GameCard';
import GameDetailPageClient from './GameDetailPageClient';
import { notFound } from 'next/navigation';
import type { Game } from '../../../../data/games';

// 动态 meta（SEO/分享）
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = games.find(g => g.id === id);
  if (!game) return {};
  return {
    title: "My Favorite Games",
    description: game.description,
    openGraph: {
      title: "My Favorite Games",
      description: game.description,
      images: [game.cover],
      url: `https://myfavgames.store/game/${game.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: "My Favorite Games",
      description: game.description,
      images: [game.cover],
    },
  };
}

export default async function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = games.find(g => g.id === id);
  if (!game) return notFound();
  const related: Game[] = games
    .filter(g => g.id !== game.id && g.tags.some(tag => game.tags.includes(tag)))
    .map(g => ({ ...g, developer: g.developer ?? "" }))
    .slice(0, 6);
  return <GameDetailPageClient game={game} related={related} />;
}