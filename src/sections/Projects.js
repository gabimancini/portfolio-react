// Components
import SectionTitles from "../components/SectionTitles";
import ProjectsGallery from "../components/ProjectsGallery";
// Images
import TellabProject from "../assets/porjects/tellab.png";
import PetRoomProject from "../assets/porjects/petRoom.png";
import UnicornProject from "../assets/porjects/unicorn.png";
import AngelsProject from "../assets/porjects/lightOfAngels.png";
import KobbeProject from "../assets/porjects/kobbe.png";
import DaisyShopProject from "../assets/porjects/daisyShop.png";

const Projects = () => {
    const firstWordTitle = "My";
    const title = " Projects";
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
            href: 'https://lightofangels.org/',
            src: AngelsProject,
            alt: "Light of Angels"
        },
        {
            href: 'https://kobbe.com.ar/',
            src: KobbeProject,
            alt: "Kobbe"
        },
        {
            href: 'https://daisy-store-online.com/',
            src: DaisyShopProject,
            alt: "Daisy Shop"
        }
    ]
    return (
        <section id="myProjects">
            <div className="container text-center">
                <SectionTitles firstWordTitle={firstWordTitle} title={title} description={description} />
                <div className="grid grid-cols-3 gap-6 items-center md:bg-projects-pattern  bg-no-repeat bg-projectsPosition">
                    {images.map(image => (
                        <ProjectsGallery key={image.alt} src={image.src} alt={image.alt} href={image.href} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;