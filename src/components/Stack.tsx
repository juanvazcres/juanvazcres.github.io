import { stackGroups } from '../data/stack'
import SectionTitle from './SectionTitle'

function Stack() {
    return (
        <section id="stack" className="section section-alt">
            <div className="container fade-up">
                <SectionTitle
                    eyebrow="Tecnologías"
                    title="Stack tecnológico"
                    subtitle="Herramientas y áreas donde me siento más sólido para construir productos web modernos."
                />

                <div className="stack-grid">
                    {stackGroups.map((group) => (
                        <article key={group.title} className="glass-card stack-card">
                            <h3>{group.title}</h3>
                            <div className="tag-cloud">
                                {group.items.map((item) => (
                                    <span key={item} className="tag">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stack