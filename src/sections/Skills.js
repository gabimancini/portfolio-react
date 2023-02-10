// Components
import SectionTitles from "../components/SectionTitles";
import SkillProgress from "../components/SkillProgress";

const Skills = () => {
    const firstWordTitle = 'My';
    const title = ' Skills';
    const skills = [
        {
            label: 'React',
            value: '70'
        },
        {
            label: 'JS',
            value: '80'
        },
        {
            label: 'HTML5',
            value: '100'
        },
        {
            label: 'SASS',
            value: '90'
        },
        {
            label: 'Tailwind',
            value: '70'
        },
        {
            label: 'Teaching',
            value: '100'
        },
        {
            label: 'Agile Methodologies',
            value: '100'
        }
    ]
    return (
        <div>
            <SectionTitles firstWordTitle={firstWordTitle} title={title} />
            {
                skills.map(skill => (
                    <SkillProgress key={skill.label} label={skill.label} value={skill.value} className="mb-6" />
                ))
            }
        </div>
    )
}

export default Skills;