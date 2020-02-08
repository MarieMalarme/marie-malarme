import React from 'react'
import { draw } from './functions.js'

export const Canvas = ({ canvasRef, context, setLocked, setEmptyCanvas }) => (
  <canvas
    ref={canvasRef}
    width={window.innerWidth}
    height={window.innerHeight}
    onMouseMove={e => {
      context && draw({ e, context })
      setLocked(false)
      setEmptyCanvas(false)
    }}
    onTouchMove={e => {
      context && draw({ e, context, mobile: true })
      setEmptyCanvas(false)
    }}
    onTouchStart={e => {
      context && draw({ e, context, mobile: true })
      setEmptyCanvas(false)
    }}
  />
)
