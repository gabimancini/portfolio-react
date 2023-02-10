// Hook
import { useState } from "react";

const FormInputs = (props) => {
    const[focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, className, ...inputProps } = props;
    const handleBlur=(e)=>{
        setFocused(true)
    }
    return (
        <div className={className} >
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleBlur}
                required
                focused = {focused.toString()}
                className="form-inputs"
                />
            <div id="errorMessage" className="error-message">{errorMessage}</div>
        </div>
    );
}

export default FormInputs;