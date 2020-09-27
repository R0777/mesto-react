import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import EditAvatarPopup from './EditAvatarPopup'
import EditProfilePopup from './EditProfilePopup'
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
const [currentCards, setCurrentCards] = React.useState([])

React.useEffect(() => {

  Promise.all([
    api.getProfile(),
    api.getInitialCards()
  ])
    .then(res => {
      const [profile, card] = res

      setCurrentUser(profile)
      setCurrentCards(card)
    })
  .catch((err) => {
    console.log(err);
  })
},[])


const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
    api.addLike(card.id).then((newCard) => {
     
      const newCards = currentCards.map((c) => c._id === card.id ? newCard : c);
      setCurrentCards(newCards);
    })
    .catch((err) => {
      console.log(err);
    });
    }
    else {
      api.unLike(card.id).then((newCard) => {
     
        const newCards = currentCards.map((c) => c._id === card.id ? newCard : c);
        setCurrentCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }


  const handleDeleteCard = (card) => {

    api.deleteCard(card.id).then(res => {
      const deletedCard = currentCards.filter(el => 
        el._id !== card.id)
        setCurrentCards(deletedCard);
    })
    .catch((err) => {
      console.log(err);
    });
  }


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

function handleUpdateUser({name, about}) {
    api.setProfile(name, about)
    .then(res => setCurrentUser(res)
    )
    .catch((err) => {
      console.log(err);
    })
closeAllPopups();
}

function handleUpdateAvatar({avatar}) {
  console.log(avatar)
  api.profileAvatar(avatar)
  .then(res => setCurrentUser(res)
  )
  .catch((err) => {
    console.log(err);
  })
closeAllPopups();
}

  return (
    <CurrentCardContext.Provider value={currentCards}>
<CurrentUserContext.Provider value={currentUser}>
    <div className="page">
  <Header />
  <Main onCardLike={handleCardLike} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onTrash={handleTrashClick} onEditAvatar={handleEditAvatarClick} onClose={closeAllPopups} card={isSelectedCard} onCardClick={handleCardClick} onCardDelete={handleDeleteCard} />
  <EditProfilePopup title="Редактировать профиль" id="profile" isOpen={isEditProfilePopupOpen} buttonText={'Сохранить'} isClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
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

<EditAvatarPopup title="Обновить аватар" id="new-avatar" buttonText={'Обновить'} isOpen={isEditAvatarPopupOpen} isClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

<PopupWithForm title="Вы уверены?" id="remove-card" buttonText={'Удалить'} isOpen={isTrashOpen} isClose={closeAllPopups} />

  <Footer />
</div>
</CurrentUserContext.Provider>
</CurrentCardContext.Provider>
  );
}

export default App;
