"use client"

import { useState } from "react"
import PrivacyModal from "./PrivacyModal"
import { validateForm, parsePhone, SPECIAL_CHAR_REG } from "@/lib/validate"
import { MOBILE_PREFIXES, REGIONS, SUBMIT_CATEGORY, SUBMIT_PURPOSE } from "@/lib/formOptions"

export default function FormSection() {
  const [form, setForm] = useState({
    customer_name: "",
    customer_birth: "",
    mobile1: "010",
    mobile2: "",
    customer_sex: "2",
    region: "",
  })
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (key: string, value: string) =>
    setForm((p) => ({ ...p, [key]: value }))

  const handleNameChange = (value: string) => {
    if (SPECIAL_CHAR_REG.test(value)) {
      alert("특수문자는 입력하실수 없습니다.")
      set("customer_name", value.slice(0, -1))
      return
    }
    set("customer_name", value)
  }

  const handleSubmitClick = () => {
    const error = validateForm({ ...form, privacy: true })
    if (error) { alert(error); return }
    setShowModal(true)
  }

  const handleConfirm = async () => {
    const phoneResult = parsePhone(form.mobile1, form.mobile2)
    if (typeof phoneResult === "string") { alert(phoneResult); return }

    const payload = {
      customer_name: form.customer_name,
      customer_birth: form.customer_birth,
      mobile1: phoneResult.mobile1,
      mobile2: phoneResult.mobile2,
      mobile3: "",
      customer_sex: form.customer_sex,
      region: form.region,
      category: SUBMIT_CATEGORY,
      purpose: SUBMIT_PURPOSE,
    }

    setSubmitted(true)
    try {
      const url = process.env.NEXT_PUBLIC_DB_SUBMIT_URL!
      const key = process.env.NEXT_PUBLIC_DB_API_KEY!
      const res = await fetch(`${url}?api_key=${key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        alert(`전송 실패: ${err.error ?? res.status}`)
        setSubmitted(false)
        return
      }
      alert("상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.")
      setForm({ customer_name: "", customer_birth: "", mobile1: "010", mobile2: "", customer_sex: "2", region: "" })
    } catch {
      alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
    }
    setSubmitted(false)
  }

  return (
    <>
      {showModal && (
        <PrivacyModal onConfirm={handleConfirm} onClose={() => setShowModal(false)} />
      )}

      <div className="flex flex-col gap-3">
        {/* 1. Name & Gender */}
        <div className="flex bg-stone-100 rounded-full pl-5 pr-2 py-2 shadow-sm items-center transition-shadow focus-within:ring-2 focus-within:ring-stone-400/50">
          <input
            type="text"
            value={form.customer_name}
            onChange={(e) => handleNameChange(e.target.value)}
            maxLength={8}
            placeholder="이름"
            className="flex-1 bg-transparent text-[15px] font-medium text-stone-800 placeholder-stone-400 focus:outline-none min-w-0 py-1.5"
          />
          <div className="flex items-center gap-1.5 ml-2 pl-3 border-l border-stone-200 shrink-0">
            <button
              type="button"
              onClick={() => set("customer_sex", "1")}
              className={`w-9 h-9 rounded-full text-[14px] font-bold transition-all ${
                form.customer_sex === "1"
                  ? "bg-stone-800 text-white shadow-md shadow-stone-800/30"
                  : "bg-white text-stone-400 hover:bg-stone-50"
              }`}
            >남</button>
            <button
              type="button"
              onClick={() => set("customer_sex", "2")}
              className={`w-9 h-9 rounded-full text-[14px] font-bold transition-all ${
                form.customer_sex === "2"
                  ? "bg-stone-800 text-white shadow-md shadow-stone-800/30"
                  : "bg-white text-stone-400 hover:bg-stone-50"
              }`}
            >여</button>
          </div>
        </div>

        {/* 2. Birth */}
        <div className="flex bg-stone-100 rounded-full px-5 py-3.5 shadow-sm items-center transition-shadow focus-within:ring-2 focus-within:ring-stone-400/50">
          <input
            type="text"
            value={form.customer_birth}
            onChange={(e) => set("customer_birth", e.target.value.replace(/\D/g, ""))}
            maxLength={6}
            placeholder="생년월일 (예:880808)"
            className="w-full bg-transparent text-[15px] font-medium text-stone-800 placeholder-stone-400 focus:outline-none"
          />
        </div>

        {/* 3. Phone */}
        <div className="flex gap-2">
          <div className="bg-stone-100 rounded-full pl-5 pr-8 py-3.5 shadow-sm flex items-center relative shrink-0 w-[105px] transition-shadow focus-within:ring-2 focus-within:ring-stone-400/50">
            <select
              value={form.mobile1}
              onChange={(e) => set("mobile1", e.target.value)}
              className="w-full bg-transparent text-[15px] font-medium text-stone-800 appearance-none focus:outline-none"
            >
              {MOBILE_PREFIXES.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
            <div className="absolute right-4 pointer-events-none text-stone-400 text-xs">▼</div>
          </div>
          <div className="flex-1 bg-stone-100 rounded-full px-5 py-3.5 shadow-sm flex items-center transition-shadow focus-within:ring-2 focus-within:ring-stone-400/50">
            <input
              type="text"
              value={form.mobile2}
              onChange={(e) => set("mobile2", e.target.value.replace(/\D/g, ""))}
              maxLength={form.mobile2.startsWith("01") ? 11 : 8}
              placeholder="'-'를 제외해주세요"
              className="w-full bg-transparent text-[15px] font-medium text-stone-800 placeholder-stone-400 focus:outline-none min-w-0"
            />
          </div>
        </div>

        {/* 4. Region */}
        <div className="flex bg-stone-100 rounded-full px-5 py-3.5 shadow-sm items-center relative transition-shadow focus-within:ring-2 focus-within:ring-stone-400/50">
          <select
            value={form.region}
            onChange={(e) => set("region", e.target.value)}
            className={`w-full bg-transparent text-[15px] font-medium appearance-none focus:outline-none ${form.region ? "text-stone-800" : "text-stone-400"}`}
          >
            <option value="" disabled hidden>거주 지역 선택</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <div className="absolute right-5 pointer-events-none text-stone-400 text-xs">▼</div>
        </div>

        {/* Submit Button */}
        <div className="mt-2 text-center">
          <button
            type="button"
            onClick={handleSubmitClick}
            disabled={submitted}
            className="w-full bg-stone-900 text-white rounded-full text-[16px] font-bold shadow-lg hover:bg-stone-800 active:scale-[0.98] transition-all duration-200 py-4 disabled:opacity-50"
          >
            {submitted ? '전송 중...' : '무료 상담 신청하기'}
          </button>
          <p className="mt-3 text-[12px] font-medium text-stone-500 flex items-center justify-center gap-1.5">
            <span className="text-[14px]">🕒</span> 상담 가능 시간 : 월요일 ~ 토요일 (오후 7시 마감)
          </p>
        </div>
      </div>
    </>
  )
}
