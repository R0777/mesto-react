import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer.js';
import '../index.css';

const App = () => {

const [isEditProfilePopupOpen, setProfile] = React.useState(false);
const [isAddPlacePopupOpen, setPlace] = React.useState(false);
const [isEditAvatarPopupOpen, setAvatar] = React.useState(false);
const [isTrashOpen, setIsTrashOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState()


function handleEditAvatarClick() {
    setAvatar(true)
}

function handleEditProfileClick() {
  setProfile(true)
}

function handleAddPlaceClick() {
  setPlace(true)
}

function handleTrashClick() {
  setIsTrashOpen(true)
}

const handleCardClick = (card) => {
 setSelectedCard(card)
}

function closeAllPopups() {
  setPlace(false)
  setProfile(false)
  setAvatar(false)
  setIsTrashOpen(false)
  setSelectedCard()
}

  return (
    <div className="page">
  <Header />
  <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onTrash={handleTrashClick} onEditAvatar={handleEditAvatarClick} onClose={closeAllPopups} card={selectedCard} onCardClick={handleCardClick} />

  <PopupWithForm title="Редактировать профиль" id="profile" isOpen={isEditProfilePopupOpen} buttonText={'Сохранить'} isClose={closeAllPopups}>
<label className="popup__field">
      <input type="text" className="popup__input popup__input_name" id='name-input' name="name" placeholder="Ваше Имя" defaultValue="Жак-Ив Кусто" minLength="2" maxLength="40" required />
      <span className='popup__input-error' id='name-input-error'></span>
      </label>
      <label className="popup__field">
      <input type="text" className="popup__input popup__input_job" id='job-input' name="about" placeholder="О себе" defaultValue="Исследователь океана" minLength="2" maxLength="200" required />
      <span className='popup__input-error' id='job-input-error'></span>
      </label>
</PopupWithForm>

<PopupWithForm title="Новое место" id="add-card" isOpen={isAddPlacePopupOpen} buttonText={'Сохранить'} isClose={closeAllPopups}>
<label className="popup__field">
      <input type="text" className="popup__input popup__input_place" id='place-input' name="place" placeholder="Название" minLength="1" maxLength="30" required />
      <span className='popup__input-error' id='place-input-error'></span>
      </label>
      <label className="popup__field">
      <input className="popup__input popup__input_pic" id='pic-input' placeholder="Ссылка на картинку" name="link" type="url" required />
      <span className='popup__input-error' id='pic-input-error'></span>
      </label>
</PopupWithForm>

<PopupWithForm title="Обновить аватар" id="new-avatar" buttonText={'Обновить'} isOpen={isEditAvatarPopupOpen} isClose={closeAllPopups}>
<label className="popup__field">
      <input type="url" className="popup__input popup__input_place" id='avatar-input' name="avatar" placeholder="Ссылка на картинку" required />
      <span className='popup__input-error' id='avatar-input-error'></span>
      </label>
</PopupWithForm>

<PopupWithForm title="Вы уверены?" id="remove-card" buttonText={'Удалить'} isOpen={isTrashOpen} isClose={closeAllPopups} />

  <Footer />
</div>
  );
}

export default App;
