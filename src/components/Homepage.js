import React, { Fragment, useRef, useEffect, useState } from 'react'
import ArrowBack from 'react-icons/lib/io/android-arrow-back'
import ArrowNext from 'react-icons/lib/io/android-arrow-forward'
import { Modale } from './Modale.js'
import { Mobile } from './Mobile.js'
import { Project } from './Project.js'
import projects from './projects.json'
import activities from './activities.js'
import { Activity } from './Activity.js'
import { Link } from '@reach/router'
import { ArrowDown, Emoji } from './Components.js'

const scrollRight = (el, p) => {
  el.scrollBy(p, 0)
}

const scrollLeft = (el, p) => {
  el.scrollBy(-p, 0)
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const blendModes = ['screen', 'exclusion', 'luminosity']

let hue1 = 0
let hue2 = 150
let strokeWidth = 150
let decreasing = true

const draw = ({ e, context, mobile }) => {
  const x = (mobile && e.touches[0].clientX) || e.clientX
  const y = (mobile && e.touches[0].clientY) || e.clientY
  const pageX = (mobile && e.touches[0].pageX) || e.pageX
  const pageY = (mobile && e.touches[0].pageY) || e.pageY
  hue1++
  hue2++
  const sat = x / 6
  if (decreasing === true && strokeWidth > 75) {
    strokeWidth = strokeWidth - 2
    if (strokeWidth === 75) {
      decreasing = false
    }
  } else {
    decreasing = false
    strokeWidth = strokeWidth + 2
    if (strokeWidth === 150) {
      decreasing = true
    }
  }

  const gradient =
    context && context.createLinearGradient(x - 35, y - 35, x + 35, y + 35)
  gradient.addColorStop(0, `hsl(${hue1}, ${sat}%, 60%)`)
  gradient.addColorStop(1, `hsl(${hue2}, ${sat}%, 60%)`)
  context.fillStyle = gradient
  context.beginPath()
  context.arc(pageX, pageY, strokeWidth, 0, 2 * Math.PI)
  context.fill()
}

const Homepage = props => {
  const projectsThumbnails = projects.map((project, i) => (
    <Project project={project} key={i} />
  ))

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

      <Mobile emptyCanvas={emptyCanvas} />

      <div id="homepage">
        {modale}
        <section className="fixedIntro blended-text">
          <h1>
            Marie Malarme
            <br />
            Graphic designer
            <br />& Creative developer
          </h1>
        </section>
        <br />

        <section className="emojiContainer">
          {emptyCanvas ? (
            <div className="emoji rotating">
              <Emoji>👆</Emoji>
            </div>
          ) : (
            <div id="scroll">
              <div className="down">
                <Emoji>&#9757;&#9757;&#9757;&#9757;</Emoji>
              </div>
            </div>
          )}
        </section>

        <div style={{ display: locked ? 'none' : 'block' }}>
          <section className="newsLabel">
            <a
              href="https://mariemalarme.github.io/rotator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="label">
                <h6>
                  <u>Fresh work</u>
                </h6>
                <h6>Take a look at my last experiment!</h6>
              </div>
            </a>
          </section>

          <section className="presentation" ref={presSection}>
            <h2>
              Hello ! I'm a french{' '}
              <span className="underlined">graphic designer</span> who loves to{' '}
              <span className="underlined">explore & create</span> with
              technology.
            </h2>
          </section>

          <section className="flex visual">
            <div className="ambianceVisual" />
          </section>

          <section className="current flex">
            <a
              className="github"
              href="https://github.com/MarieMalarme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Check my</p>
              <div className="githubSmiley">&#9787;</div>
              <p>Github</p>
            </a>
            <div className="currentActivity">
              <h2>
                I'm currently working in Lisbon on an exciting{' '}
                <span className="mono">pedagogic software project</span> to
                learn Programming to people, but I'm always interested in taking
                part to <span className="mono">great projects</span> of any kind
                to explore further directions.
              </h2>
            </div>
          </section>

          <section className="projectsCanvas">
            <div className="coinTitles">
              <h5>Marie Malarme</h5>
              <h5>Projects</h5>
            </div>
          </section>

          <section id="projectsBlock" className="projectsBlock">
            <div id="projectsWrapper" className="projectsWrapper">
              <div className="project">
                <div id="projectPlaceholder" className="projectPlaceholder" />
              </div>
              {projectsThumbnails}
            </div>
            <div className="coinTitles scrollableArrows arrows">
              <ArrowBack
                onClick={() =>
                  scrollLeft(document.getElementById('projectsWrapper'), 200)
                }
                className="arrow"
              />
              <h5>Scroll the projects</h5>
              <ArrowNext
                onClick={() =>
                  scrollRight(document.getElementById('projectsWrapper'), 200)
                }
                className="arrow"
              />
            </div>
          </section>

          <section className="skills flex">
            <div className="skillsLeft">
              <h2 className="skillsTitle">I can design</h2>
              <br />
              <h2 className="skillsText">
                <span className="skillsArrow">→</span>
                Visual identities, logos, editorial content, websites, digital
                interfaces, animations
              </h2>
            </div>

            <div className="skillsRight">
              <h2 className="skillsTitle">I can develop</h2>
              <br />
              <h2 className="skillsText">
                <span className="skillsArrow">→</span>
                Front-end & back-end with JavaScript, React, Redux, Node.js,
                MySQL, HTML5 & CSS
              </h2>
            </div>
          </section>

          <section className="recently">
            <h2 style={{ marginLeft: '5rem' }} className="mono">
              Recently :
            </h2>
          </section>

          <div className="flex layersContainer">
            {activities.map(({ id, date, content }) => (
              <Activity key={id} date={date} content={content} id={id} />
            ))}
            <div className="layer curriculum">
              Want to know more ? See my{' '}
              <a
                href="/img/cv-marie-malarme-03-2018-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                curriculum vitae
              </a>
              .
            </div>
          </div>

          <section className="contact">
            <h2>
              <span>Let's do cool stuff !</span>
              <br />
              <br />
              malarmemarie@gmail.com
              <br />
              +33 6 08 76 73 32
              <br />& I'm also on{' '}
              <a
                href="https://www.linkedin.com/in/marie-malarme/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </h2>
          </section>
        </div>
      </div>
    </Fragment>
  )
}

export default Homepage
