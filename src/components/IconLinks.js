// Component
import Links from "./Links";
// Icons 
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {FaYoutubeSquare} from 'react-icons/fa';

const IconLinks = () => {
    const socialIcons = [
        {
            id: 10,
            reactIcon: <FaLinkedin className="text-3xl ml-4"/>,
            href: 'https://www.linkedin.com/in/gabrielamancini/'
        },
        {
            id: 14,
            reactIcon: <FaInstagramSquare className="text-3xl ml-4"/>,
            href: 'https://www.instagram.com/devmagister/?hl=es-la'
        },
        {
            id: 12,
            reactIcon: <FaGithubSquare className="text-3xl ml-4"/>,
            href: 'https://github.com/gabimancini'
        },
        {
            id: 13,
            reactIcon: <FaYoutubeSquare className="text-3xl ml-4"/>,
            href: 'https://www.youtube.com/@devmagister/'
        },
    ]

    return (
        <ul className="flex pt-8">
            {
                socialIcons.map((icon) => {
                    return (
                        <Links key={icon.id} href={icon.href} target='_blank' rel="noreferrer" className="text-3xl">
                          { icon.reactIcon}
                        </Links>
                    )

                })
            }
        </ul>
    )
}

export default IconLinks;