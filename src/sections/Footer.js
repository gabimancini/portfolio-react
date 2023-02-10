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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu.</p>
                </div>
                <div className='md:mx-auto'>
                    <h3 className='text-h3 mb-8'>Pages</h3>
                    <InternalLinks className='grid grid-cols-1 leading-10'/>
                    <ExternalLinks />
                </div>
                <div className='md:mx-auto'>
                    <h3 className='text-h3 mb-4'>Follow Me</h3>
                    <IconLinks className='social-icons invert'/>
                    <h3 className='text-h3 mt-6'>Contact Me</h3>
                    <a href='mailto:gabimancinir@gmail.com'>gabimancinir@gmail.com</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;