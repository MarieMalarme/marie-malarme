import React from 'react'
import ArrowBack from 'react-icons/lib/io/android-arrow-back'
import ArrowNext from 'react-icons/lib/io/android-arrow-forward'
import Modale from './Modale.js'
import Project from './Project.js'
import projects from './projects.json'
import { Link } from '@reach/router'

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
		<React.Fragment>

		<div className='mobilePage'>
		{modale}
			<section className='emojiContainer' style={{ width: '70vw', margin: '65vh 0 40vh 25vw', zIndex: '-10' }} >
				<div className='emoji rotating'>
					&#9757;
				</div>
			</section>
			<section className='intro'>
				<div style={{ fontSize: '3.3rem', fontFamily: 'Akkurat', lineHeight: '4.5rem', color: 'green', fontWeight: '100' }} >
					<span style={{ color: 'black', fontSize: '3.6rem', fontFamily: 'AkkuratMono' }}>
						Marie Malarme
					</span>
					<br/>
					<div style={{ marginTop: '1.5rem' }}>
						Graphic designer
						& Creative developer
					</div>
				</div>
			</section>

			<br/>

			<section style={{ marginTop: '100vh', position: 'sticky', backgroundColor: '#232323', color: 'white', padding: '3rem', fontFamily: 'Akkurat', fontSize: '2.5rem', fontWeight: '200', lineHeight: '3.5rem' }}>
				Hello ! I'm a french <span className='underlined'>graphic designer</span> who loves to <span className='underlined'>explore & create</span> with technology.
			</section>

			<section className='flex'>
				<div className='ambianceVisual' style={{ height: '50vh' }} >
				</div>
			</section>

		<section>
			<div style={{ padding: '3rem', backgroundColor: '#182182', color: '#ededed', fontFamily: 'Akkurat', fontSize: '2.5rem', fontWeight: '200', lineHeight: '3.5rem' }} >
					I'm currently working in Madeira on an exciting <span className='mono'>pedagogic software project</span> to learn Programming to people, but I'm always interested in taking part to <span className='mono'>great projects</span> of any kind to explore further directions.
			</div>
		</section>

		<section style={{position: 'relative', boxShadow: '0px 0px 50px 0 rgba(0,0,0,0.35)', zIndex: '5'}}>
			<Link to={projects[0].id}>
				<div style={{ width: '100vw', height: '40vh', background: `center / cover no-repeat url(${projects[0].thumbnailImage})` }} />
			</Link>
			<div style={{marginTop: '-1px', backgroundColor: 'white', color: '#FCCF67', width: 'calc(100vw - 6rem)', padding: '1rem 3rem 1rem 3rem', fontFamily: 'AkkuratMono', textAlign: 'center', fontSize: '1rem', fontWeight: '200', lineHeight: '1.5rem' }}>
				Tap to take a look at my last published project !
			</div>
		</section>

		<section style={{position: 'relative', marginTop: '-2px', fontFamily: 'Akkurat', fontSize: '2.5rem', fontWeight: '200', lineHeight: '3.5rem', backgroundColor: '#f2f2f2', color: '#6900bf', width: 'calc(100vw - 6rem)', padding: '3rem' }} >
			But please visit my website on a tablet or desktop device to see all my projects, detailed skills and recent activity !
		</section>

		<section className='flex'>
			<div className='ambianceVisual' style={{ height: '60vh', filter: 'hue-rotate(30deg)' }} >
			</div>
		</section>

		<section className='contact'>
			<h2>
				<span>Let's do cool stuff !</span>
				<br/>
				<br/>
				<div style={{ marginTop: '1.5rem', lineHeight: '2.5rem' }}>malarmemarie@ gmail.com</div>
				<div style={{ marginTop: '1.5rem' }}>+33 6 08 76 73 32</div>
				<div style={{ marginTop: '1.5rem', lineHeight: '2.5rem' }}>& I'm also on{' '}
					<a href='https://www.linkedin.com/in/marie-malarme/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
				</div>
			</h2>
		</section>
	</div>



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
				<a href='https://atelier-rusch.com' target='_blank' rel='noopener noreferrer'>
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

			<section className='current flex'>
				<a className='github' href='https://github.com/MarieMalarme' target='_blank' rel='noopener noreferrer'>
					<p>Check my</p>
					<div className='githubSmiley'>
						&#9787;
					</div>
					<p>Github</p>
				</a>
				<div className='currentActivity'>
					<h2>
						I'm currently working in Madeira on an exciting <span className='mono'>pedagogic software project</span> to learn Programming to people, but I'm always interested in taking part to <span className='mono'>great projects</span> of any kind to explore further directions.
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
				<div className='layer' style={{ zIndex: '5' }}>
					<div className='date'>
						2018.11.15
					</div>
					Started to work in Madeira as Graphic/UI/UX Designer and React Developer for a pedagogic software to learn Programming to people.
				</div>
				<div className='layer' style={{ zIndex: '4' }}>
					<div className='date'>
						2018.07.27
					</div>
					Release of the <a href='https://atelier-rusch.com/' target='_blank' rel='noopener noreferrer'>Atelier Rusch</a> website and back-office, developed with React Javascript, Redux, Node.JS, MySQL, HTML5 & CSS.
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
		</React.Fragment>
	)
}

export default Homepage