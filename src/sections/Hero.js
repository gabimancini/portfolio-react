// Components
import Button from '../components/Button';
// Image
import HeroImg from '../assets/hero.png';

const Hero = () => {
    return (
        <section >
            <div className="container flex flex-col items-center lg:flex-row">
                <div className=" flex flex-col text-center pt-16 lg:w-1/2 lg:justify-between lg:pr-28 lg:text-left">
                    <p className='mb-10'> HELLO, THERE</p>
                    <h1 className="font-satoshiMedium  text-h1Sm lg:text-h1 ">
                    My name is Gabriela Mancini
                    </h1>
                    <h2 className="mb-12">FRONT END DEVELOPER AND TEACHER</h2>
                    <Button href="#contactMe" children='Get in Touch' className='btn-primary md:mx-auto lg:mx-0'/>
                </div>
                <div className="flex justify-center bg-hero-pattern bg-contain bg-no-repeat bg-center bg-heroPosition lg:w-1/2 lg:self-end">
                    <img src={HeroImg} alt="Me thinking" className='mt-10 max-w-heroImgSm lg:max-w-heroImg' />
                </div>
            </div>
        </section>
    )
}

export default Hero;