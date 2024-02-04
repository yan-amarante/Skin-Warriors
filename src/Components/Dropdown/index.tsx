import "./styles.css"

import React, { ReactNode, useState } from 'react';


type DropdownProps<T extends ReactNode> = {

    title: string;

    options: T;

    defaultMessage?: string;

}


function Dropdown<FunctionType extends ReactNode>({ title, options, defaultMessage }: DropdownProps<FunctionType>) {

    const [dropdown, setDropdown] = useState<boolean>(false)

    function openOptions() {

        if (!dropdown) setDropdown(true)

        else if (dropdown) setDropdown(false)

    }

    function showDisplay() {

        if (dropdown) return "enabled-dropdown"

        else if (!dropdown) return "disabled-dropdown"

    }


    return (

        <section className="dropdown-container">
            <section onClick={openOptions} className="title-arrow">
                <h3 className="input-label">{title}</h3>
                <Arrow />
            </section>
            <section className={`skin-card-container ${showDisplay()}`}>
                <h2>{defaultMessage}</h2>
                {options}
            </section>
        </section>

    )

}

function Arrow() {

    return (
        <svg className="arrow-icon" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5275 0L6.5 4.94467L11.4725 0L13 1.52227L6.5 8L0 1.52227L1.5275 0Z" fill="currentColor" />
        </svg>

    )
}


export default Dropdown