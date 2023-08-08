import './index.css';
import '../index.css';


function StandardCard(props) {

  //todo in case the hoverable cards are gonna have the same effect, make a new class for it and put it on index.css generalized for the cards components


  return (
    <div className={`individualCard common ${props.selected ? 'permanentlySelectedStandard' : ''}`}>
      <h3>{props.name}</h3>
      <div className="icons">
        <img src={props.image} alt="" width="120px" height="120px"/>
        {props.rearm ? <img className="rearm" src='./assets/roles/rearm.png' alt="Character Rearm" width="30px" height="30px"/> : ''}
        {props.kind ? <img className="kind" src={props.kind} alt="Character Kind" width="30px" height="30px"/> : ''}
        {props.role ? <img className="roles" src={props.role} alt="Character Role" width="25px" height="25px"/> : ''}
      </div>
      <div className='hoverDetails'>{props.description}</div>
    </div>
  );
}

export default StandardCard;
