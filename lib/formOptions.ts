// 상담 폼 선택 목록 단일 소스 — FormSection(본문 폼) / BottomForm(하단 고정 바) 공용.
// 목록을 수정할 때는 반드시 이 파일만 수정한다.

export const MOBILE_PREFIXES = ['010', '011', '016', '017', '019'] as const

export const REGIONS = [
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '세종',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
] as const

// 전송 고정값 (본문 폼 payload 와 동일)
export const SUBMIT_CATEGORY = 'skinbeauty'
export const SUBMIT_PURPOSE = '피부미용학원'
