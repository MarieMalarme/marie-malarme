import React, { useRef, useEffect, useState } from 'react'
import ArrowBack from 'react-icons/lib/io/android-arrow-back'
import ArrowNext from 'react-icons/lib/io/android-arrow-forward'
import Modale from './Modale.js'
import Project from './Project.js'
import projects from './projects.json'
import { Link } from '@reach/router'

// const scrollRight = () => {
//  document.getElementById('projectPlaceholder').animate([
//  // keyframes
//  { marginLeft: '-25vw' },
//  { transform: '-50vw' }
//  ], {
//  // timing options
//  duration: 1000,
//  })
// }

const scrollRight = (el, p) => {
  el.scrollBy(p, 0)
}

const scrollLeft = (el, p) => {
  el.scrollBy(-p, 0)
}

const Homepage = props => {
  const projectsThumbnails = projects.map((project, i) => (
    <Project project={project} key={i} />
  ))

  const selectedProject = projects.find(
    project => project.id === props.projectId,
  )

  const modale =
    selectedProject !== undefined ? (
      <section className="modale">
        <Modale project={selectedProject} />
      </section>
    ) : (
      ''
    )

  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const canvasRef = useRef(null)
  const presSection = useRef(null)
  const wrapper = useRef(null)
  const [context, setContext] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    setContext(ctx)
    canvas.addEventListener('click', e => {
      canvas.style.mixBlendMode = blendModes[getRandomInt(0, 3)]
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    })
    document.addEventListener('scroll', e => {
      const getPositions = presSection.current.getBoundingClientRect()
      const hitTop = getPositions.top
      canvas.style.display = hitTop === 0 ? 'none' : 'block'
    })
    document.addEventListener('wheel', e => {
      canvas.style.pointerEvents = window.scrollY > 0 ? 'none' : 'auto'
    })
  })

  const blendModes = ['screen', 'exclusion', 'luminosity']

  let hue1 = 0
  let hue2 = 150
  let strokeWidth = 150
  let decreasing = true

  const draw = e => {
    hue1++
    hue2++
    const sat = e.clientX / 6
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
      context &&
      context.createLinearGradient(
        e.clientX - 35,
        e.clientY - 35,
        e.clientX + 35,
        e.clientY + 35,
      )
    gradient.addColorStop(0, `hsl(${hue1}, ${sat}%, 60%)`)
    gradient.addColorStop(1, `hsl(${hue2}, ${sat}%, 60%)`)
    context.fillStyle = gradient
    context.beginPath()
    context.arc(e.pageX, e.pageY, strokeWidth, 0, 2 * Math.PI)
    context.fill()
  }

  const arrowDown = (
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

  return (
    <React.Fragment>
      <div className="mobilePage">Please take a look on a wider screen !</div>

      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={e => {
          context && draw(e)
          const scroll = document.getElementById('scroll')
          scroll.style.display = 'flex'
          wrapper.current.style.display = 'block'
        }}
      />

      <div className="homepage">
        {modale}
        <section className="fixedIntro blended-text">
          <h1>
            Marie Malarme
            <br />
            Graphic designer
            <br />& Creative developer
          </h1>
          <div id="scroll">
            <span style={{ marginRight: '15px' }}>Scroll down</span>
            {arrowDown}
            {arrowDown}
            {arrowDown}
          </div>
        </section>

        <br />

        <section className="emojiContainer">
          <div className="emoji rotating">&#9757;</div>
        </section>

        <div ref={wrapper} style={{ display: 'none' }}>
          <section className="newsLabel">
            <a
              href="https://mariemalarme.github.io/rotator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="label">
                <h6>
                  <u>Fresh work</u>
                  <br />
                  <br />
                  Take a look at my last experiment !
                </h6>
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
            <div className="layer" style={{ zIndex: '6' }}>
              <div className="date">2019.11.13</div>
              Opening of the first school using the 01 pedagogic software in{' '}
              <a
                href="https://alem.school/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alem
              </a>{' '}
              in Kazakhstan.
            </div>

            <div className="layer" style={{ zIndex: '5' }}>
              <div className="date">2018.11.15</div>
              Started to work in Madeira as Graphic/UI/UX Designer and React
              Developer for a pedagogic software to learn Programming to people.
            </div>
            <div className="layer" style={{ zIndex: '4' }}>
              <div className="date">2018.07.27</div>
              Release of the{' '}
              <a
                href="https://atelier-rusch.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atelier Rusch
              </a>{' '}
              website and back-office, developed with React Javascript, Redux,
              Node.JS, MySQL, HTML5 & CSS.
            </div>
            <div className="layer" style={{ zIndex: '3' }}>
              <div className="date">2018.02.26 → 2018.07.27</div>5 month of
              intensive JavaScript & React development course at{' '}
              <a
                href="https://wildcodeschool.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wild Code School Paris
              </a>
              .
            </div>
            <div className="layer" style={{ zIndex: '2' }}>
              <div className="date">2017.07.01 → 2017.11.30</div>
              Graphic & Webdesigner intern at{' '}
              <a
                href="https://bleed.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bleed
              </a>{' '}
              in Vienna.
            </div>
            <div className="layer" style={{ zIndex: '1' }}>
              <div className="date">2017.06.25</div>
              Graduate with Master's Degree in Multimedia & Interactive Design
              at{' '}
              <a
                href="https://multimedia-sorbonne.com/accueil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                La Sorbonne
              </a>{' '}
              in Paris.
            </div>
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
    </React.Fragment>
  )
}

export default Homepage
