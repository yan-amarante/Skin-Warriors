import "./styles.css"

import Close from "../Icons/Close"


type SideMenuProps = {

    state: boolean;

    updateState: React.Dispatch<React.SetStateAction<boolean>>;

}


function SideMenu({ state, updateState }: SideMenuProps) {

    function verifySideMenuState() {

        if (state) return "transition-side_menu"

    }


    return (

        <section className={`menu-container ${verifySideMenuState()}`}>
            <Close className="close-menu" menuState={updateState} />
        </section>

    )

}


export default SideMenu