"use client"
// Import statements...
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Ball from '@/components/ball/ball';
import Bar from '@/components/gamebar/gamebar';
import MapSelection from "@/components/MapSelection/MapSelection";
import './game.css';

export default function HomePage() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [selectedMap, setSelectedMap] = useState<string | null>(null);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  interface map {
    id: number;
    name: string;
    imageUrl?: string;
  }

  const maps: map[] = [
    { id: 1, name: 'Map 1', imageUrl: '/img1.jpg' },
    { id: 2, name: 'Map 2', imageUrl: '/img2.jpg' },
    { id: 3, name: 'Map 3', imageUrl: '/img3.jpg' },
    { id: 4, name: 'Map 4', imageUrl: '/img4.jpg' },
    { id: 5, name: 'Map 5', imageUrl: '/img5.webp' },
    { id: 0, name: 'Default' },
  ];

  const resetGame = () => {
    setSelectedMap(null);
    setGameStarted(false);
  };

  const handleSelectMap = (mapId: string) => {
    setSelectedMap(mapId);
  };

  const handleStartGame = () => {
    if (selectedMap !== null) {
      setGameStarted(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        resetGame();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Head>{/* ... */}</Head>
      <main className="page">
        <div className="square">
          {!isGameStarted ? (
            <MapSelection
              maps={maps}
              onSelectMap={handleSelectMap}
              onStartGame={handleStartGame}
            />
          ) : (
            <div className="gameArea" style={{ backgroundImage: selectedMap ? `url(${maps.find((map) => map.id.toString() === selectedMap)?.imageUrl})` : 'none' }}>
              <div className="topLine"></div>
              <Ball onPositionChange={setBallPosition} />
              <Bar left={true} />
              <Bar left={false} />
              <div className="verticalLine"></div>
              <div className="bottomLine"></div>
              <div className="leftScore">0</div>
              <div className="rightScore">0</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
