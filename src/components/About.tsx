import SectionTitle from './SectionTitle'

function About() {
    return (
        <section id="about" className="section">
            <div className="container fade-up">
                <SectionTitle
                    eyebrow="Perfil"
                    title="Sobre mí"
                    subtitle="Desarrollo aplicaciones web funcionales, claras y mantenibles, con especial interés en problemas donde la web se conecta con mapas, datos en tiempo real, procesos del sistema o flujos operativos complejos."
                />

                <div className="about-grid">
                    <article className="glass-card">
                        <h3>Qué hago</h3>
                        <p>
                            Trabajo principalmente con React, TypeScript y Node.js para crear
                            productos web con foco en experiencia de usuario, estructura
                            técnica limpia y capacidad de evolución.
                        </p>
                    </article>

                    <article className="glass-card">
                        <h3>Cómo pienso</h3>
                        <p>
                            Me interesa que una solución no solo funcione, sino que sea
                            cómoda de operar, fácil de mantener y útil para las personas que
                            la usan día a día.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About