import '../App.css';
import Posts from './db.json';

function Action() {
  return (
    <div className="AppBtns">
      <div className="ActionDiv">
        <button className="Action-bin"><i className="fa fa-fire" aria-hidden="true"></i> 24h Trending</button>
        <button className="Action-bin"> Latest shows</button>
        <button className="Action-bin"> Most Popular</button>
        <button className="Action-bin"><i className="fa fa-diamond" aria-hidden="true"></i> In Genesis</button>
        <button className="Action-bin"><i className="fa fa-home" aria-hidden="true"></i> In Temple</button>
        <button className="Action-bin"><i className="fa fa-bolt" aria-hidden="true"></i> In Void</button>        
        <button className="Action-bin"><i className="fa fa-optin-monster" aria-hidden="true"></i> #BAYC</button>
      </div>
      <div className="postMainDiv">
        {
         Posts && Posts.map( item => { 
            return(
              <div className="Card" key={item.id}>
                <div className="CardImg">
                  <img src={item.image} alt={item.title}/>
                </div>
                <div className="CardData">
                    <h3>{item.title}</h3>
                    <p>{item.tags} <br/> {item.ukey}</p>
                </div>
              </div>
            )
          })
        } 
      </div>
    </div>
  );
}

export default Action;
