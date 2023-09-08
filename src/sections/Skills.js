// Components
import SectionTitles from "../components/SectionTitles";
import SkillProgress from "../components/SkillProgress";
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaWordpress } from 'react-icons/fa';
import { FaTrello } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
const Skills = ({ title }) => {
    let main = "Skills";
    let secondary = "My ";
    let description = "Whether it's a custom website build or an e-commerce platform, I deliver tailored solutions to meet your unique needs."
    title = <>{secondary}<span className="text-darkMagenta">{main}</span></>;
    const skills = [
        {
            label: 'HTML5',
            value: '100',
            icon: <FaHtml5 />
        },
        {
            label: 'CMS / E-commerce ',
            value: '70',
            icon: <FaWordpress />
        },
        {
            label: 'CSS',
            value: '100',
            icon: <FaCss3Alt />
        },
        {
            label: 'Git',
            value: '100',
            icon: <FaGitAlt />
        },
        {
            label: 'JS',
            value: '80',
            icon: <FaJsSquare />
        },
        {
            label: 'Agile Methodologies',
            value: '100',
            icon: <FaTrello />
        },

        {
            label: 'React',
            value: '70',
            icon: <FaReact />
        },


        {
            label: 'Language',
            value: '90',
            icon: <FaComments />
        }

    ]
    return (
        <section id="skills">
            <div className=" container" >
                <SectionTitles title={title} description={description} />
                <div className="flex flex-col md:flex-row md:flex-wrap justify-between">
                    {
                        skills.map(skill => (
                            <SkillProgress key={skill.label} label={skill.label} value={skill.value} icon={skill.icon} className="mb-6" />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills;