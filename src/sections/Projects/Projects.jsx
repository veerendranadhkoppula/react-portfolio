import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import blog from'../../assets/blog.png';
import spotify from '../../assets/exa.jpg';
import ecommerce from '../../assets/ecommerce.png';
import network from '../../assets/network.png';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={network}
          link="https://github.com/veerendranadhkoppula/SOCIALMEDIA_SITE_PROJECT"
          h3="Social-media-site"
          p="Developed using Django backend"
        />
        <ProjectCard
          src={blog}
          link="https://github.com/veerendranadhkoppula/Blog_project"
          h3="Blog_Website"
          p="Developed using Django backend"
        />
        <ProjectCard
          src={ecommerce}
          link="https://e-commerce-react-website-chi.vercel.app/"
          h3="E-Commerce Site"
          p="Developed using React frontend"
        />
        <ProjectCard
          src={spotify}
          link="https://spotifyreactfrontend.netlify.app/"
          h3="Soptify-frontend"
          p="Developed using React frontend"
        />
      </div>
    </section>
  );
}

export default Projects;