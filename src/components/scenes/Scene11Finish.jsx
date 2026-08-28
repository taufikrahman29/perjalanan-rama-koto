import React, { useEffect } from 'react';
import { CheckCircle2, Trophy, Sun, ArrowRight, MessageSquare } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene11Finish({ onNext }) {
  useEffect(() => {
    sounds.playVictory();
  }, []);

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1 }}>
      <div className="ambient-glow glow-amber" style={{ opacity: 0.8 }}></div>

      <div>
        <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '20px',
            background: 'rgba(251, 191, 36, 0.15)',
            color: 'var(--accent-amber)',
            fontSize: '13px',
            fontWeight: '700',
            marginBottom: '8px'
          }}>
            <Sun size={16} />
            <span>04:25 WIB — FAJAR TIBA</span>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#fff' }}>
            MISSION COMPLETE 🎉
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            Fajar menyingsing, semua tugas selesai dengan sempurna.
          </p>
        </div>

        {/* Checked Progress List */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(52, 211, 153, 0.1)', borderRadius: '12px', color: 'var(--accent-emerald)' }}>
            <CheckCircle2 size={20} />
            <span style={{ fontWeight: '700', fontSize: '15px' }}>✅ LAPORAN SELESAI (100%)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(52, 211, 153, 0.1)', borderRadius: '12px', color: 'var(--accent-emerald)' }}>
            <CheckCircle2 size={20} />
            <span style={{ fontWeight: '700', fontSize: '15px' }}>✅ PPT SELESAI (100%)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(52, 211, 153, 0.1)', borderRadius: '12px', color: 'var(--accent-emerald)' }}>
            <CheckCircle2 size={20} />
            <span style={{ fontWeight: '700', fontSize: '15px' }}>✅ REVISI SELESAI (100%)</span>
          </div>
        </div>

        {/* Concluding Dialogues */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '14px', borderRadius: '14px' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '2px' }}>Rama Koto:</div>
            <div style={{ fontSize: '14px', color: '#fff' }}>
              “Beresss bang! 🙌 Terima kasih banyak!”
            </div>
          </div>

          <div style={{ background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '14px', borderRadius: '14px' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-emerald)', marginBottom: '2px' }}>Taufik:</div>
            <div style={{ fontSize: '14px', color: '#fff' }}>
              “Siap! Besok kamu pasti bisa! Good luck 💯”
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => { sounds.playTap(); onNext(); }} className="btn-primary" style={{ marginTop: '20px' }}>
        <span>LIHAT HASIL AKHIR 🎓</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
