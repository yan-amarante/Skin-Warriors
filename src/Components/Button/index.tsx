import "./styles.css"


type buttonProps = {

    title: string;

    className: string;

    onClick: React.MouseEventHandler;

}


function Button({ title, className, onClick }:buttonProps) {

    return(

        <button onClick={onClick} className={`cta-button-home ${className}`}><p className="cta-button-text">{title}</p></button>

    )

}


export default Button