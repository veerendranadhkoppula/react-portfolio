import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <img className={styles.image} src={src} alt={`${h3} logo`} />
      <h3 className={styles.title}>{h3}</h3>
      <p className={styles.description}>{p}</p>
    </a>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default ProjectCard;
