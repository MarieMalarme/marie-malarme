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
  const presentationRef = useRef(null)
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
        if (locked || !presentationRef) return
        const getPositions =
          presentationRef.current &&
          presentationRef.current.getBoundingClientRect()
        const hitTop = getPositions.top
        canvas.style.display = hitTop === 0 ? 'none' : 'block'
        canvas.style.pointerEvents = window.scrollY > 0 ? 'none' : 'auto'
      }),
    )
  }, [context, presentationRef, locked, emptyCanvas])

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

        {!locked && (
          <Fragment>
            <Label />
            <Presentation presentationRef={presentationRef} />
            <Visual />
            <Current />
            <Projects />
            <Skills />
            <Activities />
            <Contact />
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}

export default Homepage
