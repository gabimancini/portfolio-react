// Component
import Links from "./Links";
// Icons
import LinkedinBlack from '../assets/icons/linkedin-black.svg';
import GithubBlack from '../assets/icons/github-black.svg';
import YoutubeBlack from '../assets/icons/youtube-black.svg';
import InstagramBlack from '../assets/icons/instagram-black.svg';

const IconLinks = ({className}) => {
    const socialIcons = [
        {
            id: 10,
            src: LinkedinBlack,
            alt: 'Linkedin',
            href: 'https://www.linkedin.com/in/gabrielamancini/'
        },
        {
            id: 12,
            src: GithubBlack,
            alt: 'Github',
            href: 'https://github.com/gabimancini'
        },
        {
            id: 13,
            src: YoutubeBlack,
            alt: 'Youtube',
            href: 'https://www.youtube.com/@devmagister/'
        },
        {
            id: 14,
            src: InstagramBlack,
            alt: 'Instagram',
            href: 'https://www.instagram.com/devmagister/?hl=es-la'
        },
    ]

    return (
        <ul className="flex pt-8">
            {
                socialIcons.map((icon) => {
                    return (
                        <Links key={icon.id} href={icon.href} target='_blank' rel="noreferrer">
                            <img src={icon.src} alt={icon.alt} className={className} />
                        </Links>
                    )

                })
            }
        </ul>
    )
}

export default IconLinks;