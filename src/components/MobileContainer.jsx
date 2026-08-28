import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { sounds } from '../utils/soundEngine';

import Stage01Lockscreen from './Stage01Lockscreen';
import Stage02StarGame from './Stage02StarGame';
import Stage03Greeting from './Stage03Greeting';
import Stage04Gallery4Grid from './Stage04Gallery4Grid';

export default function MobileContainer() {
  const [currentStage, setCurrentStage] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const gameAudioRef = useRef(null);
  const podiumAudioRef = useRef(null);

  useEffect(() => {
    // Stage 1: Stop all audio
    if (currentStage === 1) {
      if (gameAudioRef.current) {
        gameAudioRef.current.pause();
        gameAudioRef.current.currentTime = 0;
      }
      if (podiumAudioRef.current) {
        podiumAudioRef.current.pause();
        podiumAudioRef.current.currentTime = 0;
      }
    }

    // Stage 2 (Mini Game): Play Odong-Odong Game Audio
    if (currentStage === 2) {
      if (podiumAudioRef.current) podiumAudioRef.current.pause();
      if (gameAudioRef.current && soundEnabled) {
        gameAudioRef.current.play().catch((err) => {
          console.log('Game audio autoplay prevented:', err);
        });
      }
    }

    // Stage 3 & 4 (Ucapan & Galeri): Play Podium Backsound Audio
    if (currentStage >= 3) {
      if (gameAudioRef.current) gameAudioRef.current.pause();
      if (podiumAudioRef.current && soundEnabled) {
        podiumAudioRef.current.play().catch((err) => {
          console.log('Podium audio autoplay prevented:', err);
        });
      }
    }
  }, [currentStage, soundEnabled]);

  const nextStage = () => {
    setCurrentStage((prev) => Math.min(4, prev + 1));
  };

  const restartJourney = () => {
    setCurrentStage(1);
  };

  const toggleAudio = () => {
    const isNowOn = sounds.toggleSound();
    setSoundEnabled(isNowOn);

    if (!isNowOn) {
      if (gameAudioRef.current) gameAudioRef.current.pause();
      if (podiumAudioRef.current) podiumAudioRef.current.pause();
    } else {
      if (currentStage === 2 && gameAudioRef.current) {
        gameAudioRef.current.play().catch(() => {});
      } else if (currentStage >= 3 && podiumAudioRef.current) {
        podiumAudioRef.current.play().catch(() => {});
      }
    }
  };

  const renderStage = () => {
    switch (currentStage) {
      case 1:
        return <Stage01Lockscreen onUnlock={nextStage} />;
      case 2:
        return <Stage02StarGame onNext={nextStage} />;
      case 3:
        return <Stage03Greeting onNext={nextStage} />;
      case 4:
        return <Stage04Gallery4Grid onRestart={restartJourney} />;
      default:
        return <Stage01Lockscreen onUnlock={nextStage} />;
    }
  };

  return (
    <div className="app-wrapper">
      {/* Game Backsound Audio: Odong-Odong */}
      <audio
        ref={gameAudioRef}
        src="/audio/game_odongodong.mp3"
        loop
        preload="auto"
      />

      {/* Podium Sambutan Backsound Audio */}
      <audio
        ref={podiumAudioRef}
        src="/audio/podium_backsound.mp3"
        loop
        preload="auto"
      />

      {/* App Top Bar - Only on Stages 2, 3, 4 */}
      {currentStage > 1 ? (
        <header className="top-bar">
          <div className="brand-badge">
            <Sparkles size={16} />
            <span>RAMA KOTO • PNS</span>
          </div>

          <div className="top-bar-controls">
            <div className="progress-dots">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`dot ${currentStage === step ? 'active' : ''}`}
                />
              ))}
            </div>

            <button onClick={toggleAudio} className="icon-btn" title="Toggle Audio SFX">
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
          </div>
        </header>
      ) : (
        <div style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 60 }}>
          <button onClick={toggleAudio} className="icon-btn" title="Toggle Audio SFX">
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        </div>
      )}

      {/* Main Interactive Stage */}
      {renderStage()}
    </div>
  );
}
