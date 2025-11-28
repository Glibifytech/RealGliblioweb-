export function GliblioLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Speech bubble icon */}
      <rect x="0" y="4" width="24" height="24" rx="12" fill="#2563eb" />
      <circle cx="8" cy="16" r="2" fill="white" />
      <circle cx="12" cy="16" r="2" fill="white" />
      <circle cx="16" cy="16" r="2" fill="white" />
      <text x="32" y="23" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#2563eb">
        Gliblio
      </text>
    </svg>
  )
}
