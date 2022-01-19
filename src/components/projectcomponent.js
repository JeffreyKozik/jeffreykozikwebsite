import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './homepage.css';
import PropTypes from 'prop-types';

// <html>
//   <head>
//       <link
//       rel="stylesheet"
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
//       integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
//       crossOrigin="anonymous"
//       />
//   </head>
//   <body>
//       <a href={link}>
//           <div className="card mb-3" style="max-width: 540px;">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img src={imagePath} className="img-fluid rounded-start" alt="..."/>
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h5 className="card-title">{name}</h5>
//                   <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//       </a>
//   </body>
// </html>

function ProjectComponent({ name, link, tags, startDate, endDate, imagePath }) {
  return(
      <a href={link}>
          <div className="project_container">
            <img src={imagePath} className="image_column"/>
            <div className="words_column">
                <h1>{name}</h1>
                <h2>{startDate}-{endDate}</h2>
                <h3>{tags}</h3>
            </div>
          </div>
      </a>
  )
}
ProjectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired
}

export default ProjectComponent;
