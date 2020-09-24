import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer.js';
import '../index.css';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { CurrentCardContext } from '../contexts/CurrentCardContext'

const App = () => {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [isTrashOpen, setIsTrashOpen] = React.useState(false);
const [isSelectedCard, setIsSelectedCard] = React.useState()
const [currentUser, setCurrentUser] = React.useState({})
const [currentCards, setCurrentCards] = React.useState({})

React.useEffect(() => {
  Promise.all([
    api.getProfile(), 
    api.getInitialCards()
  ])
    .then(res => {
      const [profile, cards] = res
      setCurrentUser(profile)
      setCurrentCards(cards)

    })
  .catch((err) => {
    console.log(err);
  })
},[])


function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(true)
}

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true)
}

function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true)
}

function handleTrashClick() {
  setIsTrashOpen(true)
}

const handleCardClick = (card) => {
 setIsSelectedCard(card)
}

function closeAllPopups() {
  setIsAddPlacePopupOpen(false)
  setIsEditProfilePopupOpen(false)
  setIsEditAvatarPopupOpen(false)
  setIsTrashOpen(false)
  setIsSelectedCard()
}

  return (
    <CurrentCardContext.Provider value={currentCards}>
<CurrentUserContext.Provider value={currentUser}>
    <div className="page">
  <Header />
  <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onTrash={handleTrashClick} onEditAvatar={handleEditAvatarClick} onClose={closeAllPopups} card={isSelectedCard} onCardClick={handleCardClick} />
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
</CurrentUserContext.Provider>
</CurrentCardContext.Provider>
  );
}

export default App;
