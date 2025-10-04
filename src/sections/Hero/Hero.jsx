import React from 'react';
import styles from './HeroStyles.module.css';
import veer from '../../assets/veer.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={veer}
          className={styles.hero}
          alt="Veerendranadh profile"
        />
        <button
          className={styles.colorMode}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <img
            src={themeIcon}
            alt={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          />
        </button>
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>
          Veerendranadh
          <br />
          Koppula
        </h1>
        <h2 className={styles.title}>"Next.js / React Frontend"</h2>
        <h2 className={styles.title}>"Payload & Django Backend"</h2>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/veerendranadhkoppula"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/veerendranadh-koppula-81bb58226/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        <p className={styles.description}>
         💡 Crafting modern, lightning-fast websites with Next.js, React, and Payload CMS. <br />
⚡ Blending design and performance to deliver web experiences that convert.<br />
🔗 Available for freelance projects & collaborations worldwide.
        </p>
        <a href = "https://drive.google.com/file/d/1FHj8vlWN8NBCpXOBbDUN0MtzZwZdmc7a/view?usp=drivesdk" view>
          <button className={styles.resumeButton}>"Resume"</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
