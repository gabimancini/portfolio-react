// Component
import SectionTitles from "../components/SectionTitles";

const About = () => {
    const firstWordTitle = 'About';
    const title = ' Me';
    return (
        <section id="about">
         <div className=" container">
            <SectionTitles title={title} firstWordTitle={firstWordTitle} />
            <div className="text-darkGray leading-8">
            <p>I find myself working on what I like the most: coding, teaching and writing.</p>
               <p> Web developer with 5 years of experience in developing user interfaces.</p>
               <p> Teaching for over 15 years with IT educational degree. </p>
               <p> Enjoying the act of writing even since I can remember.</p>
               <p> Interesting info about me? I can not flip a pancake without a spatula, but... I can knit a scarf in one day.
            </p>
            </div>
            <p className="mt-8 bold">
                Gabriela Mancini
            </p>
        </div>
        </section>
    )
}

export default About;