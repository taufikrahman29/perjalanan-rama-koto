import React from 'react';
import { DoorOpen, Coffee, Laptop, FileText, PieChart, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene07Arrival({ onNext }) {
  const handleProceed = () => {
    sounds.playTap();
    onNext();
  };

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1 }}>
      <div className="ambient-glow glow-amber"></div>

      <div>
        <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: '700',
            color: 'var(--accent-amber)',
            letterSpacing: '1px',
            marginBottom: '4px',
            fontFamily: 'var(--font-mono)'
          }}>
            00:20 WIB
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#fff' }}>
            “BANG, INI DIA FILENYA...” 💻
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            Pintu kosan Taufik terbuka. Perjuangan malam dimulai.
          </p>
        </div>

        {/* Dialog bubble cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
          <div style={{
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            padding: '16px',
            borderRadius: '16px 16px 16px 4px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px'
          }}>
            <MessageSquareQuote size={24} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '2px' }}>
                Rama Koto
              </div>
              <div style={{ fontSize: '14px', color: '#fff', fontStyle: 'italic' }}>
                “Bang, ini dia filenya... Tolongin ya bang 🙏”
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(52, 211, 153, 0.1)',
            border: '1px solid rgba(52, 211, 153, 0.25)',
            padding: '16px',
            borderRadius: '16px 16px 4px 16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            alignSelf: 'flex-end',
            width: '92%'
          }}>
            <MessageSquareQuote size={24} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-emerald)', marginBottom: '2px' }}>
                Taufik
              </div>
              <div style={{ fontSize: '14px', color: '#fff', fontStyle: 'italic' }}>
                “Sini, kita kebut.”
              </div>
            </div>
          </div>
        </div>

        {/* Workspace Desk items */}
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '14px', letterSpacing: '0.5px' }}>
            MEJA KERJA SIAP BERPERANG:
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '14px', background: 'rgba(0,0,0,0.3)', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Coffee size={20} style={{ color: '#fbbf24' }} />
              <span style={{ fontSize: '13px', fontWeight: '600' }}>☕ Kopi Ready</span>
            </div>

            <div style={{ padding: '14px', background: 'rgba(0,0,0,0.3)', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Laptop size={20} style={{ color: '#a855f7' }} />
              <span style={{ fontSize: '13px', fontWeight: '600' }}>💻 Laptop On</span>
            </div>

            <div style={{ padding: '14px', background: 'rgba(0,0,0,0.3)', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText size={20} style={{ color: '#38bdf8' }} />
              <span style={{ fontSize: '13px', fontWeight: '600' }}>📄 Draft Laporan</span>
            </div>

            <div style={{ padding: '14px', background: 'rgba(0,0,0,0.3)', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <PieChart size={20} style={{ color: '#f43f5e' }} />
              <span style={{ fontSize: '13px', fontWeight: '600' }}>📊 Blank PPT</span>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleProceed} className="btn-primary" style={{ marginTop: '20px' }}>
        <span>MULAI LEMBUR ☕</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
