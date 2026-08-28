import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, MapPin, Coffee, GraduationCap, Award, Image as ImageIcon, RotateCcw, Gift, Trophy } from 'lucide-react';
import { sounds } from '../utils/soundEngine';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Resmi jadi ASN",
    time: "MOMEN RESMI",
    tag: "RESMI ASN",
    icon: Award,
    color: "#38bdf8",
    image: "/gallery/resmi_asn.png",
    description: "Momen bersejarah Rama Koto resmi dilantik menjadi Aparatur Sipil Negara (ASN)."
  },
  {
    id: 2,
    title: "Lembur Kopi Kenangan",
    time: "02:15 WIB",
    tag: "KRISIS DEADLINE",
    icon: Coffee,
    color: "#fbbf24",
    image: "/gallery/lembur_kosan.png",
    description: "Pukul 02:15 WIB laporan 42% & PPT 27%. Kopi Kenangan menyala membakar semangat lembur."
  },
  {
    id: 3,
    title: "Presentasi Latsar CPNS",
    time: "08:00 WIB",
    tag: "PRESENTASI LATSAR",
    icon: GraduationCap,
    color: "#a855f7",
    image: "/gallery/presentasi_latsar.png",
    description: "Dari laporan 0% & PPT 0% tuntas 100% dan sukses saat Presentasi Latsar CPNS."
  },
  {
    id: 4,
    title: "Pelantikan Resmi PNS",
    time: "HARI INI",
    tag: "MOMEN RESMI",
    icon: Award,
    color: "#34d399",
    image: "/gallery/pns_oath.png",
    description: "Selamat atas pelantikan Pegawai Negeri Sipil, Rama Koto! Wilujeng janten PNS! 🎊"
  }
];

