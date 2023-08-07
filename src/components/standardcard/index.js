import './index.css';

function StandardCard(props) {

  //todo Make the cards hoverable show the description
  
  return (
    <div className='individualcardStandard common'>
      <h3>{props.name}</h3>
      <div className="icons">
        <img src={props.image} alt="" width="120px" height="120px"/>
        {props.role ? <img className="roles" src={props.role} alt="Character Role" width="25px" height="25px"/> : ''}
      </div>
      <div className='hoverDetails'>{props.description}</div>
    </div>
  );
}

export default StandardCard;
