import "./styles.css"

import { ReactNode, useState, useEffect, useRef } from 'react';


type DropdownProps<T extends ReactNode> = {

    title?: string;

    options: T;

}


function Dropdown<FunctionType extends ReactNode>({ title, options }: DropdownProps<FunctionType>) {

    const [dropdown, setDropdown] = useState<boolean>(false)

    const [inputDropDown, setInputDropDown] = useState<string>("input-label-disabled")


    const dropdownRef = useRef<any>(null)

    const optionsRef = useRef<any>(null)



    useEffect(() => {

        let handler = (e: any) => {

            if (dropdownRef.current !== null) {

                if (!dropdownRef.current.contains(e.target)) {

                    setDropdown(false)

                }

            }
        }

        document.addEventListener("mousedown", handler)

        updateInputDropdown()

        return () => {

            document.removeEventListener("mousedown", handler)

        }


    })


    function openOptions() {

        if (!dropdown && optionsRef.current?.childNodes.length > 0) setDropdown(true)

        else if (dropdown) setDropdown(false)

    }

    function showDisplay() {

        if (dropdown) return "enabled-dropdown"

        else if (!dropdown) return "disabled-dropdown"

    }

    function updateInputDropdown() {

        if (optionsRef.current?.childNodes.length > 0) return setInputDropDown("input-label-enabled")

        else if (optionsRef.current?.childNodes.length === 0) return setInputDropDown("input-label-disabled")

    }

    function changeColorBasedInDropdownLength() {

        if (inputDropDown === "input-label-enabled") return "input-label-enabled"

        else if (inputDropDown === "input-label-disabled") return "input-label-disabled"

    }


    return (

        <section ref={dropdownRef} className="dropdown-container">
            <section onClick={openOptions} className="title-arrow">
                <h3 className={`input-label ${changeColorBasedInDropdownLength()}`}>{title}</h3>
                <Arrow className={changeColorBasedInDropdownLength()} />
            </section>
            <section ref={optionsRef} className={`skin-card-container ${showDisplay()}`}>
                {options}
            </section>
        </section>

    )

}

function Arrow({ className }: any) {

    return (
        <svg className={`arrow-icon ${className}`} width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5275 0L6.5 4.94467L11.4725 0L13 1.52227L6.5 8L0 1.52227L1.5275 0Z" fill="currentColor" />
        </svg>

    )
}


export default Dropdown