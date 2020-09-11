import React, { useEffect, useState } from 'react';
import Avatar from './Avatar';
import Card from './Card';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import {api} from '../utils/Api'

import FormAddcard from './FormAddcard';
import FormNewavatar from './FormNewavatar';
import FormProfile from './FormProfile';
import Formremovecard from './Formremovecard';


const Main = (props) => {

const [userName, setUserName] = React.useState();
const [userDescription, setUserDescription] = React.useState();
const [userAvatar, setUserAvatar] = React.useState();
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
    api.getProfile()
    .then(res => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
        // idProfile = res._id;
      })
      .catch((err) => {
        console.log(err);
      })
},[])


React.useEffect(() => {
    api.getInitialCards()
    .then(res => {
       const items = res.map(item => ({
           src: item.link,
           alt: item.name,
           title: item.name,
           likes: item.likes.length,
       }))
       setCards(items)
      })
      .catch((err) => {
        console.log(err);
      })
},[])


    return (
    <main>
       
    <Avatar avatar={props.onEditAvatar} profile={props.onEditProfile} addPlace={props.onAddPlace} username={userName} userdescription={userDescription} useravatar={userAvatar} />

    <section className="places">
    {cards.map(card => <Card {...card} />)}
    </section>

<PopupWithForm title="Редактировать профиль" id="profile" isOpen={props.isOpen.profile} isClose={props.onClose}>
<label className="popup__field">
      <input type="text" className="popup__input popup__input_name" id='name-input' name="name" placeholder="Ваше Имя" value="Жак-Ив Кусто" minlength="2" maxlength="40" required />
      <span className='popup__input-error' id='name-input-error'></span>
      </label>
      <label className="popup__field">
      <input type="text" className="popup__input popup__input_job" id='job-input' name="about" placeholder="О себе" value="Исследователь океана" minlength="2" maxlength="200" required />
      <span className='popup__input-error' id='job-input-error'></span>
      </label>
</PopupWithForm>

<PopupWithForm title="Новое место" id="add-card" isOpen={props.isOpen.place} isClose={props.onClose}>
<label className="popup__field">
      <input type="text" className="popup__input popup__input_place" id='place-input' name="place" placeholder="Название" minlength="1" maxlength="30" required />
      <span className='popup__input-error' id='place-input-error'></span>
      </label>
      <label className="popup__field">
      <input className="popup__input popup__input_pic" id='pic-input' placeholder="Ссылка на картинку" name="link" type="url" required />
      <span className='popup__input-error' id='pic-input-error'></span>
      </label>
</PopupWithForm>

<PopupWithForm title="Обновить аватар" id="new-avatar" isOpen={props.isOpen.avatar} isClose={props.onClose}>
<label className="popup__field">
      <input type="url" className="popup__input popup__input_place" id='avatar-input' name="avatar" value="" placeholder="Ссылка на картинку" required />
      <span className='popup__input-error' id='avatar-input-error'></span>
      </label>
</PopupWithForm>

<PopupWithForm title="Вы уверены?" id="remove-card" />
   
    <ImagePopup />
    </main>
    );
}

export default Main;