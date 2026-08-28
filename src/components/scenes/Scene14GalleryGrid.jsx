import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, MapPin, Coffee, GraduationCap, Award, Image as ImageIcon, RotateCcw } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

const GALLERY_GRID = [
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
    description: "Pukul 02:15 WIB laporan 42% & PPT 27%. Kopi kenangan menyala membakar semangat."
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
    description: "Selamat atas pelantikan PNS, Rama Koto! Semoga sukses & selalu amanah."
  }
];

export default function Scene14GalleryGrid({ onRestart }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    sounds.playTap();
    setSelectedItem(item);
  };

  const triggerConfetti = () => {
    sounds.playVictory();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
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
            4 MOMEN LEGENDARIS 🖼️
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            Jejak kenangan di balik kelulusan & pelantikan Rama Koto.
          </p>
        </div>

        {/* 4 Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          marginBottom: '16px'
        }}>
          {GALLERY_GRID.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `1.5px solid ${item.color}`,
                  boxShadow: `0 4px 15px ${item.color}25`,
                  background: '#0d1527',
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
                <div style={{ position: 'relative', width: '100%', height: '105px' }}>
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
                    padding: '2px 6px',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.8)',
                    color: item.color,
                    fontSize: '9px',
                    fontWeight: '700',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {item.time}
                  </div>
                </div>

                <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: item.color, fontWeight: '700' }}>
                    <IconComp size={12} />
                    <span>{item.tag}</span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: '#fff', lineHeight: '1.2' }}>
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Item Lightbox */}
      {selectedItem && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(3, 7, 18, 0.94)',
          backdropFilter: 'blur(16px)',
          zIndex: 100,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          animation: 'fadeIn 0.25s ease'
        }}>
          <div className="glass-card" style={{ border: `1.5px solid ${selectedItem.color}`, position: 'relative' }}>
            <button
              onClick={() => setSelectedItem(null)}
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

            <div style={{ borderRadius: '14px', overflow: 'hidden', height: '170px', marginBottom: '12px' }}>
              <img src={selectedItem.image} alt={selectedItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ fontSize: '11px', color: selectedItem.color, fontWeight: '700', marginBottom: '4px' }}>
              {selectedItem.tag} • {selectedItem.time}
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>
              {selectedItem.title}
            </h3>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '14px' }}>
              {selectedItem.description}
            </p>

            <button onClick={() => setSelectedItem(null)} className="btn-primary">
              <span>TUTUP DETAIL</span>
            </button>
          </div>
        </div>
      )}

      {/* Bottom Action Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
        <button
          onClick={triggerConfetti}
          className="btn-primary"
          style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)' }}
        >
          <Sparkles size={18} />
          <span>[ FINISH JOURNEY ✨ ]</span>
        </button>

        <button
          onClick={onRestart}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '14px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'var(--text-muted)',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <RotateCcw size={14} />
          <span>Ulangi Perjalanan Dari Awal</span>
        </button>
      </div>
    </div>
  );
}
