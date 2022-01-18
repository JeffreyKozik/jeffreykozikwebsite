import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './homepage.css';
import PropTypes from 'prop-types';

function ProjectComponent({ name, link, tags, startDate, endDate, imagePath }) {
  return(
      <>
        <div> {name} {link} {tags} {startDate} {endDate} {imagePath}</div>
      </>
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
