import React, { Fragment, useRef, useEffect, useState } from 'react'
import { Link } from '@reach/router'

import projects from './projects.json'

import { Modale } from './Modale.js'
import { Mobile } from './Mobile.js'
import { Activity } from './Activity.js'
import { Canvas } from './Canvas.js'
import {
  Intro,
  EmojiContainer,
  Label,
  Presentation,
  Visual,
  Current,
  Projects,
  Skills,
  Activities,
  Contact,
} from './Sections.js'

import { getRandomInt, blendModes } from './functions.js'

const Homepage = props => {
  const selectedProject = projects.find(
    project => project.id === props.projectId,
  )

  const modale = selectedProject && (
    <section className="modale">
      <Modale project={selectedProject} />
    </section>
  )

  const canvasRef = useRef(null)
  const presSection = useRef(null)
  const [context, setContext] = useState(null)
  const [locked, setLocked] = useState(true)
  const [emptyCanvas, setEmptyCanvas] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    setContext(ctx)
    canvas.addEventListener('click', e => {
      canvas.style.mixBlendMode = blendModes[getRandomInt(0, 3)]
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      setEmptyCanvas(true)
    })

    const types = ['scroll', 'wheel']
    types.map(type =>
      document.addEventListener(type, e => {
        const getPositions =
          presSection &&
          presSection.current &&
          presSection.current.getBoundingClientRect()
        const hitTop = getPositions.top
        canvas.style.display = !locked && hitTop === 0 ? 'none' : 'block'
        canvas.style.pointerEvents = window.scrollY > 0 ? 'none' : 'auto'
      }),
    )
  }, [context, presSection, locked, emptyCanvas])

  return (
    <Fragment>
      <Canvas
        canvasRef={canvasRef}
        context={context}
        setLocked={setLocked}
        setEmptyCanvas={setEmptyCanvas}
      />

      <Mobile emptyCanvas={emptyCanvas} />

      <div id="homepage">
        {modale}

        <Intro />
        <br />
        <EmojiContainer emptyCanvas={emptyCanvas} />

        <div style={{ display: locked ? 'none' : 'block' }}>
          <Label />
          <Presentation presSection={presSection} />
          <Visual />
          <Current />
          <Projects />
          <Skills />
          <Activities />
          <Contact />
        </div>
      </div>
    </Fragment>
  )
}

export default Homepage
