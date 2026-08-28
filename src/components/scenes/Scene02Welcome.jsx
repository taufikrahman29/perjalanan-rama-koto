import React from 'react';
import { Sparkles, Bike, MapPin, FileText, PieChart, Rocket } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene02Welcome({ onNext }) {
  const handleStart = () => {
    sounds.playTap();
    onNext();
  };

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1 }}>
      <div className="ambient-glow glow-amber"></div>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '20px',
          background: 'rgba(56, 189, 248, 0.1)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          color: 'var(--accent-cyan)',
          fontSize: '12px',
          fontWeight: '700',
          marginBottom: '16px'
        }}>
          <Sparkles size={14} />
          <span>CHAPTER 01</span>
        </div>

        <h1 style={{
          fontSize: '26px',
          fontWeight: '800',
          letterSpacing: '-0.5px',
          marginBottom: '8px',
          color: '#fff'
        }}>
          SELAMAT DATANG,<br />
          <span style={{ color: 'var(--accent-neon)' }}>RAMA KOTO</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
          Sebuah lembar kenangan di balik layar kelulusan.
        </p>
      </div>

      <div className="glass-card" style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: '#fbbf24' }}>
            🌙
          </div>
          <span style={{ fontSize: '15px', fontWeight: '600' }}>Satu malam.</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)' }}>
            <Bike size={18} />
          </div>
          <span style={{ fontSize: '15px', fontWeight: '600' }}>Satu motor Beat.</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(52, 211, 153, 0.1)', color: 'var(--accent-emerald)' }}>
            <MapPin size={18} />
          </div>
          <span style={{ fontSize: '15px', fontWeight: '600' }}>12 KM perjalanan.</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.1)', color: 'var(--accent-rose)' }}>
            <FileText size={18} />
          </div>
          <span style={{ fontSize: '15px', fontWeight: '600' }}>Satu laporan yang belum selesai.</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24' }}>
            <PieChart size={18} />
          </div>
          <span style={{ fontSize: '15px', fontWeight: '600' }}>Dan satu PPT yang masih 0%.</span>
        </div>
      </div>

      <button onClick={handleStart} className="btn-primary">
        <span>MULAI PERJALANAN</span>
        <Rocket size={18} />
      </button>
    </div>
  );
}
