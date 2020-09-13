import React from 'react';

const ImagePopup = (props) => {
 return (
    <section className={`popup ${props.card && 'active'}`} id="bigimg">
    <figure className="popup__block-big">
      <button className="popup__close" type="button" onClick={props.onClose}></button>
      <img src="" alt="" className="popup__pic" />
      <figcaption className="popup__text">
        <p className="popup__place"></p>
      </figcaption>
    </figure>
  </section>
 );
}

export default ImagePopup;