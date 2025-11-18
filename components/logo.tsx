export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="text-primary"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill="currentColor" />
        <text
          x="20"
          y="26"
          fontSize="18"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          RR
        </text>
      </svg>
      <span className="hidden sm:inline text-lg font-bold text-foreground">
        Rizki Ramadhan
      </span>
    </div>
  )
}
