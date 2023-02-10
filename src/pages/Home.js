// Sections
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Quotes from '../sections/Quotes';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <section id="about" className='container grid md:grid-cols-2 gap-20'>
                <About />
                <Skills />
            </section>
            <Services />
            <Projects />
            <Quotes />
            <Contact />
        </>
    )
}

export default Home;