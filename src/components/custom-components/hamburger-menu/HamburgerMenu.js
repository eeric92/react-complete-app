import "./HamburgerMenu.css"

const HamburgerMenu = (props) => {
    return (
        <label className="hamburger">
            <input type={"checkbox"} id={"checkbox"}/>
            <span className={"line line--top"}/>
            <span className={"line line--middle"}/>
            <span className={"line line--bottom"}/>
        </label>
    )
}

export default HamburgerMenu