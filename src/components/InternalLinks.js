// Component
import Links from "./Links";

const InternalLinks = ({className}) => {
    const internalLinks = [
        {
            id: 1,
            text: 'Home',
            href: '#hero',
            download: false
        },
        {
            id: 2,
            text: 'About',
            href: '#about',
            download: false
        }
        ,
        {
            id: 3,
            text: 'Services',
            href: '#services',
            download: false
        },
        {
            id: 4,
            text: 'My Projects',
            href: '#myProjects',
            download: false
        },
        {
            id: 5,
            text: 'Contact Me',
            href: '#contactMe',
            download: false
        },
        {
            id:6,
            text: 'Resume',
            href: '#resume',
            download: true
        }
    ]
    return (
        <ul className={className}>
            {
                internalLinks.map((link) => (
                    <Links key={link.id} children={link.text} href={link.href} download={link.download} />
                ))
            }
        </ul>
    )
}

export default InternalLinks;