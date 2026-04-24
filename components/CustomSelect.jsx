"use client";
import { useState, useRef, useEffect } from "react";

export default function CustomSelect({ name, value, onChange, options, placeholder = "Seçiniz..." }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selected = options.find((o) => o.value === value);

  const handleSelect = (val) => {
    onChange({ target: { name, value: val } });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3.5 text-left text-sm flex items-center justify-between transition-all duration-200 ${
          open
            ? "border-gold-500/50 bg-white/[0.06]"
            : "border-white/10 hover:border-white/20"
        } ${selected ? "text-white" : "text-gray-600"}`}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-[#111111] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/60">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleSelect(opt.value)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 flex items-center gap-2 ${
                value === opt.value
                  ? "bg-gold-500/15 text-gold-400"
                  : "text-gray-300 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {opt.icon && <span className="text-base">{opt.icon}</span>}
              {opt.label}
              {value === opt.value && <span className="ml-auto text-gold-400 text-xs">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
