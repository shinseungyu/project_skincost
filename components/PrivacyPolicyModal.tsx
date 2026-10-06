"use client"

import { useState } from "react"
import { THIRD_PARTY_RECIPIENT } from "@/lib/legal"

export default function PrivacyPolicyModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} style={{ color: "inherit", textDecoration: "none", fontWeight: "inherit", background: "none", border: "none", cursor: "pointer", fontSize: "inherit", padding: 0 }}>
        개인정보처리방침
      </button>

      {open && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.7)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
          <div style={{ backgroundColor: "#fff", borderRadius: "1rem", width: "100%", maxWidth: "680px", maxHeight: "85dvh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", borderBottom: "1px solid #e5e7eb" }}>
              <h2 style={{ margin: 0, fontSize: "1.125rem", fontWeight: 700 }}>주식회사 와야미디어 개인정보 처리방침</h2>
              <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.25rem", color: "#6b7280", lineHeight: 1 }}>✕</button>
            </div>

            <div style={{ overflowY: "auto", padding: "1.5rem", fontSize: "0.875rem", lineHeight: 1.8, color: "#374151" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                주식회사 와야미디어(이하 &apos;회사&apos;)는 정보주체의 동의를 기반으로 개인정보를 수집·이용 및 제공하고 있으며, 정보주체의 개인정보자기결정권을 적극적으로 보장합니다.<br /><br />
                본 개인정보처리방침은 &apos;피부미용학원 수강료 상담 안내&apos; 서비스에 적용됩니다.
              </p>

              <Section title="제1조 (개인정보의 처리 목적)">
                회사는 개인정보를 다음의 목적을 위해 처리합니다.<br /><br />
                가) 정보주체의 식별 및 상담 신청 의사 확인<br />
                나) 피부미용학원 수강료 상담 안내 및 관련 서비스 제공<br />
                다) 신규 서비스 개발, 이벤트 및 마케팅 정보 전달<br />
                라) 서비스 이용기록 분석 및 맞춤형 정보 제공
              </Section>

              <Section title="제2조 (개인정보의 처리 및 보유 기간)">
                회사는 정보주체로부터 개인정보를 수집 시 동의 받은 보유·이용기간 내에서 처리·보유합니다.<br /><br />
                서비스 이용 관련 개인정보 : 통신비밀보호법 / 3개월<br />
                소비자 불만 또는 분쟁처리 기록 : 3년<br />
                상담 이력 : 수집일로부터 1년
              </Section>

              <Section title="제3조 (수집하는 개인정보 항목)">
                <b>서비스명:</b> 피부미용학원 수강료 상담 안내 서비스<br />
                <b>필수수집항목:</b> 성명, 연락처, 생년월일, 성별, 거주지역, 관심 과정<br />
                <b>자동수집항목:</b> IP Address, 참여일시, 유입경로
              </Section>

              <Section title="제4조 (개인정보의 제3자 제공)">
                <b>제공받는 자:</b> {THIRD_PARTY_RECIPIENT}<br />
                <b>제공 목적:</b> 피부미용학원 사용료 상세 상담 및 관련 정보 안내<br />
                <b>제공 항목:</b> 수집된 개인정보 일체<br />
                <b>보유 및 이용기간:</b> 제공받는 자의 목적 달성 시까지
              </Section>

              <Section title="제5조 (개인정보 보호책임자)">
                <b>성명:</b> 신승윤<br />
                <b>이메일:</b> shinsy711@gmail.com
              </Section>

              <Section title="제6조 (권익침해에 대한 구제)">
                - 개인정보 침해신고센터 (privacy.kisa.or.kr, ☎ 118)<br />
                - 개인정보 분쟁조정위원회 (kopico.go.kr, ☎ 1833-6972)<br />
                - 대검찰청 사이버범죄수사단 (☎ 02-3480-3573)<br />
                - 경찰청 사이버범죄수사단 (☎ 1566-0112)
              </Section>

              <Section title="제7조 (개인정보 처리방침 변경)">
                <b>공고일자:</b> 2026년 05월 01일<br />
                <b>시행일자:</b> 2026년 05월 01일
              </Section>
            </div>

            <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid #e5e7eb" }}>
              <button onClick={() => setOpen(false)} style={{ width: "100%", padding: "0.75rem", backgroundColor: "#1c1917", color: "#fff", border: "none", borderRadius: "0.75rem", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>{title}</h3>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  )
}
