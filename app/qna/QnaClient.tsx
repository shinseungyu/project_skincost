"use client"

import { useState } from "react"

const faqs = [
  {
    q: "피부미용학원 수강료 비교사이트에서 어떤 정보를 얻을 수 있나요?",
    a: "피부관리사 국가자격증반, 에스테틱 전문가 과정, 성장인자 전문가 과정, 홈에스테틱 집중 과정, 트러블 스킨케어 전문반 등의 수강료를 한눈에 비교할 수 있습니다. 수도권·지방 학원 비용 차이, 국비지원 가능 여부, 과정 기간 정보도 함께 제공합니다.",
    category: "사이트 이용"
  },
  {
    q: "피부관리사 국가자격증 취득까지 얼마나 걸리나요?",
    a: "피부관리사 국가자격증은 필기시험과 실기시험으로 구성됩니다. 학원 수강 기간은 보통 3~6개월이며, 수강 후 자격증 시험에 응시합니다. 한국산업인력공단에서 연 2회 시험을 시행하므로 시험 일정에 맞춰 준비하는 것이 중요합니다.",
    category: "자격증"
  },
  {
    q: "국비지원 피부미용학원이란 무엇인가요?",
    a: "고용노동부 내일배움카드 제도를 통해 수강료의 45~100%를 지원받는 과정입니다. 취업준비생, 재직자, 자영업자 등이 신청 가능하며, 국민내일배움카드 발급 후 HRD-Net에서 훈련 과정을 신청합니다. 지원 한도는 1인당 최대 300~500만원으로 피부미용학원 수강료의 상당 부분을 절약할 수 있습니다.",
    category: "국비지원"
  },
  {
    q: "에스테틱 전문가 과정과 피부관리사 자격증반의 차이는 무엇인가요?",
    a: "피부관리사 자격증반은 국가공인 자격증 취득을 목적으로 하며 기초 피부 관리 기술을 익힙니다. 에스테틱 전문가 과정은 자격증 외에 피부 분석, 기기 사용, 림프 드레나지, 왁싱 등 심화 기술을 포함합니다. 1인샵 창업이나 전문 피부샵 취업을 목표로 한다면 에스테틱 전문가 과정을 추천합니다.",
    category: "과정 비교"
  },
  {
    q: "성장인자 전문가 과정은 어떤 내용을 배우나요?",
    a: "성장인자(EGF·FGF·IGF) 원리와 적용 방법, 피부 재생 메커니즘, 성장인자 앰플 및 기기 활용법, 트러블 피부 케어 프로토콜을 배웁니다. 수강 후 성장인자 전문가 민간 자격증을 취득할 수 있으며, 고급 피부 관리 서비스를 제공하는 피부샵에서 차별화된 경쟁력을 가질 수 있습니다.",
    category: "과정 정보"
  },
  {
    q: "홈에스테틱 과정은 어떻게 진행되나요?",
    a: "홈에스테틱 과정은 가정에서 전문적인 피부 관리를 할 수 있는 기술을 가르칩니다. RF·LED·초음파 등 가정용 기기 사용법, 마사지 기법, 팩 제조, 피부 유형별 케어 루틴을 배웁니다. 단기 특강(2~4주)부터 집중 과정(2~3개월)까지 다양하게 운영됩니다.",
    category: "과정 정보"
  },
  {
    q: "트러블 스킨케어 전문반은 어떤 사람에게 추천하나요?",
    a: "여드름, 민감성 피부, 색소침착 등 문제성 피부 관리에 특화하고 싶은 분에게 추천합니다. 피부 트러블 원인 분석, 진정 케어 프로토콜, 스킨케어 제품 성분 이해, 기능성 화장품 활용법을 배울 수 있습니다. 피부샵 취업이나 개인 피부 고민 해결 모두에 도움이 됩니다.",
    category: "과정 정보"
  },
  {
    q: "피부미용학원 선택 시 가장 중요하게 봐야 할 점은 무엇인가요?",
    a: "①국비지원(내일배움카드) 가능 여부 ②취업 연계 및 채용 지원 프로그램 ③강사진 자격과 실무 경력 ④실습 기기의 종류와 수 ⑤수강료 대비 커리큘럼 품질을 확인하세요. 무료 상담을 통해 여러 학원을 비교한 뒤 결정하는 것이 좋습니다.",
    category: "학원 선택"
  },
]

export default function QnaClient() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('전체')

  const categories = ['전체', ...Array.from(new Set(faqs.map(f => f.category)))]
  const filtered = activeCategory === '전체' ? faqs : faqs.filter(f => f.category === activeCategory)

  return (
    <div>
      {/* 카테고리 필터 */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 20px', borderRadius: 50, fontSize: 13, fontWeight: 700,
              border: '1.5px solid',
              borderColor: activeCategory === cat ? 'var(--primary)' : 'var(--border-color)',
              background: activeCategory === cat ? 'var(--primary)' : 'white',
              color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ 목록 */}
      <dl style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.map((faq, i) => (
          <div key={i} style={{ border: '1px solid var(--border-color)', borderRadius: 20, overflow: 'hidden', background: 'var(--bg-card)' }}>
            <dt>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{
                  width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: 16, background: 'none', border: 'none',
                  cursor: 'pointer', textAlign: 'left',
                }}
                aria-expanded={openIdx === i}
              >
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--primary)', display: 'block', marginBottom: 4 }}>{faq.category}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>Q. {faq.q}</span>
                </div>
                <span style={{
                  flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
                  background: openIdx === i ? 'var(--primary)' : 'var(--bg-main)',
                  color: openIdx === i ? 'white' : 'var(--text-muted)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, transition: 'all 0.2s',
                  transform: openIdx === i ? 'rotate(45deg)' : 'none',
                }}>+</span>
              </button>
            </dt>
            <dd style={{
              padding: openIdx === i ? '16px 24px 20px' : '0 24px',
              fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8,
              borderTop: openIdx === i ? '1px solid var(--border-color)' : 'none',
              margin: 0,
              maxHeight: openIdx === i ? 'none' : 0,
              overflow: 'hidden',
            }}>
              {faq.a}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
