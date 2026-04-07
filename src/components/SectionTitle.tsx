interface SectionTitleProps {
    eyebrow?: string
    title: string
    subtitle?: string
}

function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
    return (
        <div className="section-header">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2>{title}</h2>
            {subtitle ? <p className="section-text">{subtitle}</p> : null}
        </div>
    )
}

export default SectionTitle