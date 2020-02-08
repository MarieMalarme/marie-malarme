import React from 'react'

export const ArrowDown = () => (
  <svg
    width={40}
    viewBox="0 0 130 130"
    fill="none"
    stroke="white"
    strokeWidth={5}
  >
    <path d="M114.65 73.1L67 120.75 19.35 73.1M67 5.75v114.34" />
  </svg>
)

export const Emoji = ({ children }) => (
  <span role="img" aria-label="emoji">
    {children}
  </span>
)
