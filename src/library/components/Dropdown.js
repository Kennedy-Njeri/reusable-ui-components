import React from "react"





const DropDown = ({ value, data, placeholder, onChange, name}) => {

    return (
        <div>
        <label className="font-weight-bold">{name}</label>
        <select
    value={value}
    className="form-control"
    onChange={onChange}>
        <option value="">{placeholder}</option>
    {data.map((item, key) => (
        <option
            key={key}
            value={item.value}>
            {item.label}
        </option>
    ))}</select>
        </div>
    )
}





export default DropDown