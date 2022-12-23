import "./InputFieldAnimation.css"

const InputFieldAnimation = () => {
    return (
        <div className={"input-group"}>
            <input type={"email"} placeholder={"email@domain.com"} id={"email"}/>
            <label>
                <span className={"icon"}>
                    <i className={"ri-mail-line"}></i>
                </span>
                Email Address
            </label>
        </div>
    )
}

export default InputFieldAnimation