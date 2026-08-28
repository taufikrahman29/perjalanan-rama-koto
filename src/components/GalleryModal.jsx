import React, { useState } from 'react';
import { X, Sparkles, MapPin, Coffee, GraduationCap, Award, Image as ImageIcon } from 'lucide-react';
import { sounds } from '../utils/soundEngine';

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

export default function GalleryModal({ onClose }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    sounds.playTap();
    setSelectedItem(item);
  };

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(3, 7, 18, 0.94)',
      backdropFilter: 'blur(16px)',
      zIndex: 120,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      animation: 'fadeIn 0.3s ease'
    }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-neon)', fontWeight: '700', fontSize: '15px' }}>
          <ImageIcon size={20} />
          <span>GALERI PERJALANAN (4 MOMEN)</span>
        </div>

        <button
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            color: '#fff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>
      </div>

      {/* 4 Grid Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        flex: 1,
        alignContent: 'center'
      }}>
        {GALLERY_GRID.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              style={{
                position: 'relative',
                borderRadius: '18px',
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
                  borderRadius: '10px',
                  background: 'rgba(0,0,0,0.75)',
                  color: item.color,
                  fontSize: '10px',
                  fontWeight: '700',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {item.time}
                </div>
              </div>

              <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
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

      {/* Selected Lightbox Detail Modal */}
      {selectedItem && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(3, 7, 18, 0.95)',
          zIndex: 150,
          padding: '24px',
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
                src={selectedItem.image}
                alt={selectedItem.title}
                style={{
                  width: '100%',
                  maxHeight: '320px',
                  objectFit: 'contain',
                  borderRadius: '12px'
                }}
              />
            </div>

            <div style={{ fontSize: '12px', color: selectedItem.color, fontWeight: '700', marginBottom: '4px' }}>
              {selectedItem.tag} • {selectedItem.time}
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
              {selectedItem.title}
            </h3>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '16px' }}>
              {selectedItem.description}
            </p>

            <button onClick={() => setSelectedItem(null)} className="btn-primary">
              <span>TUTUP DETAIL</span>
            </button>
          </div>
        </div>
      )}

      <button onClick={onClose} className="btn-primary" style={{ marginTop: '14px' }}>
        <span>TUTUP GALERI</span>
      </button>
    </div>
  );
}
