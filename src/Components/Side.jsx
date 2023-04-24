import "../style.css"
export const Side = (props) =>{
    return(
        <div className="style" id="side">
      <div className="about">
        <h3 id={props.id}>About Study Buddy</h3>
        <h4 id="about">We understand how important it is to commit to a goal.
          This is the reason we are so invested in helping you reach
          your study goals. If finding a study buddy and efficiently
          maximizing your study time sounds good to you, then this
          is the place for you
        </h4>
        <h3 id="goals">Goals</h3>
        <ul>
          <li>Effective study in set time</li>
          <li>Pass every test with ease</li>
          <li>Meet buddies that keep you accountable</li>
        </ul>
      </div>
    </div>
    )
}