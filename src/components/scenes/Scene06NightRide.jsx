import React, { useState, useEffect } from 'react';
import { MapPin, Bike, Navigation, ArrowRight, CheckCircle } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene06NightRide({ onNext }) {
  const [distance, setDistance] = useState(0);
  const [timeStr, setTimeStr] = useState('23:55 WIB');
  const [isArrived, setIsArrived] = useState(false);

  useEffect(() => {
    sounds.playEngine();
    
    const interval = setInterval(() => {
      setDistance((prev) => {
        if (prev >= 12) {
          setIsArrived(true);
          setTimeStr('00:20 WIB');
          return 12;
        }
        const next = prev + 1;
        // update clock time calculation dynamically
        if (next < 5) setTimeStr('00:05 WIB');
        else if (next < 9) setTimeStr('00:12 WIB');
        else setTimeStr('00:20 WIB');
        
        sounds.playTap();
        return next;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1 }}>
      <div className="ambient-glow glow-cyan"></div>

      <div>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: '700',
            color: 'var(--accent-neon)',
            letterSpacing: '1px',
            marginBottom: '4px',
            fontFamily: 'var(--font-mono)'
          }}>
            {timeStr}
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#fff' }}>
            NIGHT RIDE 🌙
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            Menjelajahi 12 KM aspal malam hari.
          </p>
        </div>

        {/* Live Map Box */}
        <div className="glass-card" style={{
          height: '280px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '24px',
          background: '#0a101d',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          overflow: 'hidden'
        }}>
          {/* Street Lights effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle, rgba(251,191,36,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}></div>

          {/* Start Point */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 2 }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(244, 63, 94, 0.2)',
              border: '2px solid var(--accent-rose)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-rose)'
            }}>
              <MapPin size={18} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>TITIK AWAL</div>
              <div style={{ fontWeight: '700', fontSize: '14px', color: '#fff' }}>📍 Kosan Rama</div>
            </div>
          </div>

          {/* Route path line */}
          <div style={{
            position: 'relative',
            height: '100px',
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2
          }}>
            <svg width="100%" height="80" style={{ position: 'absolute' }}>
              <path
                d="M 30 10 Q 150 70 300 40"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="4"
                strokeDasharray="6 6"
              />
              <path
                d="M 30 10 Q 150 70 300 40"
                fill="none"
                stroke="var(--accent-neon)"
                strokeWidth="4"
                strokeDasharray="300"
                strokeDashoffset={300 - (distance / 12) * 300}
                style={{ transition: 'stroke-dashoffset 0.5s ease' }}
              />
            </svg>

            {/* Scooter Moving Marker */}
            <div style={{
              position: 'absolute',
              left: `${(distance / 12) * 75 + 10}%`,
              top: `${Math.sin((distance / 12) * Math.PI) * 30 + 20}px`,
              transition: 'all 0.5s ease',
              background: 'var(--accent-neon)',
              color: '#000',
              padding: '8px',
              borderRadius: '50%',
              boxShadow: '0 0 20px var(--accent-neon)'
            }}>
              <Bike size={20} />
            </div>
          </div>

          {/* End Point */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 2 }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(52, 211, 153, 0.2)',
              border: '2px solid var(--accent-emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-emerald)'
            }}>
              <MapPin size={18} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>TUJUAN</div>
              <div style={{ fontWeight: '700', fontSize: '14px', color: '#fff' }}>📍 Kosan Taufik</div>
            </div>
          </div>
        </div>

        {/* Counter Ticker */}
        <div style={{
          marginTop: '16px',
          padding: '16px',
          borderRadius: '16px',
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>JARAK DITEMPUH</div>
          <div style={{ fontSize: '20px', fontWeight: '800', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
            {distance.toString().padStart(2, '0')} KM / 12 KM
          </div>
        </div>
      </div>

      {isArrived ? (
        <button onClick={onNext} className="btn-primary" style={{ marginTop: '20px' }}>
          <span>TIBA DI KOSAN TAUFIK (00:20 WIB)</span>
          <ArrowRight size={18} />
        </button>
      ) : (
        <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)', padding: '16px' }}>
          Melaju menembus malam... 🏍️
        </div>
      )}
    </div>
  );
}
