import './index.css';

function StandoutCard(props) {
  
  return (
    <div className='individualcard crucial'>
      <h3>{props.name} - {props.tier}</h3>
      <img src={props.image} alt="" width="160px" height="160px"/>
      <p>{props.description}</p>
    </div>
  );
}

export default StandoutCard;
