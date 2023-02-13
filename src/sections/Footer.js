// Components
import InternalLinks from '../components/InternalLinks';
import IconLinks from '../components/IconLinks';
import ExternalLinks from '../components/ExternalLinks';

const Footer = () => {
    return (
        <footer className='bg-darkViolet text-footer'>
            <div className="container grid md:grid-cols-3 gap-10">
                <div className='md:mx-auto'>
                    <h2 className='text-h2 mb-4'>Gabriela Mancini</h2>
                    <p>My passion for problem-solving and attention to detail has earned me a reputation as a reliable and skilled web developer, consistently delivering projects on time and to a high standard</p>
                </div>
                <div className='md:mx-auto'>
                    <h3 className='text-h3 mb-8'>Pages</h3>
                    <InternalLinks className='grid grid-cols-1 leading-10' />
                    <ExternalLinks />
                </div>
                <div className='md:mx-auto'>
                    <h3 className='text-h3'>Follow Me</h3>
                    <IconLinks className='invert w-10 mr-6' />
                    <h3 className='text-h3 mt-6'>Contact Me</h3>
                    <a href='mailto:gabimancinir@gmail.com'>gabimancinir@gmail.com</a>
                </div>
            </div>
            <div className="flex justify-center bg-white p3 text-black">
                <p className='pr-5'>Designed by - Alejandro Ritta </p><p className='pl-5'>Developed by - Gabriela Mancini</p>
            </div>
        </footer>
    )
}

export default Footer;