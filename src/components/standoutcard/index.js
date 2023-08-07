import './index.css';

function StandoutCard(props) {
  
  return (
    <div className={`individualcardStandout ${props.border ? 'border' : ''} ${props.onlyStandout ? 'onlyStandout' : 'crucial'}`}>
      <h3>{props.name}</h3>
      <div className="icons">

        <img id="char" src={props.image} alt="Character Icon" width="160px" height="160px"/>

        {props.role ? <img className="roles" src={props.role} alt="Character Role" width="30px" height="30px"/> : ''}

        <div className="roles" >
          {props.activation ?
            props.activation.map((item, index) => {
              if(index === 0) {
                return (
                  <img src={item} alt="" width="25px" height="25px"/>
                  )
              } else {
                return (
                  <img src={item} alt="" width="25px" height="25px"/>
                )
              }
            })
          : ''}
        </div>




      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default StandoutCard;
