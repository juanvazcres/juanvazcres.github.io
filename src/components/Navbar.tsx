import { useEffect, useState } from 'react'

const navItems = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 16)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const closeOnResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false)
            }
        }

        window.addEventListener('resize', closeOnResize)
        return () => window.removeEventListener('resize', closeOnResize)
    }, [])

    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#home" className="logo">
                    Juan Vázquez
                </a>

                <nav className="nav nav-desktop" aria-label="Navegación principal">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div
                id="mobile-menu"
                className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}
            >
                <nav className="mobile-nav" aria-label="Navegación móvil">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} onClick={handleLinkClick}>
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Navbar