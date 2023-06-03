// Components
import Button from '../components/Button';
const Tutorials = () => {
    let videoID = [
        {
            id: "I3fY9nectuA",
            title: "Anchor, Input o Button? Usemos correctamente."
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
            title: "Cómo Personalizar Radio y Checkbox CSS"
        },
        {
            id: "sFNdJCJM-Wc",
            title: "Cómo dominar la propiedad display CSS en menos de 10 minutos."
        },
        {
            id: "OYeRGkVy1bY",
            title: "Seguís usando for() ? Conocé los métodos map(), filter() y reduce()."
        },
        {
            id: "w2IoGtXH39U",
            title: "Sabés cómo usar useState (React Hook)?"
        },
        {
            id: "JFSDdiXmFn8",
            title: "Sabés cómo usar useEffect (React Hook)?"
        },
        {
            id: "esRytpe43Rg",
            title: "No los dejemos afuera. Reglas de accesibilidad."
        },
    ]

    let videos = {
        width: "275",
        height: "150",
        src: `https://www.youtube-nocookie.com/embed/`,
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowFullScreen: true,
    }

    return <section>
        <div className="container flex flex-col md:flex-row  sm:items-center md:items-stretch">
            <div className="flex flex-col md:w-6/12 justify-between p-6 sm:items-center md:items-start ">
                <h2 className='text-3xl'>Crea un modal a puro CSS. 😱</h2>
                <p className='text-center md:text-left'>Sabias que podemos hacer un modal a puro CSS? Sin recurrir a Javascript crearemos un modal con la funcionalidad de abrirlo y cerrarlo?  💪😁</p>
                <p className='text-center md:text-left'>Una ventana modal o modal box es un recuadro que aparece sobre la página, con la particularidad de que bloquea todas las funciones.</p>
                <p className='text-center md:text-left'>En este video aprenderás a hacerlo sin JavaScript.</p>
                <Button href="https://www.youtube.com/channel/UC5r4oV_i4-Ydta_OJkPq50g" children='Visit my Channel' className='btn-primary md:mx-auto lg:mx-0' target="_blank" />

            </div>
            <iframe className="border-b-8 border-amber-500 border-solid" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Iwy8o-hqJ-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="container flex flex-wrap lg:flex-row gap-x-4 gap-y-5 sm:justify-center md:justify-between">
            {videoID.map((video, key = { video }) => {
                return (
                    <div className="flex flex-col justify-between my-4 border-b-4 border-amber-500 border-solid">
                        <h3 className="max-w-videoTitle pb-2 text-slate-400">{video.title}</h3>
                        <iframe width={videos.width} height={videos.height} src={videos.src + video.id} frameborder={videos.frameBorder} allowFullScreen title="Youtube video"></iframe>
                    </div>
                )
            })}

        </div>
    </section>
}
export default Tutorials