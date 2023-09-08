const SkillProgress = ({ label, value,icon }) => {
    return (
        <div className='flex flex-col md:w-6/12 p-5'>
           <div className="flex items-center mb-[5px] pl-[10px]"><span className="mr-2">{icon}</span><label htmlFor={label}>{label}</label></div> 
            <progress id={label} max="100" value={value} className='progress mb-2'> {value}% </progress>
        </div>
    )
}

export default SkillProgress;