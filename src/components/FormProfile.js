import React from 'react';

const FormProfile = () => {
 return (
    <section className="popup" id="profile">
    <form className="popup__block" novalidate>
      <button className="popup__close" type="button"></button>
      <h4 className="popup__title">Редактировать профиль</h4>
      <label className="popup__field">
      <input type="text" className="popup__input popup__input_name" id='name-input' name="name" placeholder="Ваше Имя" value="Жак-Ив Кусто" minlength="2" maxlength="40" required />
      <span className='popup__input-error' id='name-input-error'></span>
      </label>
      <label className="popup__field">
      <input type="text" className="popup__input popup__input_job" id='job-input' name="about" placeholder="О себе" value="Исследователь океана" minlength="2" maxlength="200" required />
      <span className='popup__input-error' id='job-input-error'></span>
      </label>
      <button className="popup__save" type="submit">Сохранить</button>
    </form>
  </section>
 );
}

export default FormProfile;