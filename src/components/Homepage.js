import React from 'react'
import ArrowBack from 'react-icons/lib/io/android-arrow-back'
import ArrowNext from 'react-icons/lib/io/android-arrow-forward'
import Modale from './Modale.js'
import Project from './Project.js'
import projects from './projects.json'

const state = {
	projects: projects
}

// const scrollRight = () => {
// 	document.getElementById('projectPlaceholder').animate([
// 	// keyframes
// 	{ marginLeft: '-25vw' }, 
// 	{ transform: '-50vw' }
// 	], { 
// 	// timing options
// 	duration: 1000,
// 	})
// }

const scrollRight = (el, p) => {
	el.scrollBy(p, 0)
}

const scrollLeft = (el, p) => {
  el.scrollBy(-p, 0)
}

const Homepage = (props) => {

	const projectsThumbnails = state.projects
		.map((project, i) => <Project project={project} key={i} />)

	const selectedProject = state.projects
		.find(project => project.id === props.projectId)

	const modale = selectedProject !== undefined
    	? <section className='modale'><Modale project={selectedProject} /></section>
    	: ''

	return (
		<div className='homepage'>
			
			{modale}

			<section className='fixedIntro'>
				<h1>
					<span style={{ color: 'black' }}>
						Marie Malarme
					</span>
					<br/>
					Graphic designer
					<br/>
					& Creative developer
				</h1>
			</section>

			<br/>

			<section className='emojiContainer'>
				<div className='emoji rotating'>
					&#9757;
				</div>
			</section>

			<section className='newsLabel'>
				<a href='https://demo.atelier-rusch.com' target='_blank' rel='noopener noreferrer'>
					<div className='label'>
						<h6>
							<u>Fresh news</u>
							<br/><br/>
							Take a look at my last pusblished project !
						</h6>
					</div>
				</a>
			</section>

			<section className='presentation'>
				<h2>
					Hello ! I'm a french <span className='underlined'>graphic designer</span> who loves to <span className='underlined'>explore & create</span> with technology.
				</h2>
			</section>

			<section className='flex'>
				<div className='ambianceVisual'>
				</div>
			</section>

			<section className='flex'>
				<a className='github' href='https://github.com/MarieMalarme' target='_blank' rel='noopener noreferrer'>
					<p>Check my</p>
					<div className='githubSmiley'>
						&#9787;
					</div>
					<p>Github</p>
				</a>
				<div className='currentActivity'>
					<h2>
						I just completed an intensive 5 month <span className='mono'>JavaScript development</span> course and am currently looking for a <span className='mono'>great internship</span> to strengthen my skills.
					</h2>
				</div>
			</section>

			<section className='projectsCanvas'>
				<div className='coinTitles'>
					<h5>Marie Malarme</h5>
					<h5>Projects</h5>
				</div>
			</section>

			<section id='projectsBlock' className='projectsBlock'>
				<div id='projectsWrapper' className='projectsWrapper'>
					<div className='project'>
						<div id='projectPlaceholder' className='projectPlaceholder'/>
					</div>
					{projectsThumbnails}
				</div>
				<div className='coinTitles scrollableArrows arrows'>
					<ArrowBack onClick={() => scrollLeft(document.getElementById('projectsWrapper'), 200)} className='arrow'/>
					<h5>Scroll the projects</h5>
					<ArrowNext onClick={() => scrollRight(document.getElementById('projectsWrapper'), 200)} className='arrow'/>
				</div>
			</section>

			<section className='skills flex'>
				<div className='skillsLeft'>
					<h2 className='skillsTitle'>I can design</h2>
					<br/>
					<h2 className='skillsText'>
						<span className='skillsArrow'>→</span>
						Visual identities, logos, editorial content, websites, digital interfaces, animations
					</h2>
				</div>

				<div className='skillsRight'>
					<h2 className='skillsTitle'>I can develop</h2>
					<br/>
					<h2 className='skillsText'>
						<span className='skillsArrow'>→</span>
						Front-end & back-end with JavaScript, React, Redux, Node.js, MySQL, HTML5 & CSS
					</h2>
				</div>
			</section>

			<section className='recently'>
				<h2 style={{ marginLeft: '5rem' }} className='mono'>
					Recently : 
				</h2>
			</section>
			<div className='flex layersContainer'>
				<div className='layer' style={{ zIndex: '4' }}>
					<div className='date'>
						2018.07.27
					</div>
					Release of the <a href='https://demo.atelier-rusch.com/' target='_blank' rel='noopener noreferrer'>Atelier Rusch</a> website and back-office, developed with React Javascript, Redux, Node.JS, MySQL, HTML5 & CSS.
				</div>
				<div className='layer' style={{ zIndex: '3' }}>
					<div className='date'>
						2018.02.26 → 2018.07.27
					</div>
					5 month of intensive JavaScript & React development course at <a href='https://wildcodeschool.fr/' target='_blank' rel='noopener noreferrer'>Wild Code School Paris</a>.
				</div>
				<div className='layer' style={{ zIndex: '2' }}>
					<div className='date'>
						2017.07.01 → 2017.11.30
					</div>
					Graphic & Webdesigner intern at <a href='https://bleed.com/' target='_blank' rel='noopener noreferrer'>Bleed</a> in Vienna.
				</div>
				<div className='layer' style={{ zIndex: '1' }}>
					<div className='date'>
						2017.06.25
					</div>
					Graduate with Master's Degree in Multimedia & Interactive Design at <a href='https://multimedia-sorbonne.com/accueil/' target='_blank' rel='noopener noreferrer'>La Sorbonne</a> in Paris.
				</div>
				<div className='layer curriculum'>
					Want to know more ? See my <a href='/img/cv-marie-malarme-03-2018-en.pdf' target='_blank' rel='noopener noreferrer'>curriculum vitae</a>.
				</div>
			</div>

			<section className='contact'>
				<h2>
					<span>Let's do cool stuff !</span>
					<br/>
					<br/>
					malarmemarie@gmail.com
					<br/>
					+33 6 08 76 73 32
					<br/>
					& I'm also on <a href='https://www.linkedin.com/in/marie-malarme/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
				</h2>
			</section>

		</div>
	)
}

export default Homepage