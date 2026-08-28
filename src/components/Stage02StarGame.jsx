import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Star, Gamepad2, ArrowRight, Sparkles, Trophy } from 'lucide-react';
import { sounds } from '../utils/soundEngine';

export default function Stage02StarGame({ onNext }) {
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Generate floating stars randomly
  useEffect(() => {
    if (isCompleted) return;
    const interval = setInterval(() => {
      setStars((prev) => {
        if (prev.length >= 6) return prev;
        const newStar = {
          id: Math.random().toString(),
          x: Math.floor(Math.random() * 70) + 10,
          y: Math.floor(Math.random() * 60) + 15,
          scale: 0.8 + Math.random() * 0.4
        };
        return [...prev, newStar];
      });
    }, 550);

    return () => clearInterval(interval);
  }, [isCompleted]);

  const handleTapStar = (id) => {
    if (isCompleted) return;
    sounds.playTap();

    setScore((prev) => {
      const next = prev + 1;
      if (next >= 27) {
        setIsCompleted(true);
        sounds.playVictory();
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
        return 27;
      }
      return next;
    });

    setStars((prev) => prev.filter((star) => star.id !== id));
  };

  const progressPercent = Math.min(100, Math.round((score / 27) * 100));

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1, overflow: 'hidden' }}>
      <div className="ambient-glow glow-amber"></div>

      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-amber)', fontSize: '13px', fontWeight: '700' }}>
              <Gamepad2 size={16} />
              <span>MINI GAME</span>
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#fff' }}>
              KUMPULKAN 27 BINTANG ⭐
            </h2>
          </div>

          <div style={{
            background: 'rgba(251, 191, 36, 0.15)',
            border: '1px solid rgba(251, 191, 36, 0.4)',
            padding: '8px 16px',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>BINTANG</div>
            <div style={{ fontSize: '18px', fontWeight: '800', fontFamily: 'var(--font-mono)', color: 'var(--accent-amber)' }}>
              {score} / 27
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="glass-card" style={{ padding: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px', fontWeight: '700' }}>
            <span>PROGRESS KEBERHASILAN</span>
            <span style={{ color: 'var(--accent-amber)' }}>{progressPercent}%</span>
          </div>
          <div style={{ width: '100%', height: '10px', background: 'rgba(0,0,0,0.4)', borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', transition: 'width 0.2s ease' }}></div>
          </div>
        </div>
      </div>

      {/* Game Playground area */}
      <div style={{
        position: 'relative',
        height: '320px',
        margin: '16px 0',
        borderRadius: '24px',
        background: 'rgba(0, 0, 0, 0.35)',
        border: '1px dashed rgba(251, 191, 36, 0.3)',
        overflow: 'hidden'
      }}>
        {!isCompleted ? (
          <>
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '12px',
              color: 'var(--text-muted)',
              pointerEvents: 'none'
            }}>
              💡 Tap bintang ⭐ yang bermunculan!
            </div>

            {stars.map((star) => (
              <button
                key={star.id}
                onClick={() => handleTapStar(star.id)}
                style={{
                  position: 'absolute',
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '36px',
                  filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.8))',
                  animation: 'floatItem 2.2s ease-in-out infinite',
                  transform: `scale(${star.scale})`,
                  transition: 'transform 0.1s ease'
                }}
              >
                ⭐
              </button>
            ))}
          </>
        ) : (
          <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            animation: 'fadeIn 0.5s ease'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '10px',
              animation: 'pulseGlow 1s infinite'
            }}>🎉</div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--accent-amber)', marginBottom: '8px' }}>
              MISI BERHASIL!
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px', fontStyle: 'italic' }}>
              “Surat ucapan khusus untuk Rama telah terbuka.”
            </p>
          </div>
        )}
      </div>

      {isCompleted ? (
        <button onClick={() => { sounds.playTap(); onNext(); }} className="btn-primary">
          <span>BUKA SURAT UCAPAN 💌</span>
          <ArrowRight size={18} />
        </button>
      ) : (
        <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)', padding: '10px' }}>
          Kumpulkan 27 Bintang Keberhasilan! ⭐
        </div>
      )}
    </div>
  );
}
