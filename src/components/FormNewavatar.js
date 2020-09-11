import React from 'react';

const FormNewavatar = () => {
 return (
    <section className="popup" id="new-avatar">
    <form className="popup__block" novalidate>
      <button className="popup__close" type="button"></button>
      <h4 className="popup__title">Обновить аватар</h4>
      <label className="popup__field">
      <input type="url" className="popup__input popup__input_place" id='avatar-input' name="avatar" value="" placeholder="Ссылка на картинку" required />
      <span className='popup__input-error' id='avatar-input-error'></span>
      </label>
      <button className="popup__save" type="submit">Сохранить</button>
    </form>
  </section>
 );
}

export default FormNewavatar;