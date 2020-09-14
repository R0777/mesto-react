import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import '../index.css';

const App = () => {

const [isEditProfilePopupOpen, setProfile] = React.useState(false);
const [isAddPlacePopupOpen, setPlace] = React.useState(false);
const [isEditAvatarPopupOpen, setAvatar] = React.useState(false);
const [isTrash, setTrash] = React.useState(false);
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

function handleTrash() {
  setTrash(true)
}

const handleCardClick = (card) => {
 setSelectedCard(card)
}

function closeAllPopups() {
  setPlace(false)
  setProfile(false)
  setAvatar(false)
  setTrash(false)
  setSelectedCard()
}

const stateStatus = {
  profile: isEditProfilePopupOpen,
  place: isAddPlacePopupOpen,
  avatar: isEditAvatarPopupOpen,
  trash: isTrash
}

  return (
    <div className="page">
  <Header />
  <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onTrash={handleTrash} onEditAvatar={handleEditAvatarClick} isOpen={stateStatus} onClose={closeAllPopups} card={selectedCard} onCardClick={handleCardClick} />
  <Footer />
</div>
  );
}

export default App;
