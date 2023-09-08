// Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import FormInputs from "../components/FormInputs";
import SectionTitles from '../components/SectionTitles';
const Contact = ({title}) => {
    const navigate = useNavigate();
    let main = "Touch ";
    let secondary = "Get in ";
    title = <>{secondary}<span className="text-darkMagenta">{main}</span></>;
    const description = "Let's connect and discuss how I can bring your web vision to life.";
    const inputStyles = "rounded-t-md  px-3 py-2 text-gray-900";
    const [values, setValues] = useState({
        name: '',
        LastName: '',
        email: ''
    })

    const inputs = [{
        id: 1,
        name: 'name',
        type: 'text',
        placeholder: 'Name',
        errorMessage: "Please, entry a name",
        className: inputStyles
    },
    {
        id: 2,
        name: 'LastName',
        type: 'text',
        placeholder: 'Last Name',
        errorMessage: "Please, entry a last name",
        className: inputStyles
    },
    {
        id: 3,
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        errorMessage: "It should be a valid email address",
        pattern: '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}',
        className: inputStyles + ' col-span-2'
    }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado");
        navigate('/confirm-form');
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return (
        <section id="contactMe" className="container text-center form-group">
            <SectionTitles title={title} description={description} />
            <form onSubmit={handleSubmit} className="text-left">
                <div className='grid grid-cols-2 grid-flow-rows pb-20 gap-6'>
                    {
                        inputs.map((input) => (
                            <FormInputs
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={handleChange}
                                className={input.className}
                            />
                        ))
                    }
                    <div className='px-3 col-span-2'>
                        <textarea className="h-20 border-b border-solid border-darkViolet " placeholder="Message"></textarea>
                    </div>
                </div>
                <button className="btn-primary">Send Message</button>
            </form>
        </section>
    )
}

export default Contact;