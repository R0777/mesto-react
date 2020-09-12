import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import '../index.css';

const App = () => {

const [isEditProfilePopupOpen, setProfile] = React.useState(false);
const [isAddPlacePopupOpen, setPlace] = React.useState(false);
const [isEditAvatarPopupOpen, setAvatar] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState(false)

function handleCardClick() {
  setSelectedCard(true)
}

function handleEditAvatarClick() {
    setAvatar(true)
}

function handleEditProfileClick() {
  setProfile(true)
}

function handleAddPlaceClick() {
  setPlace(true)
}

function handleCardClick() {
  setSelectedCard(true)
}

function closeAllPopups() {
  setPlace(false)
  setProfile(false)
  setAvatar(false)
  setSelectedCard(false)
}

const stateStatus = {
  profile: isEditProfilePopupOpen,
  place: isAddPlacePopupOpen,
  avatar: isEditAvatarPopupOpen,
}

  return (
    <div className="page">
  <Header />
  <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} isOpen={stateStatus} onClose={closeAllPopups} card={selectedCard} onCardClick={handleCardClick} />
  <Footer />
</div>
  );
}

export default App;
