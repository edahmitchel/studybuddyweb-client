import "../style.css"

export const Input = (props) =>{
    return(
        <div className="inputs">
        <label>{props.label}</label>
        <br/>
        <input type={props.type}/>
    </div>
    )
}