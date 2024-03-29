// Components
import Button from '../components/Button';
// Image
import HeroImg from '../assets/hero.png';

const Hero = () => {
    return (
        <section className='bg-hero-pattern2 bg-no-repeat bg-hero2Position bg-contain'>
            <div className="container flex flex-col items-center lg:flex-row">
                <div className=" flex flex-col text-center pt-16 lg:w-7/12 lg:justify-between lg:pr-2 lg:text-left">
                    <h3 className='text-h3 mb-4 font-satoshiLight'> Hello, There</h3>
                    <h1 className="font-satoshiBlack text-h1Sm lg:text-h1 ">
                    My name is <span className='text-darkMagenta'> Gabriela Mancini</span>
                    </h1>
                    <h2 className="mt-4 mb-16 text-h3">Frontend Developer & Teacher</h2>
                    <Button href="#contactMe" children='Get in Touch' className='btn-primary md:mx-auto lg:mx-0'/>
                </div>
                <div className="flex justify-center bg-hero-pattern bg-contain bg-no-repeat bg-center  lg:self-end">
                    <img src={HeroImg} alt="Me thinking" className='mt-10 max-w-heroImgSm lg:max-w-heroImg' />
                </div>
            </div>
        </section>
    )
}

export default Hero;