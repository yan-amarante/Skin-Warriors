import React, { ReactNode, useEffect } from 'react';


type DropdownProps<T extends ReactNode> = {

    title: string;

    onChange: React.ChangeEventHandler;

    selectRef: React.RefObject<HTMLSelectElement>;

    options: T;

    defaultMessage: string;

}


function Dropdown<FunctionType extends ReactNode>({ title, onChange, selectRef, options, defaultMessage }: DropdownProps<FunctionType>) {

    return (

        <>
            <h3 className="input-label">{title}</h3>
            <select onChange={onChange} ref={selectRef} name={title}>
                <option value="default">{defaultMessage}</option>
                {options}
            </select>
        </>

    )

}


export default Dropdown