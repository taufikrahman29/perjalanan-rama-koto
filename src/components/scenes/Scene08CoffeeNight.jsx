import React, { useState, useEffect } from 'react';
import { Coffee, Flame, Cpu, ArrowRight, Keyboard } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene08CoffeeNight({ onNext }) {
  const [laporan, setLaporan] = useState(12);
  const [ppt, setPpt] = useState(3);
  const [revisi, setRevisi] = useState(0);
  const [time, setTime] = useState('00:30 WIB');

  useEffect(() => {
    const interval = setInterval(() => {
      sounds.playKeyboard();
      setLaporan((prev) => Math.min(35, prev + 2));
      setPpt((prev) => Math.min(20, prev + 1));
      setRevisi((prev) => Math.min(8, prev + 1));
      
      setTime((prev) => {
        if (prev === '00:30 WIB') return '01:00 WIB';
        if (prev === '01:00 WIB') return '01:30 WIB';
        return '01:45 WIB';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1 }}>
      <div className="ambient-glow glow-amber"></div>

      <div>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: '700',
            color: 'var(--accent-amber)',
            letterSpacing: '1px',
            marginBottom: '4px',
            fontFamily: 'var(--font-mono)'
          }}>
            {time}
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#fff' }}>
            COFFEE NIGHT ☕🌙
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            Fokus tinggi, keyboard berbunyi, malam semakin larut.
          </p>
        </div>

        {/* Highlight Tag */}
        <div style={{
          padding: '10px 16px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(244, 63, 94, 0.2))',
          border: '1px solid rgba(251, 191, 36, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          color: '#fbbf24',
          fontWeight: '700',
          fontSize: '14px',
          marginBottom: '20px'
        }}>
          <Flame size={18} style={{ animation: 'pulseGlow 1s infinite' }} />
          <span>Kopi Kenangan Menyala ☕🔥</span>
        </div>

        {/* Overtime Dashboard */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '700', color: 'var(--accent-cyan)' }}>
              <Cpu size={16} />
              <span>PROJECT: LATSAR RAMA</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-muted)' }}>
              <Keyboard size={14} />
              <span>Mengetik...</span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px', fontWeight: '600' }}>
              <span>LAPORAN</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{laporan}%</span>
            </div>
            <div style={{ width: '100%', height: '10px', background: 'rgba(0,0,0,0.4)', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: `${laporan}%`, height: '100%', background: 'var(--accent-cyan)', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px', fontWeight: '600' }}>
              <span>PPT</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-amber)' }}>{ppt}%</span>
            </div>
            <div style={{ width: '100%', height: '10px', background: 'rgba(0,0,0,0.4)', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: `${ppt}%`, height: '100%', background: 'var(--accent-amber)', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px', fontWeight: '600' }}>
              <span>REVISI</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-rose)' }}>{revisi}%</span>
            </div>
            <div style={{ width: '100%', height: '10px', background: 'rgba(0,0,0,0.4)', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: `${revisi}%`, height: '100%', background: 'var(--accent-rose)', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => { sounds.playTap(); onNext(); }} className="btn-primary" style={{ marginTop: '20px' }}>
        <span>TIBA-TIBA WAKTU MENAMPEL...</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
