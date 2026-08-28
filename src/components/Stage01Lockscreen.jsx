import React, { useState, useEffect } from 'react';
import { Lock, Unlock, Delete, ShieldAlert } from 'lucide-react';
import { sounds } from '../utils/soundEngine';

export default function Stage01Lockscreen({ onUnlock }) {
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [pin, setPin] = useState('');
  const [isError, setIsError] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const mins = now.getMinutes().toString().padStart(2, '0');
      setTimeStr(`${hours}:${mins}`);

      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      setDateStr(now.toLocaleDateString('id-ID', options));
    };

    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleKeyPress = (digit) => {
    if (isUnlocking || pin.length >= 6) return;
    sounds.playTap();
    const newPin = pin + digit;
    setPin(newPin);

    if (newPin.length === 6) {
      if (newPin === '270826') {
        setIsUnlocking(true);
        sounds.playUnlock();
        setTimeout(() => {
          onUnlock();
        }, 650);
      } else {
        setIsError(true);
        sounds.playError();
        setTimeout(() => {
          setIsError(false);
          setPin('');
        }, 500);
      }
    }
  };

  const handleDelete = () => {
    if (isUnlocking || pin.length === 0) return;
    sounds.playTap();
    setPin((prev) => prev.slice(0, -1));
  };

  return (
    <div
      className={`scene-container ${isError ? 'shake' : ''}`}
      style={{
        justifyContent: 'space-between',
        zIndex: 1,
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(9, 13, 22, 0.75) 55%, rgba(9, 13, 22, 0.96) 100%), url('/gallery/rama_hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '0 20px 24px 20px',
        position: 'relative'
      }}
    >
      {/* iOS Status Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '12px',
        paddingBottom: '4px',
        zIndex: 10
      }}>
        <div style={{ color: '#fff', fontSize: '13px', fontWeight: '700' }}>
          5G 📍
        </div>

        {/* Center Dynamic Island Notch with Lock */}
        <div style={{
          width: '90px',
          height: '26px',
          background: '#000',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          color: '#fff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          {isUnlocking ? <Unlock size={14} style={{ color: 'var(--accent-neon)' }} /> : <Lock size={14} />}
        </div>

        <div style={{
          color: '#fff',
          fontSize: '12px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <div style={{
            width: '20px',
            height: '11px',
            border: '1.5px solid #fff',
            borderRadius: '4px',
            padding: '1px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{ width: '80%', height: '100%', background: '#fff', borderRadius: '1px' }}></div>
          </div>
        </div>
      </div>

      {/* Prominent Day & Time Header */}
      <div style={{ textAlign: 'center', marginTop: '12px' }}>
        <div style={{
          fontSize: '13px',
          fontWeight: '700',
          letterSpacing: '1px',
          color: 'rgba(255, 255, 255, 0.9)',
          textTransform: 'uppercase',
          marginBottom: '2px',
          textShadow: '0 2px 8px rgba(0,0,0,0.8)'
        }}>
          {dateStr || 'JUMAT, 28 AGUSTUS 2026'}
        </div>

        <h1 style={{
          fontSize: '58px',
          fontWeight: '800',
          fontFamily: 'var(--font-mono)',
          color: '#fff',
          letterSpacing: '-2px',
          lineHeight: '1',
          textShadow: '0 4px 24px rgba(0,0,0,0.8)'
        }}>
          {timeStr || '10:40'}
        </h1>
      </div>

      {/* Passcode Title & Indicator Dots */}
      <div style={{ textAlign: 'center', margin: '6px 0' }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#fff',
          marginBottom: '16px',
          textShadow: '0 2px 8px rgba(0,0,0,0.8)'
        }}>
          Enter Passcode
        </h3>

        {/* 6 Dots Indicator (Larger 15px) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '4px' }}>
          {Array.from({ length: 6 }).map((_, idx) => {
            const isFilled = pin.length > idx;
            return (
              <div
                key={idx}
                style={{
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  border: isError
                    ? '2px solid var(--accent-rose)'
                    : isFilled
                    ? '2px solid var(--accent-neon)'
                    : '2px solid rgba(255, 255, 255, 0.5)',
                  background: isError
                    ? 'var(--accent-rose)'
                    : isFilled
                    ? 'var(--accent-neon)'
                    : 'transparent',
                  boxShadow: isFilled ? '0 0 14px var(--accent-neon)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              />
            );
          })}
        </div>

        {isError && (
          <div style={{
            fontSize: '12px',
            color: 'var(--accent-rose)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            marginTop: '8px',
            fontWeight: '600'
          }}>
            <ShieldAlert size={14} />
            <span>PIN Salah! Coba Lagi.</span>
          </div>
        )}
      </div>

      {/* Prominent & Large Glass Keypad 0-9 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px 22px',
        maxWidth: '310px',
        margin: '0 auto 8px auto'
      }}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
          <button
            key={num}
            onClick={() => handleKeyPress(num)}
            style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.22)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1.5px solid rgba(255, 255, 255, 0.35)',
              color: '#fff',
              fontSize: '32px',
              fontWeight: '800',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
              transition: 'transform 0.08s ease, background 0.08s ease'
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.92)';
              e.currentTarget.style.background = 'rgba(0, 242, 254, 0.45)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'scale(0.92)';
              e.currentTarget.style.background = 'rgba(0, 242, 254, 0.45)';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
            }}
          >
            {num}
          </button>
        ))}

        {/* Bottom Keypad Row */}
        <div style={{ width: '76px', height: '76px', margin: '0 auto' }}></div>

        <button
          onClick={() => handleKeyPress('0')}
          style={{
            width: '76px',
            height: '76px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(255, 255, 255, 0.35)',
            color: '#fff',
            fontSize: '32px',
            fontWeight: '800',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
            transition: 'transform 0.08s ease, background 0.08s ease'
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.92)';
            e.currentTarget.style.background = 'rgba(0, 242, 254, 0.45)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.transform = 'scale(0.92)';
            e.currentTarget.style.background = 'rgba(0, 242, 254, 0.45)';
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
          }}
        >
          0
        </button>

        <button
          onClick={handleDelete}
          style={{
            width: '76px',
            height: '76px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.12)',
            border: 'none',
            color: 'rgba(255,255,255,0.95)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
          }}
        >
          <Delete size={26} />
        </button>
      </div>
    </div>
  );
}
