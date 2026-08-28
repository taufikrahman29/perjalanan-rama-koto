import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Mail, MessageSquare, RotateCcw, Sparkles, X, Gift, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene13Invitation({ onNext, onRestart }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    triggerConfetti();
  }, []);

  const triggerConfetti = () => {
    sounds.playVictory();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleOpenMessage = () => {
    sounds.playUnlock();
    setIsOpenModal(true);
    triggerConfetti();
  };

  const handleProceedToGallery = () => {
    sounds.playTap();
    setIsOpenModal(false);
    onNext();
  };

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1 }}>
      <div className="ambient-glow glow-cyan"></div>
      <div className="ambient-glow glow-amber" style={{ bottom: '10%' }}></div>

      <div>
        <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '24px',
            background: 'rgba(0, 242, 254, 0.1)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            color: 'var(--accent-neon)',
            fontSize: '13px',
            fontWeight: '700',
            marginBottom: '14px'
          }}>
            <Calendar size={16} />
            <span>27 AGUSTUS</span>
          </div>

          <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
            SEBUAH CERITA KHUSUS
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
            Sebuah tanggal.<br />
            Sebuah perjalanan.<br />
            Dan sebuah cerita yang layak dikenang.
          </p>
        </div>

        {/* Main Invitation Card */}
        <div className="glass-card" style={{
          textAlign: 'center',
          padding: '24px 20px',
          margin: '16px 0',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: 'rgba(251, 191, 36, 0.12)',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto',
            color: '#fbbf24'
          }}>
            <Gift size={32} />
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
            PESAN SPESIAL LATSAR
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Ada satu pesan pribadi dari Taufik untuk Rama Koto.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={handleOpenMessage} className="btn-primary">
              <Mail size={18} />
              <span>✉️ BUKA PESAN SPESIAL</span>
            </button>

            <button
              onClick={handleProceedToGallery}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '16px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: 'var(--accent-cyan)',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <ImageIcon size={18} />
              <span>LANJUT KE GALERI PERJALANAN →</span>
            </button>
          </div>
        </div>

        {/* Closing text */}
        <div style={{
          textAlign: 'center',
          padding: '16px',
          borderRadius: '16px',
          background: 'rgba(0,0,0,0.3)',
          border: '1px dashed rgba(255,255,255,0.1)',
          color: '#cbd5e1',
          fontSize: '13px',
          lineHeight: '1.5'
        }}>
          “Terima kasih sudah menjadi bagian dari perjalanan ini, <strong>Rama Koto</strong>.”
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        <button onClick={handleProceedToGallery} className="btn-primary" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)' }}>
          <ImageIcon size={18} />
          <span>GALERI PERJALANAN 4 GRID</span>
          <ArrowRight size={18} />
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

      {/* Interactive Modal */}
      {isOpenModal && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(3, 7, 18, 0.9)',
          backdropFilter: 'blur(12px)',
          zIndex: 100,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div className="glass-card" style={{
            position: 'relative',
            border: '1.5px solid var(--accent-neon)',
            boxShadow: '0 0 40px rgba(0, 242, 254, 0.3)'
          }}>
            <button
              onClick={() => setIsOpenModal(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-amber)', marginBottom: '12px', fontWeight: '700', fontSize: '13px' }}>
              <MessageSquare size={16} style={{ color: 'var(--accent-amber)' }} />
              <span>Pesan Dari Taufik</span>
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
              Untuk Sahabat Seperjuangan: Rama Koto
            </h3>

            <div style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '55vh', overflowY: 'auto', paddingRight: '4px' }}>
              <p style={{ fontWeight: '700', color: 'var(--accent-amber)', fontSize: '15px' }}>
                Selamat atas pelantikan PNS, Rama Koto! 🎉🫡
              </p>
              <p>
                Akhirnya resmi juga menjadi Pegawai Negeri Sipil. Selamat atas pencapaian yang luar biasa ini. Semoga selalu amanah dalam menjalankan tugas, dimudahkan dalam setiap langkah, dan semakin sukses ke depannya.
              </p>
              <p>
                Semoga setelah dilantik ini tetap menjadi Rama Koto yang sama, tetap rendah hati, tetap asik diajak ngobrol, dan yang paling penting…
              </p>
              <p style={{ fontStyle: 'italic', color: 'var(--accent-amber)', fontWeight: '700' }}>
                jangan lupa sama janji-janjinya ya, HAHAHA. 😂
              </p>
              <p>
                Jangan sampai setelah jadi PNS tiba-tiba lupa dengan semua omongan dan rencana yang pernah dibuat. Jabatan boleh naik, penghasilan boleh naik, tapi jangan sampai orangnya ikut meninggi. 🤣
              </p>
              <p style={{ fontWeight: '700', color: 'var(--accent-neon)' }}>
                Sekali lagi, selamat atas pelantikannya, Rama!<br />
                Semoga perjalanan barunya penuh keberkahan dan kesuksesan. Wilujeng janten PNS! 🎊
              </p>
            </div>

            <button
              onClick={handleProceedToGallery}
              className="btn-primary"
              style={{ marginTop: '20px' }}
            >
              <span>LANJUT KE GALERI PERJALANAN 4 GRID 🖼️</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
