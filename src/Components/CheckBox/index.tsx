import "./styles.css"


type CheckBoxProps = {

    title: string;

    updateState: React.MouseEventHandler;

    state: any;

}

function CheckBox({ title, updateState,state }: CheckBoxProps) {
console.log(state)
    function changeCheckBoxStyle(){

        if(state) return "enabled-checkBox"

        else if(!state) return "disabled-checkBox"
    }

    return (

        <section className="check-box-container">
            <div onClick={updateState} className={`check-box ${changeCheckBoxStyle()}`}></div>
            <h2>{title}</h2>
        </section>
    )
}


export default CheckBox