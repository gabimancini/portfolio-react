const ProjectsGallery = ({ href, src, alt }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <img src={src} alt={alt} />
        </a>
    )
}

export default ProjectsGallery;