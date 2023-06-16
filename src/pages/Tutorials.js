// Components
import Button from '../components/Button';
const Tutorials = () => {
    let videoID = [
        {
            id: "Y982SlCaLpU",
            title: "De qué theme sos?"
        },
        {
            id: "Iwy8o-hqJ-c",
            title: "Un modal a puro CSS?"
        },
        {
            id: "I3fY9nectuA",
            title: "Anchor, Input o Button?."
        },
        {
            id: "lO69-EAKrtA",
            title: "Cómo centrar un texto con CSS"
        },
        {
            id: "9qpi7hf7HRk",
            title: "Entender flexbox rápido y fácil"
        },
        {
            id: "GRGfDsjlib0",
            title: "Cómo Personalizar Radio y Checkbox."
        },
        {
            id: "sFNdJCJM-Wc",
            title: "Cómo dominar la propiedad display."
        },
        {
            id: "OYeRGkVy1bY",
            title: "Seguís usando for()?"
        },
        {
            id: "w2IoGtXH39U",
            title: "Sabés cómo usar useState?"
        },
        {
            id: "JFSDdiXmFn8",
            title: "Sabés cómo usar useEffect?"
        },
        {
            id: "esRytpe43Rg",
            title: "No los dejemos afuera."
        },
      
    ]

    let videos = {
        width: "275",
        height: "150",
        src: `https://www.youtube-nocookie.com/embed/`,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      
    }
    return <section>
        <div className="container flex flex-col md:flex-row sm:items-center md:items-stretch">
            <div className="flex flex-col md:w-6/12 items-center md:justify-between p-6 sm:items-center md:items-start ">
                <h2 className='text-3xl mb-6 '>HTML intensivo para principiantes</h2>
                <p >Si estás entrando en el mundo del desarrollo web,  seguramente la palabra HTML te habrá aparecido en tus búsquedas.</p>
                <p> En este video conocerás los conceptos básicos de HTML y será el puntapié para seguir explorando y profundizando sobre este lenguaje de maquetación.💪😁.</p>
                <Button href="https://www.youtube.com/channel/UC5r4oV_i4-Ydta_OJkPq50g" children='Visit my Channel' className='btn-primary mt-6 md:mx-auto lg:mx-0' target="_blank" />

            </div>
            <div className=' md:w-6/12 '>
            <iframe className="border-b-8 border-amber-500 border-solid h-52 w-full md:h-full" src="https://www.youtube.com/embed/M7oGJYKDV38" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
        
        <div className="container flex flex-wrap lg:flex-row gap-x-5 gap-y-5  justify-center md:justify-start">
            {videoID.map((video) => {
                return (
                    <div className="flex flex-col justify-between my-4 border-b-4 border-amber-500 border-solid" key = { video.id }>
                        <iframe width={videos.width} height={videos.height} src={videos.src + video.id} frameBorder="0" allowFullScreen title="Youtube video"></iframe>
                        <h3 className="max-w-videoTitle py-2 text-xs">{video.title}</h3>
                    </div>
                )
            })}

        </div>
    </section>
}
export default Tutorials