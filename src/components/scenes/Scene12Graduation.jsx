import React, { useEffect, useState } from 'react';
import { Award, GraduationCap, Sparkles, ArrowRight } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene12Graduation({ onNext }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    sounds.playVictory();
    const t1 = setTimeout(() => setStep(1), 1000);
    const t2 = setTimeout(() => setStep(2), 2200);
    const t3 = setTimeout(() => setStep(3), 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="scene-container" style={{
      justifyContent: 'space-between',
      zIndex: 1,
      background: 'radial-gradient(circle at top, #1e1b4b 0%, #090d16 100%)'
    }}>
      <div className="ambient-glow glow-amber" style={{ top: '10%', opacity: 0.9 }}></div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{
          fontSize: '15px',
          color: 'var(--text-muted)',
          marginBottom: '10px',
          opacity: step >= 0 ? 1 : 0,
          transition: 'opacity 0.6s ease'
        }}>
          Dan siapa sangka...
        </p>

        {step >= 1 && (
          <p style={{
            fontSize: '15px',
            color: '#e2e8f0',
            lineHeight: '1.5',
            marginBottom: '16px',
            animation: 'fadeIn 0.6s ease'
          }}>
            Perjalanan yang dimulai dari<br />
            <strong style={{ color: 'var(--accent-rose)' }}>laporan 0% dan PPT 0%</strong>
          </p>
        )}

        {step >= 2 && (
          <p style={{
            fontSize: '15px',
            color: 'var(--accent-amber)',
            fontStyle: 'italic',
            marginBottom: '30px',
            animation: 'fadeIn 0.6s ease'
          }}>
            akhirnya membawa Rama sampai pada satu titik...
          </p>
        )}

        {step >= 3 && (
          <div className="glass-card" style={{
            padding: '32px 20px',
            border: '2px solid rgba(251, 191, 36, 0.4)',
            background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.15) 0%, rgba(18, 26, 42, 0.9) 100%)',
            boxShadow: '0 0 50px rgba(251, 191, 36, 0.25)',
            animation: 'fadeIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              color: '#000',
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.6)'
            }}>
              <GraduationCap size={44} />
            </div>

            <h1 style={{
              fontSize: '32px',
              fontWeight: '900',
              letterSpacing: '1px',
              color: '#fff',
              marginBottom: '6px'
            }}>
              RAMA KOTO
            </h1>

            <div style={{
              fontSize: '20px',
              fontWeight: '800',
              color: 'var(--accent-amber)',
              marginBottom: '16px'
            }}>
              LULUS LATSAR CPNS! 🎉
            </div>

            <div style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              borderTop: '1px dashed rgba(255,255,255,0.15)',
              paddingTop: '12px'
            }}>
              “Perjalanan gila, tapi berharga.”
            </div>
          </div>
        )}
      </div>

      {step >= 3 && (
        <button onClick={() => { sounds.playTap(); onNext(); }} className="btn-primary" style={{ marginTop: '20px' }}>
          <span>BUKA PESAN TERAKHIR ✉️</span>
          <ArrowRight size={18} />
        </button>
      )}
    </div>
  );
}
