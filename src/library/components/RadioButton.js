import React from "react"






const RadioButton = ({ name, value, onChange, data, type, selected}) => {


    return (
        <div className="col-sm-10">

        <div className="form-check">

            { data.map((item, index) =>
                (
                <div>
                    <label key={index}>
                    <input className="form-check-input" type={type} value={item.value} key={index} onChange={onChange} checked={selected === item.value} />
                        {item.text}
                        </label>
                </div>
            ))}

        </div>
        </div>
    )
}



export default RadioButton