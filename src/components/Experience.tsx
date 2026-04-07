import SectionTitle from './SectionTitle'

function Experience() {
    return (
        <section id="experience" className="section section-alt">
            <div className="container fade-up">
                <SectionTitle
                    eyebrow="Fortalezas"
                    title="Experiencia y enfoque"
                    subtitle="Combino desarrollo frontend con integración fullstack y experiencia en escenarios donde la web interactúa con servicios, procesos del sistema, mapas o eventos en tiempo real."
                />

                <div className="experience-grid">
                    <article className="glass-card">
                        <h3>Lo técnico</h3>
                        <ul className="simple-list">
                            <li>Interfaces con React y TypeScript</li>
                            <li>Integración backend con Node.js y APIs REST</li>
                            <li>Visualización geoespacial y datos dinámicos</li>
                            <li>Interfaces en tiempo real con sockets</li>
                        </ul>
                    </article>

                    <article className="glass-card">
                        <h3>Lo que aporto</h3>
                        <ul className="simple-list">
                            <li>Software útil y mantenible</li>
                            <li>Interfaces claras para usuarios reales</li>
                            <li>Resolución de problemas técnicos complejos</li>
                            <li>Bases sólidas para escalar producto</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Experience