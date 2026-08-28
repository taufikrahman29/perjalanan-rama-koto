import React, { useEffect } from 'react';
import { AlertTriangle, Clock, ShieldAlert, ArrowRight, Flame } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene09Crisis({ onNext }) {
  useEffect(() => {
    sounds.playAlarm();
  }, []);

  return (
    <div className="scene-container shake" style={{ justifyContent: 'space-between', zIndex: 1 }}>
      <div className="ambient-glow glow-red"></div>

      <div>
        {/* Urgent Header */}
        <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '16px' }}>
          <div style={{
            fontSize: '32px',
            fontWeight: '800',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-rose)',
            letterSpacing: '1px',
            marginBottom: '4px'
          }}>
            02:15 WIB
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#fff' }}>
            KRISIS DEPAN MATA! 🚨
          </h1>
        </div>

        {/* Warning Banner */}
        <div style={{
          padding: '12px 16px',
          borderRadius: '16px',
          background: 'rgba(244, 63, 94, 0.2)',
          border: '1.5px solid var(--accent-rose)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          color: '#fff',
          fontWeight: '800',
          fontSize: '14px',
          marginBottom: '20px',
          boxShadow: '0 0 20px rgba(244, 63, 94, 0.4)'
        }}>
          <AlertTriangle size={20} style={{ color: 'var(--accent-rose)', animation: 'pulseGlow 0.8s infinite' }} />
          <span>⚠️ TIME IS RUNNING OUT</span>
        </div>

        {/* Panic Dialogue */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          <div style={{
            background: 'rgba(244, 63, 94, 0.1)',
            border: '1px solid rgba(244, 63, 94, 0.3)',
            padding: '14px',
            borderRadius: '14px',
            fontSize: '13px'
          }}>
            <div style={{ fontWeight: '700', color: 'var(--accent-rose)', marginBottom: '4px' }}>Rama:</div>
            <div style={{ color: '#fff' }}>
              “Bang, besok presentasi pagi ini! 😭 Tapi belum selesai sama sekali...”
            </div>
          </div>

          <div style={{
            background: 'rgba(52, 211, 153, 0.1)',
            border: '1px solid rgba(52, 211, 153, 0.3)',
            padding: '14px',
            borderRadius: '14px',
            fontSize: '13px'
          }}>
            <div style={{ fontWeight: '700', color: 'var(--accent-emerald)', marginBottom: '4px' }}>Taufik:</div>
            <div style={{ color: '#fff' }}>
              “Tenang, kita kebut aja! Jangan panik 💪”
            </div>
          </div>
        </div>

        {/* Progress Snapshot */}
        <div className="glass-card" style={{ padding: '16px', background: 'rgba(20, 10, 15, 0.8)', border: '1px solid rgba(244, 63, 94, 0.3)' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--accent-rose)', marginBottom: '10px' }}>
            PROGRESS SAAT INI (SANGAT KRITIS):
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
            <span>Laporan</span>
            <span style={{ fontWeight: '700', color: 'var(--accent-rose)' }}>42%</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
            <span>PPT</span>
            <span style={{ fontWeight: '700', color: 'var(--accent-rose)' }}>27%</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
            <span>Revisi</span>
            <span style={{ fontWeight: '700', color: 'var(--accent-rose)' }}>12%</span>
          </div>
        </div>
      </div>

      <button onClick={() => { sounds.playTap(); onNext(); }} className="btn-primary btn-danger" style={{ marginTop: '20px' }}>
        <span>HADAPI FINAL BOSS! 🔥</span>
        <Flame size={18} />
      </button>
    </div>
  );
}
