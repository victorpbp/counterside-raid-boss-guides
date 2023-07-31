import './index.css';

function StandardCard(props) {

  //todo Make the cards hoverable show the description
  
  return (
    <div className='individualcard common'>
      <h3>{props.name} - {props.tier}</h3>
      <img src={props.image} alt="" width="120px" height="120px"/>
    </div>
  );
}

export default StandardCard;
