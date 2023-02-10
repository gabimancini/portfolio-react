const SectionTitles = ({ firstWordTitle, title, description }) => {
    return (
        <>
            <h2 className='text-h2 mb-8' ><span className="firstWordTitle pb-1.5">{firstWordTitle}</span>{title}</h2>
            { description && <p className='text-center text-darkGray  max-w-xl mx-auto mb-20'>{description}</p> }
        </>
    )
}

export default SectionTitles;