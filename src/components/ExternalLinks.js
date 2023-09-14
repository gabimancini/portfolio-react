// Component

import Links from "./Links";
const ExternallLinks = () => {
    return (
        <ul className="flex">
                    <Links key='14' children='My Company' href='https://devmagister.com/' download='false' target='_blank' />
                    <Links key='15' children='Blog' href='https://medium.com/@gabrielamancini' download='false' target='_blank' />
        </ul>
    )
}

export default ExternallLinks;