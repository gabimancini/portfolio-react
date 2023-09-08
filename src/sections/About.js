// Component
import SectionTitles from "../components/SectionTitles";
import AboutImg from './../assets/aboutFoto.svg';
const About = ({ title }) => {
    let main = "About ";
    let secondary = "me";
    title = <><span className="text-darkMagenta">{main}</span>{secondary}</>;

    return (
        <section id="about">
            <div className="container py-[24px]">
                <SectionTitles title={title} />
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="order-1 mt-[29px] md:mt-0 md:order-[0]">
                        <img src={AboutImg} alt="Profile" />
                    </div>
                    <div className="text-darkGray leading-8 md:pl-20">
                        <div><p className="font-bold mb-8 text-center md:text-left">Developer <span className="text-darkMagenta">Gabriela Mancini </span> Wins Third Toptal Scholarship  </p></div>
                        <p>I find myself working on what I like the most: coding, teaching and writing.</p>
                        <p> Web developer with 5 years of experience in developing user interfaces.</p>
                        <p> Teaching for over 15 years with IT educational degree. </p>
                        <p> Enjoying the act of writing even since I can remember.</p>
                        <p> Interesting info about me? I can not flip a pancake without a spatula, but... I can knit a scarf in one day.
                        </p>
                        <p className="mt-8 font-bold">
                            Gabriela Mancini
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;