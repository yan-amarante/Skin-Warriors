type state = {
    onClick: React.MouseEventHandler<SVGSVGElement>;
    className?: string
}

function Close({ onClick, className }: state) {

    return (

        <svg onClick={onClick} className={className}  width="800" height="800" viewBox="0 0 800 800" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M112 682.24L688 106.24" stroke="currentColor" stroke-width="48" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M112 106.24L688 682.24" stroke="currentColor" stroke-width="48" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )

}


export default Close