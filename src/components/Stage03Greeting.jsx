import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Award, ArrowRight, MessageSquare, Flame } from 'lucide-react';
import { sounds } from '../utils/soundEngine';

export default function Stage03Greeting({ onNext }) {
  useEffect(() => {
    sounds.playVictory();
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.5 }
    });
  }, []);

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1 }}>
      <div className="ambient-glow glow-amber"></div>
      <div className="ambient-glow glow-cyan" style={{ bottom: '10%' }}></div>

      <div>
        {/* Header Badge */}
        <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '24px',
            background: 'rgba(251, 191, 36, 0.15)',
            border: '1px solid rgba(251, 191, 36, 0.4)',
            color: 'var(--accent-amber)',
            fontSize: '13px',
            fontWeight: '800',
            marginBottom: '14px',
            boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)'
          }}>
            <Sparkles size={16} />
            <span>PELANTIKAN RESMI CPNS ➡️ PNS</span>
          </div>

          <h1 style={{
            fontSize: '28px',
            fontWeight: '900',
            color: '#fff',
            letterSpacing: '-0.5px',
            lineHeight: '1.3'
          }}>
            WILUJENG PELANTIKAN,<br />
            <span style={{ color: 'var(--accent-amber)' }}>RAMA KOTO! 🎉</span>
          </h1>
        </div>

        {/* Formal Greeting Card */}
        <div className="glass-card" style={{
          padding: '20px',
          marginBottom: '16px',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.08) 0%, rgba(18, 26, 42, 0.9) 100%)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-emerald)', fontWeight: '700', fontSize: '13px', marginBottom: '10px' }}>
            <Award size={18} />
            <span>DOA & UCAPAN RESMI</span>
          </div>

          <p style={{
            fontSize: '14px',
            color: '#e2e8f0',
            lineHeight: '1.65'
          }}>
            Selamat atas pelantikan sebagai Pegawai Negeri Sipil. Semoga selalu amanah, dimudahkan dalam menjalankan tugas, dan sukses dalam perjalanan barunya.
          </p>
        </div>

        {/* Candaan Card */}
        <div className="glass-card" style={{
          padding: '20px',
          border: '1px solid rgba(244, 63, 94, 0.3)',
          background: 'rgba(244, 63, 94, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-rose)', fontWeight: '700', fontSize: '13px', marginBottom: '8px' }}>
            <Flame size={18} />
            <span>INGAT PESAN PENTING INI:</span>
          </div>

          <p style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '8px' }}>
            Tapi satu hal yang jangan sampai lupa…
          </p>

          <p style={{ fontSize: '15px', fontWeight: '800', color: 'var(--accent-amber)', marginBottom: '8px', lineHeight: '1.4' }}>
            Jangan lupa sama janji-janjinya ya, HAHAHA 😂
          </p>

          <p style={{ fontSize: '13px', color: '#cbd5e1', fontStyle: 'italic', lineHeight: '1.5' }}>
            Jabatan boleh naik, penghasilan boleh naik, tapi jangan sampai orangnya ikut meninggi. 🤣
          </p>
        </div>
      </div>

      <button onClick={() => { sounds.playTap(); onNext(); }} className="btn-primary" style={{ marginTop: '20px' }}>
        <span>LIHAT GALERI PERJALANAN 📸</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
