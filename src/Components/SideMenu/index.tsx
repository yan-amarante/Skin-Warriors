import "./styles.css"

import Close from "../Icons/Close"


type SideMenuProps = {

    updateState: React.Dispatch<React.SetStateAction<boolean>>;

}


function SideMenu({ updateState }: SideMenuProps) {

    return (

        <section className="menu-container">
            <Close className="close-menu" menuState={updateState} />
        </section>

    )

}


export default SideMenu