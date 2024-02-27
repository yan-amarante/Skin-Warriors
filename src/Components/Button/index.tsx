import "./styles.css"


type buttonProps = {

    title: string;

    className?: string;

    onClick: React.MouseEventHandler;

    isActive?: boolean;

}


function Button({ title, className, onClick, isActive }: buttonProps) {

    function returnState() {

        if (isActive) return ""

        else return "cta-button-home-disabled disabled-button"
        
    }


    return (

        <button onClick={onClick} className={`cta-button-home ${className} ${returnState()}`}><p className="cta-button-text">{title}</p></button>

    )

}


export default Button