import "./styles.css"


type ShoppingCartProps = {

    onClick: React.MouseEventHandler<SVGSVGElement>;

}


function ShoppingCartLogo({onClick}: ShoppingCartProps) {

    return (

        <svg onClick={onClick} className="shopping-cart-icon" width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.72222 22H27.2222C28.2917 22 29.1667 22.9 29.1667 24C29.1667 25.1 28.2917 26 27.2222 26H7.77778C6.70833 26 5.83333 25.1 5.83333 24V4H1.94444C0.875 4 0 3.1 0 2C0 0.9 0.875 0 1.94444 0H7.77778C8.84722 0 9.72222 0.9 9.72222 2V6H35L27.2222 20H9.72222V22ZM8.75 28C10.3639 28 11.6667 29.34 11.6667 31C11.6667 32.66 10.3639 34 8.75 34C7.13611 34 5.83333 32.66 5.83333 31C5.83333 29.34 7.13611 28 8.75 28ZM26.25 28C27.8639 28 29.1667 29.34 29.1667 31C29.1667 32.66 27.8639 34 26.25 34C24.6361 34 23.3333 32.66 23.3333 31C23.3333 29.34 24.6361 28 26.25 28Z" fill="currentColor" />
        </svg>

    )
}


export default ShoppingCartLogo
