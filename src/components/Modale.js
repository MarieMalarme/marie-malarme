import React from 'react'
import { Link, navigate } from '@reach/router'
import ReactHtmlParser from 'react-html-parser'

document.addEventListener('keydown', event => {
  if (event.which === 27) {
    navigate('/')
  }
})

const toHTML = {
  iframe: ({ value }) => (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe
        title="iframe"
        className="iframe"
        src={value}
        frameBorder="0"
        allow="autoplay; loop; encrypted-media"
        tabIndex="-1"
      />
    </div>
  ),

  img: ({ value }) =>
    value.split(',').map((url, i) => <img key={i} src={url} alt="" />),

  video: ({ value }) => <Video url={value} />,
}

const Video = ({ url }) => (
  <video width="100%" src={url} type="video/mov" loop={true} autoPlay={true} />
)

const Element = ({ element }) => toHTML[element.type](element)

export const Modale = ({ project }) => {
  const content = project.modaleContent.map((element, i) => (
    <Element key={i} element={element} />
  ))

  const projectDescription = project.description

  return (
    <div style={{ overflow: 'scroll', height: '100%' }}>
      <Link className="BackButton" to="/">
        <div>←</div>
      </Link>

      {project.modaleIntroImage.includes('.mov') ||
      project.modaleIntroImage.includes('.mp4') ? (
        <Video url={project.modaleIntroImage} />
      ) : (
        <div
          className="modaleIntroImage"
          style={{
            background: `center / cover no-repeat url(${
              project.modaleIntroImage
            })`,
          }}
        />
      )}

      <div className="modaleDescription">
        <h2>{ReactHtmlParser(projectDescription)}</h2>
      </div>

      <div id="modaleHeader" className="modaleHeader flex">
        <h6>
          <u>{project.title}</u> {project.headerDescription}
        </h6>
      </div>

      <div className="modaleContent">{content}</div>
    </div>
  )
}
