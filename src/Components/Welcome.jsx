import "../style.css"

export const Welcome = (props) =>{
    return(
        <div className="welcome">
        <h3 id="welcome">Welcome to</h3>
        <br/>
        <h1 id="buddy">Buddy</h1>
        <br/>
        <h3 id="sign">{props.sign}</h3>
    </div>
    )
}