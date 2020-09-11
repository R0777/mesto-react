import React from 'react';
import avatar from '../images/jpg/avatar.jpg'

const Avatar = (props) => {
 return (
    <section className="profile">
    <div className="profile__avatar"><img src={props.useravatar} alt="Ваше фото" className="profile__avatar-img" onClick={props.avatar} /></div>
    <div className="profile__info">
 <h1 className="profile__name" title={props.username}>{props.username}</h1>
      <button className="profile__edit" type="button" onClick={props.profile}></button>
      <p className="profile__job" title={props.userdescription}>{props.userdescription}</p>
    </div>
    <button className="profile__button" type="button" onClick={props.addPlace}></button>
  </section>
 );
}

export default Avatar;