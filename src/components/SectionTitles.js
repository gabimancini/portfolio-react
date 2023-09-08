import React from "react";
const SectionTitles = ({ description, title }) => {

    return (
        <>
            <h2 className='text-h2 mb-8 text-center'> {title} </h2>

            {description && <p className='text-center text-darkGray  max-w-xl mx-auto mb-20'>{description}</p>}
        </>
    )
}

export default SectionTitles;