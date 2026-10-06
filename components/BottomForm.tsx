'use client'

import { useState } from 'react'
import PrivacyModal from './PrivacyModal'
import { parsePhone } from '@/lib/validate'

type Status = { kind: 'idle' | 'sending' | 'done' | 'error'; msg: string }

export default function BottomForm() {
  const [phone, setPhone] = useState('')
  const [agree, setAgree] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [status, setStatus] = useState<Status>({ kind: 'idle', msg: '' })

  const sending = status.kind === 'sending'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (sending) return

    if (!phone) {
      setStatus({ kind: 'error', msg: '휴대폰 번호를 입력해 주세요.' })
      return
    }
    const phoneResult = parsePhone('010', phone)
    if (typeof phoneResult === 'string') {
      setStatus({ kind: 'error', msg: phoneResult })
      return
    }
    if (!agree) {
      setStatus({ kind: 'error', msg: '개인정보 수집·이용 및 제3자 제공에 동의해 주세요.' })
      return
    }

    // FormSection.tsx 와 완전히 동일한 엔드포인트·필드·환경변수 (번호 외 항목은 빈 값)
    const payload = {
      customer_name: '',
      customer_birth: '',
      mobile1: phoneResult.mobile1,
      mobile2: phoneResult.mobile2,
      mobile3: '',
      customer_sex: '',
      region: '',
      category: 'skinbeauty',
      purpose: '피부미용학원',
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
      setPhone('')
      setAgree(false)
      setStatus({ kind: 'done', msg: '상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.' })
    } catch {
      setStatus({ kind: 'error', msg: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' })
    }
  }

  return (
    <>
      {showModal && (
        <PrivacyModal
          onConfirm={() => setAgree(true)}
          onClose={() => setShowModal(false)}
        />
      )}

      <div
        className="fixed bottom-0 left-0 right-0 z-[100] border-t border-black/10 bg-white/95 px-3 py-2.5 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.07)]"
        style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-[760px] flex-wrap items-center gap-2 sm:gap-2.5"
        >
          {/* 동의 (필수) — 상세 내용은 기존 개인정보 동의 모달로 연결 */}
          <div className="flex w-full items-center gap-1.5 sm:w-auto sm:shrink-0">
            <label className="flex cursor-pointer items-center gap-1.5">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="h-4 w-4 shrink-0 accent-stone-900"
                aria-label="개인정보 수집 및 이용 동의, 개인정보 제3자 제공 동의 (필수)"
              />
              <span className="text-[11px] font-medium leading-tight text-stone-600 sm:text-[12px]">
                <span className="font-bold text-stone-900">[필수]</span> 개인정보 수집·이용 및 제3자 제공 동의
              </span>
            </label>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="shrink-0 text-[11px] font-bold text-stone-500 underline underline-offset-2 hover:text-stone-900 sm:text-[12px]"
            >
              상세
            </button>
          </div>

          <div className="flex min-w-0 flex-1 items-center bg-stone-100 rounded-full px-4 py-2.5 shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-stone-400/50">
            <input
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              maxLength={11}
              placeholder="휴대폰 번호 ('-' 없이)"
              aria-label="휴대폰 번호"
              className="w-full min-w-0 bg-transparent text-[14px] font-medium text-stone-800 placeholder-stone-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="shrink-0 rounded-full bg-stone-900 px-5 py-2.5 text-[14px] font-bold text-white shadow-lg transition-all duration-200 hover:bg-stone-800 active:scale-[0.98] disabled:opacity-50"
          >
            {sending ? '전송 중...' : '상담 신청'}
          </button>
        </form>

        <p
          aria-live="polite"
          className={`mx-auto max-w-[760px] text-center text-[11px] font-medium leading-tight ${
            status.msg ? 'mt-1.5' : ''
          } ${status.kind === 'error' ? 'text-red-600' : status.kind === 'done' ? 'text-stone-900' : 'text-stone-500'}`}
        >
          {status.msg}
        </p>
      </div>
    </>
  )
}
