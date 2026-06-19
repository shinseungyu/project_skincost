import PrivacyPolicyModal from './PrivacyPolicyModal';
import LegalNoticeModal from './LegalNoticeModal';

export default function Footer() {
  return (
    <footer style={{
      background: '#111111',
      color: 'white',
      padding: '80px 1.5rem',
      textAlign: 'center',
      borderRadius: '40px 40px 0 0',
      marginTop: '-40px',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontWeight: 600, fontSize: 18, color: 'white', marginBottom: 12, letterSpacing: '-0.02em' }}>
          피부미용학원수강료비교사이트
        </p>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontWeight: 300 }}>
          피부미용학원 수강료 · 피부관리사 자격증 · 국비지원 · 홈에스테틱 · 성장인자 전문가 과정 정보
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: 32 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4 }}>
            <PrivacyPolicyModal />
          </span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4 }}>
            <LegalNoticeModal />
          </span>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto', fontWeight: 300 }}>
          본 사이트는 정보 제공을 목적으로 운영되며, 피부미용학원 수강료는 학원 운영 방침에 따라 실제와 다를 수 있습니다.<br />
          정확한 비용은 반드시 해당 학원 상담을 통해 확인하시기 바랍니다.<br />
          <span style={{ display: 'block', marginTop: 16 }}>© 2026 skinacademy.kr All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