export default function Stage04Gallery4Grid({ onRestart }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  const handlePhotoClick = (item) => {
    sounds.playTap();
    setSelectedPhoto(item);
  };

  const triggerCelebration = () => {
    sounds.playVictory();
    setIsGiftOpen(true);

    // Multi-stage fireworks explosion
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleRestartJourney = () => {
    sounds.playVictory();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
    onRestart();
  };

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1 }}>
      <div className="ambient-glow glow-cyan"></div>
      <div className="ambient-glow glow-amber" style={{ bottom: '10%' }}></div>

      <div>
        {/* Header */}
        <div style={{ textAlign: 'center', marginTop: '6px', marginBottom: '14px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '20px',
            background: 'rgba(0, 242, 254, 0.1)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            color: 'var(--accent-neon)',
            fontSize: '12px',
            fontWeight: '700',
            marginBottom: '8px'
          }}>
            <ImageIcon size={14} />
            <span>GALERI PERJALANAN</span>
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
            📸 4 GRID FOTO KENANGAN
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            Tap foto untuk melihat detail fullscreen & caption.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          marginBottom: '16px'
        }}>
          {GALLERY_ITEMS.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => handlePhotoClick(item)}
                style={{
                  position: 'relative',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: `1.5px solid ${item.color}`,
                  boxShadow: `0 4px 18px ${item.color}25`,
                  background: '#0a101d',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                }}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onTouchStart={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
                onTouchEnd={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ position: 'relative', width: '100%', height: '110px' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    padding: '2px 8px',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.8)',
                    color: item.color,
                    fontSize: '10px',
                    fontWeight: '700',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {item.time}
                  </div>
                </div>

                <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: item.color, fontWeight: '700' }}>
                    <IconComp size={12} />
                    <span>{item.tag}</span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: '#fff', lineHeight: '1.3' }}>
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ✨ Ending Penutup Card */}
        <div className="glass-card" style={{
          padding: '16px',
          textAlign: 'center',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.08) 0%, rgba(18, 26, 42, 0.9) 100%)',
          marginBottom: '14px'
        }}>
          <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--accent-amber)', marginBottom: '6px' }}>
            ✨ “Perjalanan baru dimulai…”
          </div>

          <p style={{ fontSize: '13px', color: '#e2e8f0', lineHeight: '1.5', marginBottom: '6px' }}>
            Selamat menjalankan amanah baru, Rama.<br />
            Tetap rendah hati, tetap menjadi diri sendiri,
          </p>

          <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--accent-cyan)', fontStyle: 'italic' }}>
            dan jangan lupa… janji-janjinya masih kami ingat. HAHAHA 🤣
          </p>
        </div>

        {/* 🎁 Animated Gift Present Box Button */}
        <div
          onClick={triggerCelebration}
          style={{
            padding: '18px 20px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.25) 0%, rgba(244, 63, 94, 0.25) 100%)',
            border: '2px solid var(--accent-amber)',
            boxShadow: '0 0 25px rgba(251, 191, 36, 0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            textAlign: 'left',
            transition: 'transform 0.15s ease'
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onTouchStart={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
          onTouchEnd={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            fontSize: '36px',
            animation: 'floatItem 1.8s ease-in-out infinite',
            filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.8))'
          }}>
            🎁
          </div>

          <div>
            <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff', letterSpacing: '0.3px' }}>
              BUKA KADO SELEBRASI! 🎉
            </div>
            <div style={{ fontSize: '11px', color: '#fef08a', marginTop: '2px' }}>
              Tap di sini untuk kejutan selebrasi pelantikan!
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen Photo Preview */}
      {selectedPhoto && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(3, 7, 18, 0.95)',
          backdropFilter: 'blur(16px)',
          zIndex: 150,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          animation: 'fadeIn 0.25s ease'
        }}>
          <div className="glass-card" style={{ border: `1.5px solid ${selectedPhoto.color}`, position: 'relative' }}>
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#fff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              maxHeight: '340px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#040711',
              marginBottom: '14px',
              padding: '6px'
            }}>
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                style={{
                  width: '100%',
                  maxHeight: '320px',
                  objectFit: 'contain',
                  borderRadius: '12px'
                }}
              />
            </div>

            <div style={{ fontSize: '12px', color: selectedPhoto.color, fontWeight: '700', marginBottom: '4px' }}>
              {selectedPhoto.tag} • {selectedPhoto.time}
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
              {selectedPhoto.title}
            </h3>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '16px' }}>
              {selectedPhoto.description}
            </p>

            <button onClick={() => setSelectedPhoto(null)} className="btn-primary">
              <span>TUTUP PREVIEW</span>
            </button>
          </div>
        </div>
      )}

      {/* 🎁 Celebration Lightbox Modal */}
      {isGiftOpen && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(3, 7, 18, 0.94)',
          backdropFilter: 'blur(16px)',
          zIndex: 160,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div className="glass-card" style={{
            textAlign: 'center',
            position: 'relative',
            border: '2px solid var(--accent-amber)',
            background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.18) 0%, rgba(18, 26, 42, 0.95) 100%)',
            boxShadow: '0 0 50px rgba(251, 191, 36, 0.4)'
          }}>
            <button
              onClick={() => setIsGiftOpen(false)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#fff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            <div style={{
              fontSize: '56px',
              margin: '10px 0',
              animation: 'pulseGlow 1s infinite',
              filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.8))'
            }}>
              🏆
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: '900', color: 'var(--accent-amber)', marginBottom: '8px' }}>
              SELEBRASI PELANTIKAN PNS! 🎉
            </h2>

            <p style={{ fontSize: '14px', color: '#fff', lineHeight: '1.6', marginBottom: '16px' }}>
              Selamat atas pencapaian luar biasa ini, <strong>Rama Koto</strong>!<br />
              Semoga karir PNS ke depannya semakin sukses, makin berprestasi, dan penuh keberkahan! 🚀🎊
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => {
                  triggerCelebration();
                }}
                className="btn-primary"
                style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)', color: '#000', fontWeight: '900' }}
              >
                <Sparkles size={18} />
                <span>TEBAR CONFETTI LAGI 🎉</span>
              </button>

              <button
                onClick={() => setIsGiftOpen(false)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '14px',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--text-muted)',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                TUTUP KADO
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={handleRestartJourney}
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '16px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
          fontSize: '15px',
          fontWeight: '700',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '16px'
        }}
      >
        <RotateCcw size={18} />
        <span>[ KEMBALI KE AWAL ]</span>
      </button>
    </div>
  );
}
