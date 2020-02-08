import React from 'react'

const Activity = ({ id, date, content }) => (
  <div className="layer" style={{ zIndex: id }}>
    <div className="date">{date}</div>
    {content.text.split('//').map(
      (e, i) =>
        (i % 2 === 0 && e) || (
          <a
            key={i}
            href={content.links[(i - 1) / 2]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {e}
          </a>
        ),
    )}
  </div>
)

export default Activity
