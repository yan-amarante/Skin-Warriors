type MenuProps = {

    onClick: React.MouseEventHandler<SVGSVGElement>;

    className: string;

}


function Menu({onClick, className}: MenuProps) {

    return (

        <svg onClick={onClick} className={className} width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.339844H36V4.83984H0V0.339844ZM0 11.5898H36V16.0898H0V11.5898ZM0 22.8398H36V27.3398H0V22.8398Z" fill="currentColor" />
        </svg>

    )

}


export default Menu