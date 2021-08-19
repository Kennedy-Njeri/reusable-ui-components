import React from "react"



const CheckBox = ({ type, label, selected, onChange}) => {
    return (
        <div>
            <label className="font-weight-bold">
                <input type={type} className="form-check-input" value={selected} defaultChecked={selected} onChange={onChange}/>
                {label}
                </label>
        </div>
    )
}

export default CheckBox