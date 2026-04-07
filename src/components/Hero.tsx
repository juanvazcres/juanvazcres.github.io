function Hero() {
    return (
        <section id="home" className="hero section">
            <div className="container hero-grid">
                <div className="fade-up delay-1">
                    <p className="eyebrow">Frontend / Fullstack Developer</p>
                    <h1>Construyo aplicaciones web útiles y técnicamente sólidas.</h1>

                    <p className="hero-text">
                        Desarrollo interfaces modernas, integraciones backend y soluciones
                        web conectadas con datos en tiempo real, mapas y flujos operativos
                        complejos.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            Ver proyectos
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contacto
                        </a>
                    </div>

                    <div className="hero-pills">
                        <span className="tag">React</span>
                        <span className="tag">TypeScript</span>
                        <span className="tag">Node.js</span>
                        <span className="tag">Docker</span>
                        <span className="tag">Cesium</span>
                    </div>
                </div>

                <div className="hero-panel fade-up delay-2">
                    <div className="profile-card">
                        <div className="profile-avatar">JV</div>
                        <div>
                            <p className="profile-label">Enfoque</p>
                            <h3>Frontend y Fullstack con visión operativa</h3>
                        </div>
                        <p className="profile-text">
                            Me especializo en construir software web claro, mantenible y útil
                            para escenarios reales: monitoreo, visualización de datos,
                            geoespacial, automatización e integración de sistemas.
                        </p>
                    </div>

                    <div className="stats-grid">
                        <article className="stat-card">
                            <span className="stat-number">React</span>
                            <span className="stat-label">UI moderna</span>
                        </article>
                        <article className="stat-card">
                            <span className="stat-number">Node.js</span>
                            <span className="stat-label">Integración backend</span>
                        </article>
                        <article className="stat-card">
                            <span className="stat-number">Tiempo real</span>
                            <span className="stat-label">Sockets y eventos</span>
                        </article>
                        <article className="stat-card">
                            <span className="stat-number">Cesium</span>
                            <span className="stat-label">Visualización 3D</span>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero