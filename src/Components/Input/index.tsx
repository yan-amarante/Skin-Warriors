import "./styles.css"


type inputProps = {

    title?: string;

    onChange: any;

    classname: string;

}


function Input({ title, onChange, classname }: inputProps) {

    return (

        <section>
            <h3 className="input-label">{title}</h3>
            <input onChange={onChange} className={`input ${classname}`} type="text" />
        </section>

    )

}


export default Input