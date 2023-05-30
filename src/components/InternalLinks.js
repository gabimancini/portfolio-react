// Component
import Links from "./Links";

// Data
import {internalLinks} from '../data/dataLinks';

const InternalLinks = ({className}) => {
    const isFooter = true;

    return (
        <ul className={className}>
            {
                isFooter ?
                internalLinks.map((link) => (
                    <Links key={link.id} children={link.text} href={link.href} download={link.download} />
        )) 
            :
                internalLinks.map((link) => (
                    <Links key={link.id} children={link.text} href={link.href} download={link.download} />
        ))
            }
        </ul>
    )
}

export default InternalLinks;