import '../App.css';
import React, { useState } from 'react'
import Posts from './db.json';

const Action = () => {
  const [items, setItems] = useState(Posts);

  const filterItem = (categItem) =>{
    const updatedItem = Posts.filter((curElem) =>{
        return curElem.category === categItem;
    });
    setItems(updatedItem);
  }

  return (
    <div className="AppBtns">
      <div className="ActionDiv">
        <button className="Action-bin" onClick={() => filterItem('trending')}><i className="fa fa-fire" aria-hidden="true"></i> 24h Trending</button>
        <button className="Action-bin" onClick={() => filterItem('latest')}> Latest shows</button>
        <button className="Action-bin" onClick={() => filterItem('popular')}> Most Popular</button>
        <button className="Action-bin" onClick={() => filterItem('ingenesis')}><i className="fa fa-diamond" aria-hidden="true"></i> In Genesis</button>
        <button className="Action-bin" onClick={() => filterItem('intemple')}><i className="fa fa-home" aria-hidden="true"></i> In Temple</button>
        <button className="Action-bin" onClick={() => filterItem('invoid')}><i className="fa fa-bolt" aria-hidden="true"></i> In Void</button>        
        <button className="Action-bin" onClick={() => filterItem('bayc')}><i className="fa fa-optin-monster" aria-hidden="true"></i> #BAYC</button>
      </div>
      <div className="postMainDiv">
        {
         items && items.map( (elem) => { 
           const {id, image, title, tags, ukey} = elem;
            
           return(
              <div className="Card" key={id}>
                <div className="CardImg">
                  <img src={image} alt={title}/>
                </div>
                <div className="CardData">
                    <h3>{title}</h3>
                    <p>{tags} <br/> {ukey}</p>
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
