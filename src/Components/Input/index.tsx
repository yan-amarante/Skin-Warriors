import "./styles.css"


type inputProps = {

    title: string;

}


function Input({title}:inputProps){

    return(

        <section>
            <h3 className="input-label">{title}</h3>
            <input className="input" type="text" />
        </section>

    )

}


export default Input