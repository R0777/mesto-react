import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import '../index.css';

const App = () => {

const [isEditProfilePopupOpen, setProfile] = React.useState(false);
const [isAddPlacePopupOpen, setPlace] = React.useState(false);
const [isEditAvatarPopupOpen, setAvatar] = React.useState(false);



function handleEditAvatarClick() {
    setAvatar(true)
}

function handleEditProfileClick() {
  setProfile(true)
}

function handleAddPlaceClick() {
  setPlace(true)
}

function closeAllPopups() {
  setPlace(false)
  setProfile(false)
  setAvatar(false)
}

const stateStatus = {
  profile: isEditProfilePopupOpen,
  place: isAddPlacePopupOpen,
  avatar: isEditAvatarPopupOpen
}

  return (
    <div className="page">
  <Header />
  <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} isOpen={stateStatus} onClose={closeAllPopups} />
  <Footer />
</div>
  );
}

export default App;
