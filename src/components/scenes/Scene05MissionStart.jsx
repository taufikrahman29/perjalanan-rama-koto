import React from 'react';
import { Bike, Navigation, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene05MissionStart({ onNext }) {
  const handleProceed = () => {
    sounds.playEngine();
    onNext();
  };

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1 }}>
      <div className="ambient-glow glow-amber"></div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{
          fontSize: '32px',
          fontWeight: '800',
          fontFamily: 'var(--font-mono)',
          color: 'var(--accent-amber)',
          letterSpacing: '1px',
          marginBottom: '4px'
        }}>
          23:55 WIB
        </div>

        <h1 style={{
          fontSize: '28px',
          fontWeight: '800',
          letterSpacing: '-0.5px',
          color: '#fff',
          marginBottom: '8px'
        }}>
          RAMA BERANGKAT.
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
          Menembus dinginnya malam demi sebuah kelulusan.
        </p>
      </div>

      {/* Hero Scooter Card Illustration */}
      <div className="glass-card" style={{
        margin: '20px 0',
        padding: '30px 20px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.08) 0%, rgba(18, 26, 42, 0.9) 100%)',
        border: '1px solid rgba(251, 191, 36, 0.3)'
      }}>
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'rgba(251, 191, 36, 0.15)',
          border: '2px solid var(--accent-amber)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto',
          color: 'var(--accent-amber)',
          boxShadow: '0 0 30px rgba(251, 191, 36, 0.3)',
          animation: 'pulseGlow 2s infinite'
        }}>
          <Bike size={48} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
          <div style={{
            padding: '12px 16px',
            borderRadius: '14px',
            background: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Bike size={20} style={{ color: 'var(--accent-amber)' }} />
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>KENDARAAN</div>
              <div style={{ fontWeight: '700', fontSize: '14px', color: '#fff' }}>Motor Beat</div>
            </div>
          </div>

          <div style={{
            padding: '12px 16px',
            borderRadius: '14px',
            background: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Navigation size={20} style={{ color: 'var(--accent-cyan)' }} />
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>JARAK TEMPUH</div>
              <div style={{ fontWeight: '700', fontSize: '14px', color: '#fff' }}>± 12 KM</div>
            </div>
          </div>

          <div style={{
            padding: '12px 16px',
            borderRadius: '14px',
            background: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Clock size={20} style={{ color: 'var(--accent-emerald)' }} />
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>ESTIMASI WAKTU</div>
              <div style={{ fontWeight: '700', fontSize: '14px', color: '#fff' }}>± 25 Menit</div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleProceed} className="btn-primary">
        <span>LANJUTKAN PERJALANAN</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
