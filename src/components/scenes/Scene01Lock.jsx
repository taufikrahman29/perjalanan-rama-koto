import React, { useState } from 'react';
import { Lock, KeyRound, ArrowRight, AlertCircle, ShieldAlert } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene01Lock({ onNext }) {
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() === '270826') {
      setIsUnlocked(true);
      sounds.playUnlock();
      setTimeout(() => {
        onNext();
      }, 600);
    } else {
      setIsError(true);
      sounds.playError();
      setTimeout(() => setIsError(false), 500);
    }
  };

  return (
    <div className={`scene-container ${isError ? 'shake' : ''}`} style={{ justifyContent: 'center', zIndex: 1 }}>
      <div className="ambient-glow glow-cyan"></div>
      
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '24px',
          background: 'rgba(0, 242, 254, 0.1)',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto',
          color: '#00f2fe',
          boxShadow: '0 0 25px rgba(0, 242, 254, 0.2)'
        }}>
          <Lock size={36} />
        </div>

        <h1 style={{
          fontSize: '22px',
          fontWeight: '800',
          lineHeight: '1.3',
          letterSpacing: '-0.5px',
          marginBottom: '10px',
          background: 'linear-gradient(135deg, #fff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🔐 PERJALANAN INI TIDAK UNTUK SEMBARANG ORANG
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
          Ada satu cerita yang harus dibuka kembali...
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-cyan)', letterSpacing: '0.5px' }}>
            MASUKKAN PASSWORD
          </label>
          
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Ketik password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 16px 16px 44px',
                borderRadius: '14px',
                background: 'rgba(0, 0, 0, 0.4)',
                border: isError ? '1px solid var(--accent-rose)' : '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                fontSize: '18px',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '2px',
                outline: 'none'
              }}
            />
            <KeyRound size={20} style={{ position: 'absolute', left: '14px', top: '16px', color: 'var(--text-muted)' }} />
          </div>
        </div>

        <div style={{
          padding: '12px 14px',
          borderRadius: '12px',
          background: 'rgba(251, 191, 36, 0.08)',
          border: '1px solid rgba(251, 191, 36, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
          color: '#fbbf24'
        }}>
          <AlertCircle size={16} />
          <span><em>Clue: tanggal yang tidak boleh dilupakan.</em></span>
        </div>

        {isError && (
          <div style={{
            fontSize: '12px',
            color: 'var(--accent-rose)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <ShieldAlert size={14} />
            <span>Password salah! Coba petunjuk tanggal.</span>
          </div>
        )}

        <button type="submit" className="btn-primary" style={{ marginTop: '8px' }}>
          <span>{isUnlocked ? 'MEMBUKA...' : 'BUKA PERJALANAN'}</span>
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
