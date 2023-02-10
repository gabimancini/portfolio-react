const SkillProgress = ({ label, value }) => {
    return (
        <div className='flex flex-col'>
            <label htmlFor={label}>{label}</label>

            <progress id={label} max="100" value={value} className='progress mb-2'> {value}% </progress>
        </div>
    )
}

export default SkillProgress;