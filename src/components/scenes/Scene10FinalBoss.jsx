import React, { useState } from 'react';
import { Flame, Zap, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene10FinalBoss({ onNext }) {
  const [taps, setTaps] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Targets
  const maxTaps = 20;

  const handleTap = () => {
    if (isFinished) return;
    sounds.playTap();
    sounds.playKeyboard();

    setTaps((prev) => {
      const next = prev + 1;
      if (next >= maxTaps) {
        setIsFinished(true);
        sounds.playVictory();
        return maxTaps;
      }
      return next;
    });
  };

  const progressFactor = taps / maxTaps;
  const laporanVal = Math.round(42 + progressFactor * (85 - 42));
  const pptVal = Math.round(27 + progressFactor * (72 - 27));
  const revisiVal = Math.round(12 + progressFactor * (65 - 12));

  // Time dynamic calculate
  let clockStr = '02:15 WIB';
  if (taps > 5) clockStr = '02:40 WIB';
  if (taps > 10) clockStr = '03:10 WIB';
  if (taps >= maxTaps) clockStr = '03:37 WIB';

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1 }}>
      <div className="ambient-glow glow-red"></div>

      <div>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: '700',
            color: 'var(--accent-amber)',
            letterSpacing: '1px',
            fontFamily: 'var(--font-mono)',
            marginBottom: '4px'
          }}>
            {clockStr}
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#fff' }}>
            🎮 FINAL MISSION: KEJAR DEADLINE!
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            Tap tombol <strong>KERJAKAN!</strong> secepat mungkin!
          </p>
        </div>

        {/* Progress Gauges */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '16px 0' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>
              <span>LAPORAN (TARGET 85%)</span>
              <span style={{ color: 'var(--accent-cyan)' }}>{laporanVal}%</span>
            </div>
            <div style={{ width: '100%', height: '10px', background: 'rgba(0,0,0,0.4)', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: `${laporanVal}%`, height: '100%', background: 'var(--accent-cyan)', transition: 'width 0.1s ease' }}></div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>
              <span>PPT (TARGET 72%)</span>
              <span style={{ color: 'var(--accent-amber)' }}>{pptVal}%</span>
            </div>
            <div style={{ width: '100%', height: '10px', background: 'rgba(0,0,0,0.4)', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: `${pptVal}%`, height: '100%', background: 'var(--accent-amber)', transition: 'width 0.1s ease' }}></div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>
              <span>REVISI (TARGET 65%)</span>
              <span style={{ color: 'var(--accent-rose)' }}>{revisiVal}%</span>
            </div>
            <div style={{ width: '100%', height: '10px', background: 'rgba(0,0,0,0.4)', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: `${revisiVal}%`, height: '100%', background: 'var(--accent-rose)', transition: 'width 0.1s ease' }}></div>
            </div>
          </div>
        </div>

        {isFinished && (
          <div style={{
            padding: '16px',
            borderRadius: '16px',
            background: 'rgba(52, 211, 153, 0.15)',
            border: '1px solid var(--accent-emerald)',
            textAlign: 'center',
            color: 'var(--accent-emerald)',
            fontWeight: '800',
            fontSize: '16px',
            animation: 'fadeIn 0.4s ease'
          }}>
            💥 03:37 WIB — BERHASIL DIKEJAR! (85% | 72% | 65%)
          </div>
        )}
      </div>

      {!isFinished ? (
        <button
          onClick={handleTap}
          style={{
            width: '100%',
            height: '90px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
            border: 'none',
            color: '#fff',
            fontSize: '22px',
            fontWeight: '900',
            letterSpacing: '2px',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(255, 65, 108, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            transform: 'scale(1)',
            transition: 'transform 0.05s ease'
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onTouchStart={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
          onTouchEnd={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Zap size={28} />
          <span>KERJAKAN! ({taps}/{maxTaps})</span>
        </button>
      ) : (
        <button onClick={onNext} className="btn-primary" style={{ marginTop: '20px' }}>
          <span>SELESAIKAN PERJUANGAN 🎉</span>
          <ArrowRight size={18} />
        </button>
      )}
    </div>
  );
}
