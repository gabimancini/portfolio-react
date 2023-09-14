// Components
import SectionTitles from "../components/SectionTitles";
import ProjectsGallery from "../components/ProjectsGallery";
// Images
import TellabProject from "../assets/porjects/tellab.png";
import PetRoomProject from "../assets/porjects/petRoom.png";
import UnicornProject from "../assets/porjects/unicorn.png";
import AleRittaProject from "../assets/porjects/aleRitta.png";
import HometownProject from "../assets/porjects/hometown.png";
import DevMagisterProject from "../assets/porjects/devmagister.png";

const Projects = ({title}) => {
    let main = "Projects";
    let secondary = "Some ";
    title = <>{secondary}<span className="text-darkMagenta">{main}</span></>;
    const description = 'My portfolio showcases a diverse range of successful web projects.'
    const images = [
        {
            href: 'https://www.tellab.org/',
            src: TellabProject,
            alt: "Tellab"
        },
        {
            href: 'https://petroom.store/',
            src: PetRoomProject,
            alt: "Pet Room"
        },
        {
            href: 'https://www.unicornconstruction.com/',
            src: UnicornProject,
            alt: "Unicorn"
        },
        {
            href: 'https://alejandro-ritta.com/',
            src: AleRittaProject,
            alt: "Alejandro Ritta diseñador"
        },
        {
            href: 'https://www.hometowndemolitioncontractors.com/',
            src: HometownProject,
            alt: "Hometown Demolition"
        },
        {
            href: 'https://devmagister.com/',
            src: DevMagisterProject,
            alt: "Devmagister"
        }
    ]
    return (
        <section id="myProjects">
            <div className="container text-center bg-projects-pattern  bg-no-repeat bg-projectsPosition">
                <SectionTitles title={title} description={description} />
                <div className="grid grid-cols-3 gap-6 items-center">
                    {images.map(image => (
                        <ProjectsGallery key={image.alt} src={image.src} alt={image.alt} href={image.href} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;