import React from 'react';

const Card = ({onCardClick, src, title, likes, ...props}) => {
 return (

<div className="template__place">
    <figure className="card">
      <img src={src} alt={title} className="card__pic" onClick={onCardClick} />
      <button className="card__trash"></button>
      <figcaption className="card__text">
 <h4 className="card__name">{title}</h4><div className="card__like-block"><button type="button" className="card__like"></button><p className="card__like-number">{likes}</p></div>
      </figcaption>
    </figure>
  </div>
 );
}

export default Card;