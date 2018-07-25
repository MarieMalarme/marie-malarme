import React from 'react'
import ArrowBack from 'react-icons/lib/io/android-arrow-back'
import ArrowNext from 'react-icons/lib/io/android-arrow-forward'
import Modale from './Modale.js'
import Project from './Project.js'
import projects from './projects.json'

const state = {
	projects: projects
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
				<div className='coinTitles arrows'>
					<ArrowBack className='arrow'/>
					<h5>Scroll the projects</h5>
					<ArrowNext className='arrow'/>
				</div>
			</section>

			<section className='projectsBlock'>
				<div className='projectsWrapper'>
					<div className='project'>
						<div className='projectPlaceholder'/>
					</div>
					{projectsThumbnails}
				</div>
			</section>

			<section className='skills flex'>
				<div className='skillsLeft'>
					<h2 className='skillsTitle'>I can design :</h2>
					<br/>
					<h2 className='skillsText'>
						<span className='skillsArrow'>→</span>
						Visual identities, logos, editorial content, websites, digital interfaces, animations
					</h2>
				</div>

				<div className='skillsRight'>
					<h2 className='skillsTitle'>I can develop :</h2>
					<br/>
					<h2 className='skillsText'>
						<span className='skillsArrow'>→</span>
						Front-end & back-end with JavaScript, React, Redux, Node.js, MySQL, HTML5 & CSS
					</h2>
				</div>
			</section>

			<section className='contact'>
				<h2 style={{ marginLeft: '5rem' }} className='mono'>
					Recently : 
				</h2>
				<div style={{ display: 'flex', width: '100vw', marginTop: '2rem', flexDirection: 'column' }}>
					<div style={{ width: 'calc(100vw - 20rem)', padding: '3rem 10rem', backgroundColor: '#f2f2f2', zIndex: '3', boxShadow: '0px 40px 60px 0 rgba(0,0,0,0.2)', fontFamily: 'AkkuratMono', fontSize: '1rem', lineHeight: '1.7rem',color: '#5600ad' }}>
						2018.07.27<br/>
						Release of the <a>Atelier Rusch</a> website and back-office, developed with React Javascript, Node.JS, MySQL, HTML5 & CSS.
					</div>
					<div style={{ width: 'calc(100vw - 20rem)', padding: '3rem 10rem', backgroundColor: '#f2f2f2', zIndex: '2', boxShadow: '0px 40px 60px 0 rgba(0,0,0,0.2)', fontFamily: 'AkkuratMono', fontSize: '1rem', lineHeight: '1.7rem',color: '#5600ad' }}>
						2018.02.26 → 2018.07.27<br/>
						5 month of intensive JavaScript & React development course at <a>Wild Code School Paris</a>.
					</div>
					<div style={{ width: 'calc(100vw - 20rem)', padding: '3rem 10rem', backgroundColor: '#f2f2f2', zIndex: '1', boxShadow: '0px 40px 60px 0 rgba(0,0,0,0.2)', fontFamily: 'AkkuratMono', fontSize: '1rem', lineHeight: '1.7rem',color: '#5600ad' }}>
						2017.07.01 → 2017.11.30<br/>
						Graphic & Webdesigner intern at <a>Bleed Vienna</a>.
					</div>
				</div>
			</section>

		</div>
	)
}

export default Homepage