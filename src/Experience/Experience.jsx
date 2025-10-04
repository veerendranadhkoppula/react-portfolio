import React from 'react';
import styles from './Experience.css';
import companyLogo from '../assets/jmedi.jpeg';
import code from '../assets/output-onlinegiftools (2).gif';
import codera from '../assets/output-onlinegiftools (1).gif'
const Experience = () => {
  return (
    <div id="experience" className={styles.container}>
    <section className="experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-container">
        <div className="gif-container">
        <img src={code} alt="Experience GIF" className="experience-gif" />
        </div>
        <div className="experience-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95Uf8X2dasipPNB8U0XzY1G9v9FuxniCfWg&s" alt="Company Logo" className="company-logo" />
          <div className="experience-content">
            <h3>Python Developer Intern</h3>
            <h4>Infosys | Sep 2024 – Dec 2024</h4>
            <ul>
            <li>Developed an automated tool using Python and Selenium to download daily NSE reports, enhancing data retrieval efficiency and accuracy, with robust duplicate handling mechanisms to maintain data integrity.</li>
            <li>Implemented advanced file organization, scheduling downloads, and optimizing storage, while ensuring seamless tracking and logging of project files.</li>
            </ul>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className="experience-container">
        <div className="gif-container">
          <img src={codera} alt="Experience GIF" className="experience-gif" />
        </div>
        <div className="experience-card">
          <img src={companyLogo} alt="Company Logo" className="company-logo" />
          <div className="experience-content">
            <h3>Web Developer Intern</h3>
            <h4>JMedia Corporation | June 2024 – Dec 2024</h4>
            <ul>
              <li>Developed responsive pages for JMedia Corporation’s official website, including Subscription Services and modular News Sections using React.js, HTML5, CSS3, and JavaScript.</li>
              <li>Built Music and News Updates pages for Phoenix Labs’ NOIR SOUL SYNDICATE, with seamless API integration and real-time content.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Experience;