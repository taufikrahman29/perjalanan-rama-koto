import React, { useState, useEffect } from 'react';
import { Send, ArrowRight, CheckCheck, Clock } from 'lucide-react';
import { sounds } from '../../utils/soundEngine';

export default function Scene04Chat({ onNext }) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    // Message timeline sequence
    const timer1 = setTimeout(() => {
      setMessages([
        { id: 1, sender: 'rama', text: 'Bang, laporan gua belum kelar... PPT juga belum jadi 😭', time: '23:47' }
      ]);
      sounds.playTap();
    }, 600);

    const timer2 = setTimeout(() => {
      setIsTyping(true);
    }, 1800);

    const timer3 = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: 2, sender: 'taufik', text: 'Besok presentasi kan?', time: '23:48' }
      ]);
      sounds.playTap();
    }, 3200);

    const timer4 = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: 3, sender: 'rama', text: 'Iya bang... Tolongin gua dong 😭', time: '23:48' }
      ]);
      sounds.playTap();
      setShowNext(true);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="scene-container" style={{ justifyContent: 'space-between', zIndex: 1, padding: '0' }}>
      {/* WhatsApp Header */}
      <div style={{
        background: '#0b141a',
        padding: '16px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #005c4b, #25d366)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '700',
          fontSize: '16px'
        }}>
          RK
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: '700', fontSize: '15px', color: '#e9edef' }}>Rama Koto</div>
          <div style={{ fontSize: '12px', color: '#8696a0', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={12} /> 23:47 WIB — Online
          </div>
        </div>
      </div>

      {/* Progress Bar Status */}
      <div style={{
        background: 'rgba(11, 20, 26, 0.9)',
        padding: '10px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justify: 'space-between',
        fontSize: '12px',
        color: '#fbbf24',
        fontFamily: 'var(--font-mono)'
      }}>
        <span>Laporan: 0%</span>
        <span>|</span>
        <span>PPT: 0%</span>
      </div>

      {/* Chat Messages Body */}
      <div style={{
        flex: 1,
        padding: '16px',
        background: '#0b141a',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 0)',
        backgroundSize: '16px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        overflowY: 'auto'
      }}>
        {messages.map((msg) => {
          const isRama = msg.sender === 'rama';
          return (
            <div
              key={msg.id}
              style={{
                alignSelf: isRama ? 'flex-start' : 'flex-end',
                maxWidth: '82%',
                background: isRama ? '#202c33' : '#005c4b',
                color: '#e9edef',
                padding: '10px 14px',
                borderRadius: isRama ? '0px 16px 16px 16px' : '16px 0px 16px 16px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              <div style={{ fontSize: '14px', lineHeight: '1.4' }}>{msg.text}</div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '4px',
                marginTop: '4px',
                fontSize: '10px',
                color: '#8696a0'
              }}>
                <span>{msg.time}</span>
                <CheckCheck size={14} style={{ color: isRama ? '#8696a0' : '#53bdeb' }} />
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div style={{
            alignSelf: 'flex-end',
            background: '#005c4b',
            padding: '8px 14px',
            borderRadius: '16px 0px 16px 16px',
            fontSize: '12px',
            color: '#8696a0',
            fontStyle: 'italic'
          }}>
            Taufik sedang mengetik...
          </div>
        )}
      </div>

      {/* Footer controls */}
      <div style={{ padding: '16px', background: '#111b21', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        {showNext ? (
          <button onClick={() => { sounds.playEngine(); onNext(); }} className="btn-primary">
            <span>PERJALANAN DIMULAI</span>
            <ArrowRight size={18} />
          </button>
        ) : (
          <div style={{ textAlign: 'center', fontSize: '12px', color: '#8696a0' }}>
            Menunggu percakapan selesai...
          </div>
        )}
      </div>
    </div>
  );
}
