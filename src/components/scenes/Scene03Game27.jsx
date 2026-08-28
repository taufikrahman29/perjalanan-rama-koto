import React, { useState, useEffect } from 'react';
import { Gamepad2, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

const ITEM_TYPES = [
  { id: 'laporan', label: 'Laporan', icon: '📄', color: '#38bdf8' },
  { id: 'laptop', label: 'Laptop', icon: '💻', color: '#a855f7' },
  { id: 'kopi', label: 'Kopi', icon: '☕', color: '#fbbf24' },
  { id: 'revisi', label: 'Revisi', icon: '📝', color: '#f43f5e' },
  { id: 'ppt', label: 'PPT', icon: '📊', color: '#34d399' }
];

export default function Scene03Game27({ onNext }) {
  const [score, setScore] = useState(0);
  const [floatingItems, setFloatingItems] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Generate floating items randomly
  useEffect(() => {
    if (isCompleted) return;
    const interval = setInterval(() => {
      setFloatingItems((prev) => {
        if (prev.length >= 6) return prev;
        const randomItem = ITEM_TYPES[Math.floor(Math.random() * ITEM_TYPES.length)];
        const newItem = {
          id: Math.random().toString(),
          type: randomItem,
          x: Math.floor(Math.random() * 70) + 10,
          y: Math.floor(Math.random() * 60) + 15
        };
        return [...prev, newItem];
      });
    }, 600);

    return () => clearInterval(interval);
  }, [isCompleted]);

  const handleTapItem = (id) => {
    if (isCompleted) return;
    sounds.playTap();
    setScore((prev) => {
      const next = prev + 1;
      if (next >= 27) {
        setIsCompleted(true);
        sounds.playVictory();
        return 27;
      }
      return next;
    });

    setFloatingItems((prev) => prev.filter((item) => item.id !== id));
  };

  const progressPercent = Math.min(100, Math.round((score / 27) * 100));

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1, overflow: 'hidden' }}>
      <div className="ambient-glow glow-cyan"></div>

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
              <span>MISI 27</span>
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#fff' }}>
              SELAMATKAN LATSAR RAMA!
            </h2>
          </div>

          <div style={{
            background: 'rgba(0, 242, 254, 0.12)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            padding: '8px 14px',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>SKOR</div>
            <div style={{ fontSize: '18px', fontWeight: '800', fontFamily: 'var(--font-mono)', color: 'var(--accent-neon)' }}>
              {score} / 27
            </div>
          </div>
        </div>

        {/* Progress Gauges */}
        <div className="glass-card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px', fontWeight: '700' }}>
              <span>LAPORAN</span>
              <span>{progressPercent}%</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--accent-cyan)', transition: 'width 0.2s ease' }}></div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px', fontWeight: '700' }}>
              <span>PPT</span>
              <span>{progressPercent}%</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--accent-amber)', transition: 'width 0.2s ease' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Playground area */}
      <div style={{
        position: 'relative',
        height: '320px',
        margin: '16px 0',
        borderRadius: '24px',
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px dashed rgba(255, 255, 255, 0.15)',
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
              💡 Tap 27 item perlengkapan Latsar!
            </div>

            {floatingItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTapItem(item.id)}
                style={{
                  position: 'absolute',
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  padding: '10px 14px',
                  borderRadius: '16px',
                  background: 'rgba(18, 26, 42, 0.9)',
                  border: `1.5px solid ${item.type.color}`,
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: `0 0 15px ${item.type.color}40`,
                  animation: 'floatItem 2.5s ease-in-out infinite',
                  transition: 'transform 0.1s ease'
                }}
              >
                <span>{item.type.icon}</span>
                <span>{item.type.label}</span>
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
              MISSION COMPLETE!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontStyle: 'italic' }}>
              “Ternyata angka 27 punya cerita sendiri...”
            </p>
          </div>
        )}
      </div>

      {isCompleted ? (
        <button onClick={onNext} className="btn-primary">
          <span>BUKA CERITANYA</span>
          <ArrowRight size={18} />
        </button>
      ) : (
        <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)', padding: '10px' }}>
          Kumpulkan hingga 27 / 27 item!
        </div>
      )}
    </div>
  );
}
