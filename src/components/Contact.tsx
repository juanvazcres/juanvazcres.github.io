import SectionTitle from './SectionTitle'

function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container fade-up">
                <div className="contact-panel">
                    <SectionTitle
                        eyebrow="Contacto"
                        title="Hablemos"
                        subtitle="Estoy abierto a oportunidades en desarrollo frontend y fullstack, especialmente en proyectos donde pueda aportar en interfaces, integración técnica y resolución de problemas reales."
                    />

                    <div className="contact-actions">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-link"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-link"
                        >
                            LinkedIn
                        </a>

                        <a href="mailto:tu-correo@ejemplo.com" className="contact-link">
                            Email
                        </a>

                        <a href="/cv.pdf" target="_blank" rel="noreferrer" className="contact-link">
                            CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact