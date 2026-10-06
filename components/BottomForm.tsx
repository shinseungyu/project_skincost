'use client'

import { useEffect, useRef, useState } from 'react'
import PrivacyModal from './PrivacyModal'
import { validateForm, parsePhone, SPECIAL_CHAR_REG, type ParsedPhone } from '@/lib/validate'
import { MOBILE_PREFIXES, REGIONS, SUBMIT_CATEGORY, SUBMIT_PURPOSE } from '@/lib/formOptions'

type Status = { kind: 'idle' | 'sending' | 'done' | 'error'; msg: string }

const EMPTY_FORM = {
  customer_name: '',
  customer_birth: '',
  mobile1: '010',
  mobile2: '',
  customer_sex: '2',
  region: '',
}

/** 입력칸 공통 pill 스타일 — 흰 배경 + 옅은 회색 테두리(사이트 기존 토큰: border-black/10, globals.css 의 .pill 과 동일 톤) */
const PILL =
  'flex min-w-0 items-center bg-white border border-black/10 rounded-full px-3.5 py-2 shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-stone-400/50 focus-within:border-stone-300'
const FIELD =
  'w-full min-w-0 bg-transparent text-[13px] font-medium text-stone-800 placeholder-stone-400 focus:outline-none lg:text-[14px]'

