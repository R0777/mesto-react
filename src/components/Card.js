import React from 'react';

const Card = (props) => {

  function handleCardClick() {
    props.onCardClick(props)
  }


 return (

<div className="template__place">
    <figure className="card">
      <img src={props.src} alt={props.alt} className="card__pic" onClick={handleCardClick} />
      <button className={`card__trash ${(props.owner===props.myId) && 'active'}`} onClick={props.onTrash}></button>
      <figcaption className="card__text">
 <h4 className="card__name">{props.title}</h4><div className="card__like-block"><button type="button" className="card__like"></button><p className="card__like-number">{props.likes}</p></div>
      </figcaption>
    </figure>
  </div>
 );
}

export default Card;