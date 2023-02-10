const CardServices = ({ icon, title, description,alt, ...rest }) => {
    return (
        <div className='grid-cols-[auto, 1fr] service-cards'>
                <img src={icon} alt={alt} {...rest} className='w-14'/>
                <h2 className='text-h3 pl-4 leading-12 text-left'>{title}</h2>
            <p className='text-darkGray col-start-2 text-left'>{description}</p>
        </div>
    )
}

export default CardServices;