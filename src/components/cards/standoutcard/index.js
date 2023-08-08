import './index.css';
import '../index.css';

function StandoutCard(props) {
  
  return (
    <div className={`individualCard ${props.selected ? 'permanentlySelectedStandout' : ''} ${props.border ? 'border' : ''} ${props.onlyStandout ? 'onlyStandout' : 'uncommon'}`}>
      <h3>{props.name}</h3>
      <div className="icons">

        <img id="char" src={props.image} alt="Character Icon" width="160px" height="160px"/>

        {props.rearm ? <img className="rearm" src='./assets/roles/rearm.png' alt="Character Rearm" width="30px" height="30px"/> : ''}

        {props.kind ? <img className="kind" src={props.kind} alt="Character Kind" width="30px" height="30px"/> : ''}

        {props.role ? <img className="roles" src={props.role} alt="Character Role" width="30px" height="30px"/> : ''}

        <div className="roles" >
          {props.activation ?
            props.activation.map((item, index) => {
              return (<img src={item} alt="" width="25px" height="25px"/>)
            }
            ) : ''}
        </div>




      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default StandoutCard;
