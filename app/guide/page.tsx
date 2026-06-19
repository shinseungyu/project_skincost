import type { Metadata } from 'next';
import Link from 'next/link';
import FormSection from '@/components/FormSection';

export const metadata: Metadata = {
  title: '피부미용학원 과정 안내 — 피부관리사·에스테틱·성장인자·홈에스테틱 선택 가이드 2026',
  description: '피부미용학원 과정 선택 가이드. 피부관리사 자격증반·에스테틱 전문가·성장인자 전문가·홈에스테틱·트러블 스킨케어 전문반 비교와 국비지원 신청 방법을 안내합니다.',
  alternates: { canonical: '/guide' },
};

export default function GuidePage() {
  return (
    <main style={{ background: 'var(--bg-main)', minHeight: '100vh', paddingBottom: 100 }}>
      {/* 헤더 */}
      <div style={{ background: 'linear-gradient(135deg, #FAF3F6 0%, #F5E8ED 100%)', borderBottom: '1px solid var(--border-color)', padding: '60px 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>과정 안내</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, marginBottom: 12, letterSpacing: '-0.02em' }}>
            피부미용학원 과정 선택 가이드
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 600, lineHeight: 1.8 }}>
            목표에 맞는 피부미용학원 과정을 선택하는 방법을 안내합니다.
            피부관리사 자격증반·에스테틱·성장인자 전문가·홈에스테틱 과정의 특징과 수강료를 비교해 최적의 선택을 도와드립니다.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 1.5rem' }}>

        {/* Step 1: 목표 확인 */}
        <section style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Step 1</p>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.02em' }}>나의 목표 확인하기</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 32, maxWidth: 680 }}>
            피부미용학원 과정 선택의 첫 번째 단계는 수강 목적을 명확히 하는 것입니다.
            취업·창업·자격증·개인 스킬 향상 등 목표에 따라 최적의 과정이 달라집니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { type: '취업 목표', desc: '피부샵·에스테틱숍·호텔 스파', recommend: '피부관리사 국가자격증반 + 에스테틱 전문가 과정', note: '자격증 취득 후 실무 심화 과정 병행 추천', color: '#EFF6FF', accent: '#2563EB' },
              { type: '1인샵 창업', desc: '독립 창업·프리랜서 관리사', recommend: '에스테틱 전문가 과정 + 성장인자 전문가 과정', note: '고급 케어 기술로 차별화 필수', color: '#F0FDF4', accent: '#16A34A' },
              { type: '자격증 취득', desc: '국가자격증으로 이력 강화', recommend: '피부관리사 국가자격증반 (3~6개월)', note: '국비지원 적극 활용 권장', color: '#FFF1F2', accent: '#E11D48' },
              { type: '개인 스킬 향상', desc: '가족·지인 케어, 피부 고민 해결', recommend: '홈에스테틱 과정 또는 트러블 스킨케어 전문반', note: '단기 특강(2~4주)으로도 충분', color: '#FAF5FF', accent: '#9333EA' },
            ].map((item, i) => (
              <div key={i} style={{ background: item.color, borderRadius: 20, padding: 24, border: `1px solid ${item.accent}20` }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: item.accent, marginBottom: 8 }}>{item.type}</h3>
                <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 12 }}>{item.desc}</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: item.accent, marginBottom: 4 }}>추천 과정</p>
                <p style={{ fontSize: 13, color: '#374151', marginBottom: 10 }}>{item.recommend}</p>
                <p style={{ fontSize: 12, color: '#6B7280' }}>💡 {item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Step 2: 과정별 상세 비교 */}
        <section style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Step 2</p>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.02em' }}>과정별 상세 비교</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 32, maxWidth: 680 }}>
            목표를 정했다면 각 과정의 내용·기간·수강료를 자세히 비교하세요.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                course: '피부관리사 국가자격증반',
                icon: '🏅',
                duration: '3~6개월',
                price: '수도권 80~150만원 | 지방 60~120만원 | 국비지원 시 0~40만원',
                content: '기초 피부학, 피부 타입 분석, 클렌징·딥클렌징, 매뉴얼 테크닉, 마스크팩 적용, 피부 관리 기기 기초',
                career: '피부샵 취업, 에스테틱숍, 호텔 스파',
              },
              {
                course: '에스테틱 전문가 과정',
                icon: '✨',
                duration: '4~8개월',
                price: '수도권 120~220만원 | 지방 90~180만원 | 국비지원 가능',
                content: '심화 피부 분석, 림프 드레나지, RF·초음파 기기 사용, 왁싱, 아로마테라피, 바디 케어, 샵 운영 기초',
                career: '에스테틱 전문 피부샵, 1인샵 창업, 프리랜서',
              },
              {
                course: '성장인자 전문가 과정',
                icon: '🔬',
                duration: '2~4개월',
                price: '수도권 150~280만원 | 지방 120~240만원 | 일부 국비지원',
                content: 'EGF·FGF·IGF 성장인자 원리, 피부 재생 메커니즘, 성장인자 앰플 적용법, 트러블 피부 케어 프로토콜, 기기 병행 케어',
                career: '고급 피부 관리 전문점, 성장인자 전문 샵, 1인샵 차별화',
              },
              {
                course: '트러블 스킨케어 전문반',
                icon: '💆',
                duration: '1~3개월',
                price: '수도권 60~130만원 | 지방 50~110만원 | 단기 특강 20~60만원',
                content: '여드름·민감성 피부 원인 분석, 진정 케어 프로토콜, 기능성 성분 이해, LED·초음파 진정 기기 활용, 트러블 예방 루틴',
                career: '트러블 전문 피부샵, 한방 피부 관리, 개인 스킬 향상',
              },
              {
                course: '홈에스테틱 집중 과정',
                icon: '🏠',
                duration: '2주~2개월',
                price: '단기 20~60만원 | 집중 50~120만원',
                content: '가정용 RF·LED·초음파 기기 활용, 셀프 마사지 기법, 피부 타입별 홈케어 루틴, 팩·앰플 선택 가이드',
                career: '개인 피부 관리, 가족 케어, 소규모 커뮤니티 강사',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 20, padding: '24px 28px', display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ width: 48, height: 48, borderRadius: 16, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, color: 'var(--text-primary)' }}>{item.course}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 6 }}>
                    <strong style={{ color: 'var(--primary)' }}>기간: </strong>{item.duration}
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 6 }}>
                    <strong style={{ color: 'var(--primary)' }}>수강료: </strong>{item.price}
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 6 }}>
                    <strong style={{ color: 'var(--primary)' }}>주요 학습 내용: </strong>{item.content}
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    💼 수료 후 진로: {item.career}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step 3: 학원 선택 기준 */}
        <section style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Step 3</p>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.02em' }}>좋은 피부미용학원 고르는 법</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 32, maxWidth: 680 }}>
            같은 과정이라도 학원 품질에 따라 교육 결과가 크게 달라집니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { method: '국비지원 인정 여부', pros: ['내일배움카드 사용 가능', '수강료 대폭 절감', '고용부 인증 커리큘럼'], cons: ['국비 정원 제한 있음', '훈련 시간 이수 조건 있음', '환급 지연 발생할 수 있음'], best: '수강료 부담을 줄이고 싶은 분', bg: 'var(--accent)', dark: true },
              { method: '강사진 자격 및 경력', pros: ['실무 경력 강사 수업', '현장 노하우 습득', '취업 네트워크 활용'], cons: ['경력 검증 어려울 수 있음', '강사 교체 발생 가능', '수업 스타일 맞지 않을 수 있음'], best: '실전 기술과 취업 연계가 중요한 분', bg: 'var(--primary-light)', dark: false },
              { method: '실습 환경 및 기기', pros: ['최신 기기 실습 가능', '1인 1기기 실습', '실습실 청결 유지'], cons: ['실습 기기 수 확인 필요', '고급 기기 학원 수강료 높음', '야간반 기기 사용 제한'], best: '고급 기술을 제대로 배우고 싶은 분', bg: '#F0FDF4', dark: false },
            ].map((item, i) => (
              <div key={i} style={{ background: item.bg, borderRadius: 24, padding: 28, color: item.dark ? 'white' : 'inherit' }}>
                <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 16 }}>{item.method}</h3>
                <div style={{ marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--primary)', marginBottom: 8 }}>장점</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {item.pros.map((p, j) => (
                      <li key={j} style={{ fontSize: 13, color: item.dark ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', display: 'flex', gap: 6, alignItems: 'center' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#EF4444', marginBottom: 8 }}>주의사항</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {item.cons.map((c, j) => (
                      <li key={j} style={{ fontSize: 13, color: item.dark ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)', display: 'flex', gap: 6, alignItems: 'center' }}>
                        <span>·</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <p style={{ fontSize: 12, fontWeight: 800, color: 'var(--primary)' }}>
                  추천 대상: {item.best}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 상담 CTA */}
        <section style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 28, padding: '48px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>무료 상담</p>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>어떤 과정이 나에게 맞을지 모르겠다면?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
            목표와 상황을 알려주시면 전문 상담사가 1:1로 맞춤 과정과 수강료를 안내해 드립니다.
          </p>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <FormSection />
          </div>
        </section>

        {/* 관련 링크 */}
        <section style={{ marginTop: 60 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 20 }}>관련 정보 더 보기</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { href: '/board', title: '피부미용학원 정보 게시판', desc: '최신 수강료 정보와 학원 비교 글을 확인하세요' },
              { href: '/qna', title: '자주 묻는 질문(FAQ)', desc: '피부미용학원 등록 전 궁금한 점을 확인하세요' },
              { href: '/#consulting', title: '1:1 무료 상담 신청', desc: '전문가가 내 목표에 맞는 과정을 추천해 드립니다' },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '20px 24px', display: 'block', transition: 'all 0.2s' }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--primary)', marginBottom: 6 }}>{link.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
