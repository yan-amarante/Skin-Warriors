import "./styles.css"


type inputProps = {

    title: string;

    onChange: any

}


function Input({title, onChange}:inputProps){

    return(

        <section>
            <h3 className="input-label">{title}</h3>
            <input onChange={onChange} className="input" type="text" />
        </section>

    )

}


export default Input