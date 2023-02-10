// Components
import SectionTitles from "../components/SectionTitles";
import CardServices from "../components/CardServices";
// Icons
import ResponsiveService from '../assets/icons/serviceResponsive.png';
import EcommerceService from '../assets/icons/serviceEcommerce.png';
import Service from '../assets/icons/service.png';
import DevelopmentService from '../assets/icons/serviceDevelopment.png';

const Services = () => {

    const firstWordTitle = 'My';
    const title = ' Services';
    const description = "Whether it's a custom website build or an e-commerce platform, I deliver tailored solutions to meet your unique needs."
    const Services = [{
        icon: ResponsiveService,
        title: 'Web Site Responsive',
        description: "A responsive design not only provides a better experience for your users, but also improves your search engine rankings. I offer robust and scalable e-commerce solutions, powered by the latest technologies."
    },
    {
        icon: Service,
        title: 'Mentorship',
        description: 'As a seasoned web developer, I enjoy sharing my knowledge and helping others grow in their careers. I believe in the power of mentorship and the positive impact it can have on professional development.'
    },
    {
        icon: EcommerceService,
        title: 'E-commerce Solution',
        description: "From product catalog management to secure payment processing, I provide a full suite of e-commerce services. I offer robust and scalable e-commerce solutions, powered by the latest technologies."
    },
    {
        icon: DevelopmentService,
        title: 'Web Development',
        description: "From custom web development to website maintenance and support, I provide comprehensive services to meet all your web development needs. I have a passion for creating functional websites that drive business results."
    }
    ]
    return (
        <section id="services" className='container text-center'>
            <SectionTitles firstWordTitle={firstWordTitle} title={title} description={description} />
            <div className='md:columns-2 gap-12 relative md:pt-10 md:pb-10 '>
                {
                    Services.map(card => (
                        <CardServices key={card.title} description={card.description} title={card.title} icon={card.icon} />
                    ))
                }
                <div className=" rounded-cards absolute -z-10 inset-0 m-auto bg-servicesBg w-servicesBg h-servicesBg"></div>
            </div>
        </section>
    )
}

export default Services;