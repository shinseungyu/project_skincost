import type { Metadata } from 'next';
import FormSection from '@/components/FormSection';
import QnaClient from './QnaClient';

export const metadata: Metadata = {
  title: '피부미용학원 FAQ — 수강료·자격증·국비지원 자주 묻는 질문',
  description: '피부미용학원 수강료, 피부관리사 자격증 취득 방법, 국비지원 신청, 에스테틱·성장인자·홈에스테틱 과정 선택 등 자주 묻는 질문과 답변을 정리했습니다.',
  alternates: { canonical: '/qna' },
};

export default function QnaPage() {
  return (
    <main style={{ background: 'var(--bg-main)', minHeight: '100vh', paddingBottom: 100 }}>
      <div style={{ background: 'linear-gradient(135deg, #FAF3F6 0%, #F5E8ED 100%)', borderBottom: '1px solid var(--border-color)', padding: '60px 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>FAQ</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, marginBottom: 12, letterSpacing: '-0.02em' }}>자주 묻는 질문</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 560 }}>
            피부미용학원 수강료, 자격증 취득, 국비지원 신청 방법 등 등록 전 가장 많이 묻는 질문과 답변을 정리했습니다.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 1.5rem' }}>
        <QnaClient />

        {/* FAQ 하단 상담 CTA */}
        <section style={{ background: 'var(--primary-light)', borderRadius: 24, padding: '40px', marginTop: 60, textAlign: 'center', border: '1px solid rgba(196,116,138,0.2)' }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>무료 상담</p>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>궁금한 점이 더 있으신가요?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
            피부미용학원 전문 상담사가 1:1로 맞춤 과정과 수강료를 안내해 드립니다.
          </p>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <FormSection />
          </div>
        </section>

        {/* JSON-LD FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: '피부관리사 국가자격증 취득까지 얼마나 걸리나요?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '피부관리사 국가자격증은 필기시험과 실기시험으로 구성됩니다. 학원 수강 기간은 보통 3~6개월이며, 한국산업인력공단에서 연 2회 시험을 시행합니다.'
                  }
                },
                {
                  '@type': 'Question',
                  name: '국비지원 피부미용학원이란 무엇인가요?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '고용노동부 내일배움카드 제도를 통해 수강료의 45~100%를 지원받는 과정입니다. 취업준비생, 재직자, 자영업자 등이 신청 가능하며 1인당 최대 300~500만원 한도로 지원됩니다.'
                  }
                },
                {
                  '@type': 'Question',
                  name: '에스테틱 전문가 과정과 피부관리사 자격증반의 차이는 무엇인가요?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '피부관리사 자격증반은 국가공인 자격증 취득을 목적으로 하며, 에스테틱 전문가 과정은 자격증 외에 피부 분석, 기기 사용, 림프 드레나지 등 심화 기술을 포함합니다.'
                  }
                },
              ]
            })
          }}
        />
      </div>
    </main>
  );
}
