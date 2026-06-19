import Link from 'next/link';
import postsData from '@/data/posts.json';
import FormSection from '@/components/FormSection';

export default function HomePage() {
  const recentPosts = postsData.slice(0, 3);

  const tableRows = [
    { course: '피부관리사 국가자격증반', seoul: '80~150만원', local: '60~120만원', funded: '0~40만원', period: '3~6개월' },
    { course: '에스테틱 전문가 과정',   seoul: '120~220만원', local: '90~180만원',  funded: '일부 가능', period: '4~8개월' },
    { course: '성장인자 전문가 과정',   seoul: '150~280만원', local: '120~240만원', funded: '일부 가능', period: '2~4개월' },
    { course: '트러블 스킨케어 전문반', seoul: '60~130만원',  local: '50~110만원',  funded: '가능',     period: '1~3개월' },
    { course: '홈에스테틱 집중 과정',  seoul: '20~120만원',  local: '20~100만원',  funded: '일부 가능', period: '2주~2개월' },
  ];

  return (
    <main>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ 01 HERO ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="consulting" style={{ background: 'var(--bg-main)', padding: 'clamp(100px,12vw,160px) 1.5rem 100px', position: 'relative', overflow: 'hidden' }}>
        
        {/* Abstract background shapes */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '60%', background: 'var(--bg-pink)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.6, zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '30%', height: '50%', background: 'var(--bg-blue)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.6, zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          
          {/* Left Column (Text) */}
          <div style={{ flex: '1 1 500px' }}>
            {/* Badge */}
            <div className="pill" style={{ marginBottom: 36 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF7A7A', display: 'block' }} />
              <span style={{ color: 'var(--text-secondary)' }}>2026년 최신 수강료 기준 업데이트</span>
            </div>

            {/* H1 */}
            <h1 style={{ fontSize: 'clamp(42px,6vw,72px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 28, color: 'var(--text-primary)' }}>
              피부미용학원<br />수강료 비교사이트
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: 'clamp(17px,2vw,20px)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 40, fontWeight: 300 }}>
              피부관리사 자격증부터 에스테틱·성장인자 전문가 과정까지.<br />
              수강료를 비교하고 국비지원으로 최대 100% 절감하세요.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/guide" className="pill" style={{ padding: '16px 36px', fontSize: 16, background: '#DDF3FF', borderColor: '#DDF3FF' }}>
                과정 안내 보기
              </Link>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div style={{ flex: '1 1 400px', background: '#FFFFFF', borderRadius: 40, border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)', padding: 'clamp(32px,4vw,48px)', textAlign: 'left' }}>
            <div className="pill" style={{ marginBottom: 20, background: 'var(--bg-blue)', borderColor: 'var(--bg-blue)' }}>무료 상담</div>
            <h2 style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 16, color: 'var(--text-primary)' }}>
              지금 무료 상담을<br />신청하세요
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.6, marginBottom: 32, fontWeight: 300 }}>
              목표와 예산을 알려주시면 가장 적합한 과정과<br />국비지원 방법을 전문가가 1:1로 안내해 드립니다.
            </p>
            <FormSection />
          </div>

        </div>


      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ 01.5 ABOUT US ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ maxWidth: 1200, margin: '40px auto 80px', padding: '0 1.5rem', position: 'relative', zIndex: 3 }}>
        <div style={{ background: '#FFFFFF', borderRadius: 40, padding: 'clamp(40px,8vw,80px)', textAlign: 'center', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)' }}>
          <div className="pill" style={{ marginBottom: 24, background: 'var(--bg-purple)', borderColor: 'var(--bg-purple)' }}>ABOUT US</div>
          <h2 style={{ fontSize: 'clamp(32px,4vw,40px)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.3, marginBottom: 24, color: 'var(--text-primary)' }}>
            피부미용학원 수강료 비교사이트란?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, lineHeight: 1.7, fontWeight: 300, wordBreak: 'keep-all', maxWidth: 700, margin: '0 auto 48px' }}>
            수많은 피부미용학원 중 나에게 딱 맞는 과정과 비용을 찾기 막막하셨나요?<br />
            피부미용 수강료 비교사이트에서는 <strong>올댓뷰티아카데미의 전문 상담사</strong>가 
            여러분의 목표와 예산에 맞춘 1:1 맞춤 무료 상담을 제공합니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            <div style={{ background: 'var(--bg-main)', padding: 32, borderRadius: 24, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>💸</div>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8, color: 'var(--text-primary)' }}>수강료 최적화</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>국비지원 및 내일배움카드를 활용한 최대의 비용 절감 플랜을 찾아드립니다.</p>
            </div>
            <div style={{ background: 'var(--bg-blue)', padding: 32, borderRadius: 24, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🎯</div>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8, color: 'var(--text-primary)' }}>맞춤 과정 설계</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>취업, 창업, 스킬업 등 수강 목적에 맞는 최적의 클래스를 매칭합니다.</p>
            </div>
            <div style={{ background: 'var(--bg-pink)', padding: 32, borderRadius: 24, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>👩‍💼</div>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8, color: 'var(--text-primary)' }}>올댓뷰티 전문 상담</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>업계 최고 수준의 올댓뷰티 멘토진이 친절하고 명확한 해답을 드립니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ 02 STATS BAR ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: 'var(--bg-main)', padding: '0 1.5rem 60px' }}>
        <div className="stats-bar" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {[
            { val: '최대 100%', label: '국비지원 가능', note: '내일배움카드 적용 시' },
            { val: '120만원+', label: '평균 수강료 절감', note: '국비지원 활용 기준' },
            { val: '5가지',    label: '전문 과정 비교',  note: '자격증 ~ 홈에스테틱' },
            { val: '무료',     label: '1:1 맞춤 상담',   note: '전문 상담사 직접 연결' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: 'clamp(32px,4vw,48px) clamp(20px,2vw,32px)', borderRight: i < 3 ? '1px solid var(--border-color)' : 'none', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(32px,4vw,44px)', fontWeight: 400, letterSpacing: '-0.04em', color: 'var(--text-primary)', marginBottom: 8 }}>{stat.val}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 6 }}>{stat.label}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{stat.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ 03 FEATURE — 과정 비교 ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(100px,12vw,160px) 1.5rem', borderRadius: '40px 40px 0 0', position: 'relative', top: -40, marginBottom: -40 }}>
        <div className="feature-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* text */}
          <div>
            <div className="pill" style={{ marginBottom: 24, background: 'var(--bg-pink)', borderColor: 'var(--bg-pink)' }}>COURSES</div>
            <h2 style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24, color: 'var(--text-primary)' }}>
              목표에 맞는 과정을<br />한눈에 비교하세요
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 18, lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
              피부관리사 국가자격증부터 성장인자 전문가 과정까지.
              취업·창업·개인 스킬 향상 등 목표에 맞는 최적의 과정을 찾아드립니다.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
              {[
                '피부관리사 국가자격증반 — 취업·창업 기본기',
                '에스테틱 전문가 과정 — 1인샵 창업 준비',
                '성장인자 전문가 과정 — 프리미엄 차별화',
                '국비지원 활용 — 수강료 최대 100% 절감',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', fontSize: 16, color: 'var(--text-secondary)' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: 12 }}>✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/guide" style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              과정별 수강료 전체 보기 →
            </Link>
          </div>

          {/* course cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { name: '피부관리사 국가자격증반', price: '80~150만원', tag: '국비지원 가능', tagBg: '#E8F4FC', tagColor: '#0369A1' },
              { name: '에스테틱 전문가 과정',   price: '120~220만원', tag: '1인샵 추천',   tagBg: '#F3E8FF', tagColor: '#7E22CE' },
              { name: '성장인자 전문가 과정',   price: '150~280만원', tag: '프리미엄',     tagBg: '#FDF4FF', tagColor: '#C026D3' },
              { name: '트러블 스킨케어 전문반', price: '60~130만원',  tag: '단기 가능',   tagBg: '#FCF6F0', tagColor: '#C2410C' },
              { name: '홈에스테틱 집중 과정',  price: '20~120만원',  tag: '초보자 OK',   tagBg: '#F0FDF4', tagColor: '#15803D' },
            ].map((course, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid var(--border-color)', borderRadius: 24, padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: course.tagColor, background: course.tagBg, padding: '4px 12px', borderRadius: 50, display: 'inline-block', marginBottom: 8 }}>{course.tag}</span>
                  <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-primary)' }}>{course.name}</div>
                </div>
                <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-secondary)', textAlign: 'right', whiteSpace: 'nowrap', paddingLeft: 16 }}>{course.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ 04 DARK (now PASTEL PURPLE) — 국비지원 ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: 'var(--bg-purple)', padding: 'clamp(100px,12vw,160px) 1.5rem', borderRadius: 40 }}>
        <div className="feature-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* text */}
          <div>
            <div className="pill" style={{ marginBottom: 24, background: '#FFFFFF', borderColor: 'rgba(0,0,0,0.05)' }}>국비지원</div>
            <h2 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 28, color: 'var(--text-primary)' }}>
              내일배움카드로<br />수강료를 최대<br />100% 절감
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 18, lineHeight: 1.7, marginBottom: 48, fontWeight: 300 }}>
              취업준비생, 재직자, 자영업자 모두 신청 가능합니다.
              올바른 절차로 신청하면 피부미용학원 수강료의 대부분을 국비로 지원받을 수 있습니다.
            </p>
            <a href="#consulting" className="pill dark" style={{ padding: '16px 36px', fontSize: 16 }}>
              국비지원 상담받기
            </a>
          </div>

          {/* stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { val: '45~100%', label: '정부 지원율',  desc: '소득 구간별 자부담 최소화' },
              { val: '300만원', label: '지원 한도',    desc: '1인당 최대 (5년 기준)' },
              { val: '3주',     label: '카드 발급 소요', desc: '온라인 신청 간편 처리' },
              { val: '전 직군', label: '신청 가능 대상', desc: '재직자·구직자·자영업자' },
            ].map((stat, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.04)', borderRadius: 32, padding: 'clamp(24px,3vw,36px)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: 'clamp(28px,3vw,40px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: 12, letterSpacing: '-0.03em' }}>{stat.val}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>{stat.label}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ 05 FEATURE — 학원 선택 ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(100px,12vw,160px) 1.5rem' }}>
        <div className="feature-grid-reverse" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* checkpoint cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { num: '01', title: '강사진 실무 경력', desc: '현직 5년+ 강사가 직접 가르치는지 확인하세요' },
              { num: '02', title: '1인 1기기 실습',  desc: 'RF·LED·초음파 기기를 직접 다루는 실습 환경' },
              { num: '03', title: '취업 연계 지원',  desc: '수료 후 채용 연결 프로그램 존재 여부 확인' },
              { num: '04', title: '환불 규정 확인',  desc: '공정거래위원회 기준에 맞는 환불 정책' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--bg-main)', borderRadius: 32, padding: 'clamp(24px,3vw,32px)', border: '1px solid var(--border-color)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 20, border: '1px solid rgba(0,0,0,0.05)' }}>{item.num}</div>
                <div style={{ fontSize: 17, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 12 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* text */}
          <div className="text-col">
            <div className="pill" style={{ marginBottom: 24, background: 'var(--bg-blue)', borderColor: 'var(--bg-blue)' }}>HOW TO CHOOSE</div>
            <h2 style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24, color: 'var(--text-primary)' }}>
              실패 없는<br />학원 선택<br />4가지 체크포인트
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 18, lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
              수강료만 보고 등록하면 나중에 후회합니다. 무료 상담으로 강사진·커리큘럼·국비지원 여부를 한 번에 확인하세요.
            </p>
            <Link href="/guide" style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              과정 선택 가이드 전체 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ 06 COMPARISON TABLE ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: 'var(--bg-main)', padding: 'clamp(100px,12vw,140px) 1.5rem', borderRadius: 40 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="pill" style={{ marginBottom: 24 }}>PRICE COMPARE</div>
            <h2 style={{ fontSize: 'clamp(32px,4.5vw,52px)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15, color: 'var(--text-primary)' }}>
              피부미용학원 수강료<br />과정별 비교표 (2026)
            </h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, background: '#FFFFFF', borderRadius: 32, overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', minWidth: 700 }}>
              <caption style={{ display: 'none' }}>
                2026년 피부미용학원 과정별 수강료 비교
              </caption>
              <thead>
                <tr style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-color)' }}>
                  {['과정', '수도권', '지방', '국비지원 시', '기간'].map((h, i) => (
                    <th key={h} scope="col" style={{ padding: '24px', textAlign: i === 0 ? 'left' : 'center', fontWeight: 500, color: 'var(--text-secondary)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', background: i % 2 === 0 ? '#FFFFFF' : 'var(--bg-main)' }}>
                    <td style={{ padding: '24px', fontWeight: 500 }}>{row.course}</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>{row.seoul}</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>{row.local}</td>
                    <td style={{ padding: '24px', textAlign: 'center', color: '#16A34A', fontWeight: 600 }}>
                      <span style={{ background: '#F0FDF4', padding: '6px 16px', borderRadius: 20 }}>{row.funded}</span>
                    </td>
                    <td style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>{row.period}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5} style={{ padding: '20px 24px', fontSize: 13, color: 'var(--text-muted)', background: '#FFFFFF' }}>
                    ※ 위 수강료는 참고용이며, 실제 학원비는 학원 정책에 따라 다를 수 있습니다. 국비지원은 내일배움카드 적용 기준입니다.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ 07 SEO CONTENT ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(100px,12vw,140px) 1.5rem' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <div className="pill" style={{ marginBottom: 24, background: 'var(--bg-pink)', borderColor: 'var(--bg-pink)' }}>GUIDE</div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: 40, color: 'var(--text-primary)' }}>
            피부미용학원 수강료 완벽 가이드 — 비용·국비지원·추천까지 2026 총정리
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, lineHeight: 1.8, marginBottom: 48, fontWeight: 300 }}>
            피부미용사를 목표로 하는 분들이 가장 먼저 마주하는 고민은 <strong>피부미용학원 수강료</strong>입니다.
            같은 "자격증반"이라도 강사 경력, 수업 인원, 재료 제공 여부에 따라 품질 차이가 크기 때문에
            단순 학원비 비교만으로는 올바른 선택을 하기 어렵습니다.
          </p>

          <div style={{ background: 'var(--bg-main)', padding: '40px', borderRadius: 32, marginBottom: 32 }}>
            <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 16, color: 'var(--text-primary)' }}>피부미용학원 수강료 평균 — 과정별 비교</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.8, marginBottom: 24, fontWeight: 300 }}>
              2026년 기준 <strong>피부미용학원 수강료</strong>는 과정과 지역에 따라 크게 다릅니다.
              피부관리사 국가자격증반은 수도권 기준 80~150만원, 지방은 60~120만원이 평균입니다.
              <strong>국비지원(내일배움카드)</strong>을 활용하면 동일 과정을 0~40만원에 수강할 수 있습니다.{' '}
            </p>
            <Link href="/board" style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: 4 }}>과정별 수강료 상세 정보 →</Link>
          </div>

          <div style={{ background: 'var(--bg-blue)', padding: '40px', borderRadius: 32, marginBottom: 32 }}>
            <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 16, color: 'var(--text-primary)' }}>트러블 스킨케어·홈에스테틱 전문 과정</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.8, marginBottom: 24, fontWeight: 300 }}>
              <strong>트러블 스킨케어</strong> 전문 과정은 여드름·붉은기·색소침착을 체계적으로 다루며 수강료는 60~130만원입니다.
              <strong>홈에스테틱</strong> 과정은 LED·RF·초음파 기기 활용법을 포함하며 단기 집중 과정은 20~60만원으로 시작할 수 있습니다.{' '}
            </p>
            <Link href="/guide" style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: 4 }}>홈에스테틱 과정 자세히 보기 →</Link>
          </div>

          <div style={{ background: 'var(--bg-pink)', padding: '40px', borderRadius: 32, marginBottom: 32 }}>
            <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 16, color: 'var(--text-primary)' }}>성장인자 전문가 과정 — 고급 재생 시술</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.8, marginBottom: 24, fontWeight: 300 }}>
              <strong>성장인자(EGF·FGF) 전문가 과정</strong>은 피부 재생과 항노화 시술 전문가를 양성하는 고급 과정으로 수강료는 150~280만원 수준입니다.
              메디컬 에스테틱이나 안티에이징 전문샵 취업·창업을 목표로 한다면 추천합니다.{' '}
            </p>
            <Link href="/qna" style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: 4 }}>성장인자 과정 FAQ 보기 →</Link>
          </div>

          <div style={{ background: 'var(--bg-purple)', padding: '40px', borderRadius: 32 }}>
            <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 16, color: 'var(--text-primary)' }}>국비지원 피부미용학원 — 내일배움카드 활용법</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.8, marginBottom: 24, fontWeight: 300 }}>
              <strong>국비지원 피부미용학원</strong>은 국민내일배움카드를 통해 수강료의 45~100%를 지원받을 수 있습니다.
              재직자, 실업자, 특수고용직·프리랜서 모두 신청 가능하며 1인당 최대 500만원 한도 내에서 복수 과정도 수강할 수 있습니다.{' '}
            </p>
            <Link href="/board" style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: 4 }}>국비지원 신청 방법 전체 가이드 →</Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ 08 FAQ + POSTS ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: 'var(--bg-main)', padding: 'clamp(100px,12vw,140px) 1.5rem', borderRadius: '40px 40px 0 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'clamp(40px,6vw,80px)' }}>

          {/* FAQ */}
          <div>
            <div className="pill" style={{ marginBottom: 24, background: '#FFFFFF' }}>FAQ</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
              <h2 style={{ fontSize: 28, fontWeight: 400, color: 'var(--text-primary)' }}>자주 묻는 질문</h2>
              <Link href="/qna" style={{ fontSize: 15, color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 4 }}>전체 보기</Link>
            </div>
            <dl style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { q: '피부미용학원 수강료는 얼마인가요?', a: '과정과 지역에 따라 다릅니다. 피부관리사 자격증반은 수도권 80~150만원, 국비지원 시 0~40만원으로 수강 가능합니다.' },
                { q: '국비지원 피부미용학원이란 무엇인가요?', a: '내일배움카드로 수강료의 45~100%를 지원받는 과정입니다. 취업준비생·재직자·자영업자 모두 신청 가능합니다.' },
                { q: '홈에스테틱 과정은 초보자도 수강할 수 있나요?', a: '기초부터 교육하므로 관련 지식 없이도 수강 가능합니다. LED·RF 기기 사용법부터 단계적으로 배울 수 있습니다.' },
              ].map((faq, i) => (
                <div key={i} style={{ padding: '28px', background: '#FFFFFF', borderRadius: 24, border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                  <dt style={{ fontWeight: 500, fontSize: 16, marginBottom: 12, color: 'var(--text-primary)' }}>Q. {faq.q}</dt>
                  <dd style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Posts */}
          <div>
            <div className="pill" style={{ marginBottom: 24, background: '#FFFFFF' }}>LATEST</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
              <h2 style={{ fontSize: 28, fontWeight: 400, color: 'var(--text-primary)' }}>최신 정보</h2>
              <Link href="/board" style={{ fontSize: 15, color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 4 }}>전체 보기</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {recentPosts.map((post) => (
                <Link key={post.id} href={`/board?id=${post.id}`} style={{ padding: '28px', background: '#FFFFFF', border: '1px solid var(--border-color)', borderRadius: 24, display: 'block', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s', cursor: 'pointer' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 8 }}>{post.category}</span>
                  <p style={{ fontWeight: 500, fontSize: 16, color: 'var(--text-primary)', lineHeight: 1.5 }}>{post.title}</p>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>{post.date}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
