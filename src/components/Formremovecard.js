import React from 'react';

const Formremovecard = () => {
 return (
    <section className="popup" id="remove-card">
    <form className="popup__block" noValidate>
      <button className="popup__close" type="button"></button>
      <h4 className="popup__title">Вы уверены?</h4>
      <button className="popup__save" type="submit">Угу</button>
    </form>
  </section>
 );
}

export default Formremovecard;