import React from 'react';

const PopupWithForm = (props) => {
 return (
    <section className="popup" id="add-card">
    <form className="popup__block" novalidate>
      <button className="popup__close" type="button"></button>
 <h4 className="popup__title">{props.children}</h4>
      <label className="popup__field">
      <input type="text" className="popup__input popup__input_place" id={props.id} name={props.name} placeholder={props.placeholder} minlength="1" maxlength="30" required />
      <span className='popup__input-error' id='place-input-error'></span>
      </label>
      <label className="popup__field">
      <input className="popup__input popup__input_pic" id='pic-input' placeholder="Ссылка на картинку" name="link" type="url" required />
      <span className='popup__input-error' id='pic-input-error'></span>
      </label>
      <button className="popup__save" type="submit">Сохранить</button>
    </form>
  </section>
 );
}

export default PopupWithForm;