export default function BottomForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [agree, setAgree] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [status, setStatus] = useState<Status>({ kind: 'idle', msg: '' })
  const barRef = useRef<HTMLDivElement>(null)

  const sending = status.kind === 'sending'

  const set = (key: keyof typeof EMPTY_FORM, value: string) =>
    setForm((p) => ({ ...p, [key]: value }))

  /* 실측 바 높이를 body 하단 여백(--bottomform-h)에 반영 — 푸터 가림 방지.
     안내 문구가 떠서 바가 높아지거나 폭이 바뀌어 줄이 접힐 때마다 다시 측정한다. */
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const apply = () => {
      const h = Math.ceil(el.getBoundingClientRect().height)
      document.documentElement.style.setProperty('--bottomform-h', `${h + 16}px`)
    }
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(el)
    window.addEventListener('resize', apply)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', apply)
      document.documentElement.style.removeProperty('--bottomform-h')
    }
  }, [])

  // 본문 폼과 동일한 이름 입력 규칙 (lib/validate.ts 의 SPECIAL_CHAR_REG 재사용)
  const handleNameChange = (value: string) => {
    if (SPECIAL_CHAR_REG.test(value)) {
      set('customer_name', value.slice(0, -1))
      setStatus({ kind: 'error', msg: '특수문자는 입력하실 수 없습니다.' })
      return
    }
    set('customer_name', value)
  }

  /** 본문 폼과 동일한 검증 규칙 (validateForm → parsePhone) */
  const resolve = (privacy: boolean): ParsedPhone | string => {
    const error = validateForm({ ...form, privacy })
    if (error) return error
    return parsePhone(form.mobile1, form.mobile2)
  }

  const send = async (phoneResult: ParsedPhone) => {
    // FormSection.tsx 와 동일한 엔드포인트·필드명·고정값
    const payload = {
      customer_name: form.customer_name,
      customer_birth: form.customer_birth,
      mobile1: phoneResult.mobile1,
      mobile2: phoneResult.mobile2,
      mobile3: '',
      customer_sex: form.customer_sex,
      region: form.region,
      category: SUBMIT_CATEGORY,
      purpose: SUBMIT_PURPOSE,
    }

    setStatus({ kind: 'sending', msg: '전송 중입니다...' })
    try {
      const url = process.env.NEXT_PUBLIC_DB_SUBMIT_URL!
      const key = process.env.NEXT_PUBLIC_DB_API_KEY!
      const res = await fetch(`${url}?api_key=${key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        setStatus({ kind: 'error', msg: `전송 실패: ${err.error ?? res.status}` })
        return
      }
      setForm(EMPTY_FORM)
      setAgree(false)
      setStatus({ kind: 'done', msg: '상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.' })
    } catch {
      setStatus({ kind: 'error', msg: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (sending) return

    const result = resolve(agree)
    if (typeof result === 'string') {
      setStatus({ kind: 'error', msg: result })
      return
    }
    void send(result)
  }

  // 모달에서 동의하면 체크박스를 켜고 그대로 전송한다(본문 폼과 동일한 흐름)
  const handleModalConfirm = async () => {
    setAgree(true)
    if (sending) return
    const result = resolve(true)
    if (typeof result === 'string') {
      setStatus({ kind: 'error', msg: result })
      return
    }
    await send(result)
  }

  const sexButton = (value: string, text: string, id: string) => {
    const on = form.customer_sex === value
    return (
      <>
        <input
          type="radio"
          id={id}
          name="bf_customer_sex"
          value={value}
          checked={on}
          onChange={() => set('customer_sex', value)}
          className="sr-only"
        />
        <label
          htmlFor={id}
          className={`flex h-8 min-w-[40px] cursor-pointer items-center justify-center rounded-full px-3 text-[13px] font-bold transition-all ${
            on
              ? 'bg-stone-900 text-white shadow-md shadow-stone-900/30'
              : 'bg-transparent text-stone-400 hover:text-stone-600'
          }`}
        >
          {text}
        </label>
      </>
    )
  }

  return (
    <>
      {showModal && (
        <PrivacyModal
          onConfirm={handleModalConfirm}
          onClose={() => setShowModal(false)}
        />
      )}

      <div
        ref={barRef}
        className="fixed bottom-0 left-0 right-0 z-[100] border-t border-black/10 bg-white/95 px-3 py-2 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.07)]"
        style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <form
          onSubmit={handleSubmit}
          className="mx-auto grid w-full max-w-[1180px] grid-cols-2 gap-1 md:grid-cols-4 md:gap-1.5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,0.85fr)_minmax(0,0.85fr)_minmax(0,1.45fr)_auto] lg:items-center lg:gap-2"
        >
          {/* 1. 이름 (필수) */}
          <div className={PILL}>
            <label htmlFor="bf-name" className="sr-only">이름</label>
            <input
              id="bf-name"
              type="text"
              value={form.customer_name}
              onChange={(e) => handleNameChange(e.target.value)}
              maxLength={8}
              placeholder="이름"
              className={FIELD}
            />
          </div>

          {/* 2. 성별 (필수) — 붙어 있는 pill 버튼 2개 */}
          <fieldset className="flex min-w-0 items-center justify-center gap-0.5 rounded-full border border-black/10 bg-white shadow-sm">
            <legend className="sr-only">성별</legend>
            {sexButton('1', '남', 'bf-sex-male')}
            {sexButton('2', '여', 'bf-sex-female')}
          </fieldset>

          {/* 3. 생년월일 (필수) */}
          <div className={PILL}>
            <label htmlFor="bf-birth" className="sr-only">생년월일 6자리</label>
            <input
              id="bf-birth"
              type="text"
              inputMode="numeric"
              value={form.customer_birth}
              onChange={(e) => set('customer_birth', e.target.value.replace(/\D/g, ''))}
              maxLength={6}
              placeholder="생년월일 880808"
              className={FIELD}
            />
          </div>

          {/* 4. 거주 지역 (선택 — 본문 폼과 동일) */}
          <div className={`${PILL} relative pr-7`}>
            <label htmlFor="bf-region" className="sr-only">거주 지역</label>
            <select
              id="bf-region"
              value={form.region}
              onChange={(e) => set('region', e.target.value)}
              className={`w-full min-w-0 appearance-none bg-transparent text-[13px] font-medium focus:outline-none lg:text-[14px] ${
                form.region ? 'text-stone-800' : 'text-stone-400'
              }`}
            >
              <option value="" disabled hidden>거주 지역</option>
              {REGIONS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 text-[10px] text-stone-400">▼</div>
          </div>

          {/* 5. 휴대폰 번호 (필수) */}
          <div className="col-span-2 flex min-w-0 gap-1 md:col-span-2 lg:col-span-1">
            <div className={`${PILL} relative w-[78px] shrink-0 pr-7 lg:w-[84px]`}>
              <label htmlFor="bf-mobile1" className="sr-only">통신 번호 앞자리</label>
              <select
                id="bf-mobile1"
                value={form.mobile1}
                onChange={(e) => set('mobile1', e.target.value)}
                className="w-full min-w-0 appearance-none bg-transparent text-[13px] font-medium text-stone-800 focus:outline-none lg:text-[14px]"
              >
                {MOBILE_PREFIXES.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3 text-[10px] text-stone-400">▼</div>
            </div>
            <div className={`${PILL} flex-1`}>
              <label htmlFor="bf-mobile2" className="sr-only">휴대폰 번호</label>
              <input
                id="bf-mobile2"
                type="tel"
                inputMode="numeric"
                value={form.mobile2}
                onChange={(e) => set('mobile2', e.target.value.replace(/\D/g, ''))}
                maxLength={form.mobile2.startsWith('01') ? 11 : 8}
                placeholder="'-'를 제외해주세요"
                className={FIELD}
              />
            </div>
          </div>

          {/* 6. 동의 (필수) — 체크박스/짧은 라벨 클릭 시 기존 PrivacyModal 로 상세 내용 노출 */}
          <div className="col-span-2 flex items-center justify-center md:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-2">
            <label
              htmlFor="bf-agree"
              onClick={() => setShowModal(true)}
              className="flex cursor-pointer items-center gap-1.5"
            >
              <input
                id="bf-agree"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="h-4 w-4 shrink-0 accent-stone-900"
                aria-label="개인정보 수집 및 이용 동의, 개인정보 제3자 제공 동의 (필수) — 클릭 시 상세 내용 보기"
              />
              <span className="text-[11px] font-medium leading-tight text-stone-600 underline underline-offset-2 sm:text-[12px]">
                <span className="font-bold text-stone-900">[필수]</span> 개인정보 동의
              </span>
            </label>
          </div>

          {/* 7. 전송 */}
          <button
            type="submit"
            disabled={sending}
            className="col-span-2 shrink-0 rounded-full bg-stone-900 px-5 py-2.5 text-[14px] font-bold text-white shadow-lg transition-all duration-200 hover:bg-stone-800 active:scale-[0.98] disabled:opacity-50 md:col-span-4 lg:col-span-1 lg:col-start-6 lg:row-start-1 lg:py-2"
          >
            {sending ? '전송 중...' : '상담 신청'}
          </button>
        </form>

        <p
          aria-live="polite"
          className={`mx-auto max-w-[1180px] text-center text-[11px] font-medium leading-tight ${
            status.msg ? 'mt-1.5' : ''
          } ${status.kind === 'error' ? 'text-red-600' : status.kind === 'done' ? 'text-stone-900' : 'text-stone-500'}`}
        >
          {status.msg}
        </p>
      </div>
    </>
  )
}
