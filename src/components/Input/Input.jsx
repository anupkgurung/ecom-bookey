import React from "react";

export const Input = ({ 
        id ="", 
        title="", 
        type = "text", 
        onChange = ()=>{}, 
        value = "", 
        placeholder ="", 
        hasAutoComplete = false, 
        isRequired =false ,
        hasOnlyInput = false
    }) => {
    return (
        <>
            {!hasOnlyInput ? type !== "checkbox" ?
                <div className="flex-col padding-top-4">
                    <label className="margin-btm-2" htmlFor={id}>{title}</label>
                    <input className="input-width" autoComplete={hasAutoComplete ? "on" : "off"}
                        type={type} name={id} id={id} placeholder={placeholder}
                         required={isRequired} onChange={onChange} value={value} />
                </div> :
                <div className="show-paswrd flex-row padding-top-2">
                    <input type={type} id={id} className="checkbox" onChange={onChange} />
                    <label htmlFor="id">{title}</label>
                </div>
                :
                <input className="input-width" autoComplete={hasAutoComplete ? "on" : "off"}
                    type={type} name={id} id={id} placeholder={placeholder}
                    required={isRequired} onChange={onChange} value={value} />
            }
        </>
    )
}