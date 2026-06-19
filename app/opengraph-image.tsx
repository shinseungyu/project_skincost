import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = '피부미용학원수강료비교사이트';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FAF3F6 0%, #F5E8ED 100%)',
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#C4748A',
            marginBottom: 28,
          }}
        >
          2026 피부미용학원 수강료 비교
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 900,
            color: '#0F0F10',
            textAlign: 'center',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          피부미용학원 수강료비교
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#5C4F55',
            marginTop: 32,
            textAlign: 'center',
          }}
        >
          피부관리사 · 에스테틱 · 국비지원 가격 총정리
        </div>
      </div>
    ),
    { ...size }
  );
}
