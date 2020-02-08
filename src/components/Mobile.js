import React from 'react'

const Mobile = ({ emptyCanvas }) => (
  <div className="mobilePage">
    {emptyCanvas && <div className="emoji">👆</div>}
    <h1>
      Marie Malarme
      <br />
      <span>
        Graphic designer
        <br />& Creative developer
      </span>
    </h1>
    <div>
      <p>
        Currently in Lisbon
        <br />
        malarmemarie@gmail.com
        <br />
        +33 6 08 76 72 32
      </p>
      <p className="advice">
        To see my portfolio & experience, please switch to a wider device !
      </p>
    </div>
  </div>
)

export default Mobile

// const mobilePage = (
//   <div className="mobilePage">
//     {modale}
//     <section
//       className="emojiContainer"
//       style={{ width: '70vw', margin: '65vh 0 40vh 25vw', zIndex: '-10' }}
//     >
//       <div className="emoji rotating">&#9757;</div>
//     </section>
//     <section className="intro">
//       <div
//         style={{
//           fontSize: '3.3rem',
//           fontFamily: 'Akkurat',
//           lineHeight: '4.5rem',
//           color: 'green',
//           fontWeight: '100',
//         }}
//       >
//         <span
//           style={{
//             color: 'black',
//             fontSize: '3.6rem',
//             fontFamily: 'AkkuratMono',
//           }}
//         >
//           Marie Malarme
//         </span>
//         <br />
//         <div style={{ marginTop: '1.5rem' }}>
//           Graphic designer & Creative developer
//         </div>
//       </div>
//     </section>

//     <br />

//     <section
//       style={{
//         marginTop: '100vh',
//         position: 'sticky',
//         backgroundColor: '#232323',
//         color: 'white',
//         padding: '3rem',
//         fontFamily: 'Akkurat',
//         fontSize: '2.5rem',
//         fontWeight: '200',
//         lineHeight: '3.5rem',
//       }}
//     >
//       Hello ! I'm a french <span className="underlined">graphic designer</span>{' '}
//       who loves to <span className="underlined">explore & create</span> with
//       technology.
//     </section>

//     <section className="flex">
//       <div className="ambianceVisual" style={{ height: '50vh' }} />
//     </section>

//     <section>
//       <div
//         style={{
//           padding: '3rem',
//           backgroundColor: '#182182',
//           color: '#ededed',
//           fontFamily: 'Akkurat',
//           fontSize: '2.5rem',
//           fontWeight: '200',
//           lineHeight: '3.5rem',
//         }}
//       >
//         I'm currently working in Lisbon on an exciting{' '}
//         <span className="mono">pedagogic software project</span> to learn
//         Programming to people, but I'm always interested in taking part to{' '}
//         <span className="mono">great projects</span> of any kind to explore
//         further directions.
//       </div>
//     </section>

//     <section
//       style={{
//         position: 'relative',
//         boxShadow: '0px 0px 50px 0 rgba(0,0,0,0.35)',
//         zIndex: '5',
//       }}
//     >
//       <Link to={projects[0].id}>
//         <div
//           style={{
//             width: '100vw',
//             height: '40vh',
//             background: `center / cover no-repeat url(${
//               projects[0].thumbnailImage
//             })`,
//           }}
//         />
//       </Link>
//       <div
//         style={{
//           marginTop: '-1px',
//           backgroundColor: 'white',
//           color: '#FCCF67',
//           width: 'calc(100vw - 6rem)',
//           padding: '1rem 3rem 1rem 3rem',
//           fontFamily: 'AkkuratMono',
//           textAlign: 'center',
//           fontSize: '1rem',
//           fontWeight: '200',
//           lineHeight: '1.5rem',
//         }}
//       >
//         Tap to take a look at my last published project !
//       </div>
//     </section>

//     <section
//       style={{
//         position: 'relative',
//         marginTop: '-2px',
//         fontFamily: 'Akkurat',
//         fontSize: '2.5rem',
//         fontWeight: '200',
//         lineHeight: '3.5rem',
//         backgroundColor: '#f2f2f2',
//         color: '#6900bf',
//         width: 'calc(100vw - 6rem)',
//         padding: '3rem',
//       }}
//     >
//       But please visit my website on a tablet or desktop device to see all my
//       projects, detailed skills and recent activity !
//     </section>

//     <section className="flex">
//       <div
//         className="ambianceVisual"
//         style={{ height: '60vh', filter: 'hue-rotate(30deg)' }}
//       />
//     </section>

//     <section className="contact">
//       <h2>
//         <span>Let's do cool stuff !</span>
//         <br />
//         <br />
//         <div style={{ marginTop: '1.5rem', lineHeight: '2.5rem' }}>
//           malarmemarie@ gmail.com
//         </div>
//         <div style={{ marginTop: '1.5rem' }}>+33 6 08 76 73 32</div>
//         <div style={{ marginTop: '1.5rem', lineHeight: '2.5rem' }}>
//           & I'm also on{' '}
//           <a
//             href="https://www.linkedin.com/in/marie-malarme/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             LinkedIn
//           </a>
//           .
//         </div>
//       </h2>
//     </section>
//   </div>
// )
