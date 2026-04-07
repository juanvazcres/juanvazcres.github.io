import { projects } from '../data/projects'
import SectionTitle from './SectionTitle'

function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container fade-up">
                <SectionTitle
                    eyebrow="Trabajo"
                    title="Proyectos destacados"
                    subtitle="Una selección de proyectos que muestran mi enfoque en frontend sólido, integración técnica y resolución de problemas reales."
                />

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className={`project-card-pro ${project.featured ? 'featured' : ''}`}
                        >
                            <div className="project-media">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="project-placeholder">Proyecto</div>
                                )}
                            </div>

                            <div className="project-body">
                                <div className="project-topline">
                                    <h3>{project.title}</h3>
                                    {project.featured ? (
                                        <span className="project-badge">Destacado</span>
                                    ) : null}
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="tag-cloud">
                                    {project.stack.map((item) => (
                                        <span key={item} className="tag">
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <p className="project-contribution">
                                    <strong>Mi aporte:</strong> {project.contribution}
                                </p>

                                <div className="project-actions">
                                    <a href={project.demo} className="btn btn-secondary">
                                        Demo
                                    </a>
                                    <a href={project.repo} className="btn btn-primary">
                                        Código
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects