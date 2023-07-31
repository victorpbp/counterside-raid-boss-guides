import './index.css';

function StandoutCard(props) {
  
  return (
    <div className='individualcard crucial'>
      <h3>{props.name} - {props.tier}</h3>
      <img src={props.image} alt="" width="180px" height="180px"/>
      <p>{props.description}</p>
    </div>
  );
}

export default StandoutCard;
