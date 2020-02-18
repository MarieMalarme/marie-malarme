import React, { Fragment } from 'react'
import ArrowBack from 'react-icons/lib/io/android-arrow-back'
import ArrowNext from 'react-icons/lib/io/android-arrow-forward'

import projects from './projects.json'
import activities from './activities.js'

import { Project } from './Project.js'
import { Activity } from './Activity.js'
import { ArrowDown, Emoji } from './Components.js'

import { scrollLeft, scrollRight } from './functions.js'

export const Intro = () => (
  <section className="fixedIntro blended-text">
    <h1>
      Marie Malarme
      <br />
      Graphic designer
      <br />& Creative developer
    </h1>
  </section>
)

export const EmojiContainer = ({ emptyCanvas }) => (
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
)

export const Label = () => (
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
)

export const Presentation = ({ presentationRef }) => (
  <section className="presentation" ref={presentationRef}>
    <h2>
      Hello ! I'm a french <span className="underlined">graphic designer</span>{' '}
      who loves to <span className="underlined">explore & create</span> with
      technology.
    </h2>
  </section>
)

export const Visual = () => (
  <section className="flex visual">
    <div className="ambianceVisual" />
  </section>
)

export const Current = () => (
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
        I'm currently working between Paris & Lisbon on an exciting{' '}
        <span className="mono">pedagogic software</span> to learn Programming to
        people, but I'm always interested in taking part to{' '}
        <span className="mono">great projects</span> of any kind to explore
        further directions.
      </h2>
    </div>
  </section>
)

export const Projects = () => (
  <Fragment>
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
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
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
  </Fragment>
)

export const Skills = () => (
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
        Front-end & back-end with JavaScript, React, Redux, Node.js, MySQL,
        HTML5 & CSS
      </h2>
    </div>
  </section>
)

export const Activities = () => (
  <Fragment>
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
  </Fragment>
)

export const Contact = () => (
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
)
